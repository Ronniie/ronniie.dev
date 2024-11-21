"use client";

import { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import React Icons with client-side rendering
const FaYoutube = dynamic(() => import("react-icons/fa6").then((mod) => mod.FaYoutube), { ssr: false });
const FaBluesky = dynamic(() => import("react-icons/fa6").then((mod) => mod.FaBluesky), { ssr: false });
const FaDiscord = dynamic(() => import("react-icons/fa6").then((mod) => mod.FaDiscord), { ssr: false });
const FaGithub = dynamic(() => import("react-icons/fa6").then((mod) => mod.FaGithub), { ssr: false });
const FaReddit = dynamic(() => import("react-icons/fa6").then((mod) => mod.FaReddit), { ssr: false });

// Self-hosted Services
const SiDocker = dynamic(() => import("react-icons/si").then((mod) => mod.SiDocker), { ssr: false });
const SiPlex = dynamic(() => import("react-icons/si").then((mod) => mod.SiPlex), { ssr: false });
const SiProxmox = dynamic(() => import("react-icons/si").then((mod) => mod.SiProxmox), { ssr: false });
const SiHomeassistant = dynamic(() => import("react-icons/si").then((mod) => mod.SiHomeassistant), { ssr: false });
const SiPaperlessngx = dynamic(() => import("react-icons/si").then((mod) => mod.SiPaperlessngx), { ssr: false });


const Terminal: React.FC = () => {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState<JSX.Element[]>([<MOTD key="motd" />]);
    const [history, setHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState<number | null>(null);

    const terminalEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleInput = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (input.trim() === "") return;

        const commands: { [key: string]: JSX.Element[] } = {
            help: [
                <div key="help">
                    <strong  className="text-yellow-400">📖 Help Menu:</strong>
                    <ul className="mt-2 space-y-1">
                        <li>🆘 <strong className="text-green-400">help</strong>: Display this help menu.</li>
                        <li>📡 <strong className="text-green-400">socials</strong>: View my social links.</li>
                        <li>❌ <strong className="text-green-400">exit</strong>: Exit this terminal.</li>
                    </ul>
                    <p className="mt-4 text-gray-400">
                        💡 Pro Tip: Use <span className="text-green-400">↑</span> and <span className="text-green-400">↓</span> to navigate through your command history.
                    </p>
                </div>,
            ],
            socials: [
                <div key="socials">
                    <strong className="text-yellow-400">📡 Social Links:</strong>
                    <div className="text-white flex items-center mt-2">
                        <FaGithub className="text-gray-400 mr-2"/>
                        GitHub:{" "}
                        <a
                            href="https://github.com/Ronniie"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline"
                        >
                            Ronniie
                        </a>
                    </div>

                    <div className="text-white flex items-center mt-2">
                        <FaBluesky className="text-blue-400 mr-2"/>
                        BlueSky:{" "}
                        <a
                            href="https://bsky.app/profile/ronniie.dev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline"
                        >
                            @ronniie.dev
                        </a>
                    </div>
                    <div className="text-white flex items-center mt-2">
                        <FaDiscord className="text-blue-500 mr-2"/>
                        Discord:{" "}
                        ronniie.
                    </div>

                    <div className="text-white flex items-center mt-2">
                        <FaYoutube className="text-red-500 mr-2"/>
                        YouTube:{" "}
                        <a
                            href="https://www.youtube.com/@Zotechz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline"
                        >
                            @Zotechz
                        </a>
                    </div>
                    <div className="text-white flex items-center mt-2">
                        <FaReddit className="text-orange-500 mr-2"/>
                        Reddit:{" "}
                        <a
                            href="https://www.reddit.com/user/Zotechz/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline"
                        >
                            u/Zotechz
                        </a>
                    </div>
                </div>,
            ],
        };

        const commandOutput = commands[input] || [
            <div key="unknown" className="text-red-400">
                Unknown command: {input}
            </div>,
        ];

        setOutput((prev) => [...prev, <div key={`cmd-${input}`}>$ {input}</div>, ...commandOutput]);
        setHistory((prev) => [...prev, input]);
        setHistoryIndex(null); // Reset the history index
        setInput("");
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (history.length === 0) return;

        if (e.key === "ArrowUp") {
            e.preventDefault();
            if (historyIndex === null) {
                setHistoryIndex(history.length - 1);
                setInput(history[history.length - 1]);
            } else if (historyIndex > 0) {
                setHistoryIndex((prev) => {
                    const newIndex = prev! - 1;
                    setInput(history[newIndex]);
                    return newIndex;
                });
            }
        }

        if (e.key === "ArrowDown") {
            e.preventDefault();
            if (historyIndex !== null && historyIndex < history.length - 1) {
                setHistoryIndex((prev) => {
                    const newIndex = prev! + 1;
                    setInput(history[newIndex]);
                    return newIndex;
                });
            } else {
                setHistoryIndex(null);
                setInput("");
            }
        }
    };

    const handleClick = () => {
        const selection = window.getSelection();
        if (selection && selection.toString()) {
            return;
        }
        inputRef.current?.focus();
    };

    useEffect(() => {
        terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [output]);

    return (
        <div
            className="bg-black text-white font-mono w-full h-screen overflow-y-auto p-4"
            onClick={handleClick}
        >
            <div>
                {output.map((line, index) => (
                    <div key={index} className="whitespace-pre-wrap">
                        {line}
                    </div>
                ))}
            </div>

            <form onSubmit={handleInput} className="flex items-center mt-2">
                <span className="text-green-500">$</span>
                <input
                    ref={inputRef}
                    type="text"
                    className="bg-black text-white outline-none flex-1 ml-2"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    autoFocus
                />
            </form>
            <div ref={terminalEndRef}></div>
        </div>
    );
};


const MOTD = () => (
    <>
        <div className="text-green-400">
            {`  _____                   _ _           _            `}
            {`\n |  __ \\                 (_|_)         | |           `}
            {`\n | |__) |___  _ __  _ __  _ _  ___   __| | _____   __`}
            {`\n |  _  // _ \\| '_ \\| '_ \\| | |/ _ \\ / _\` |/ _ \\ \\ / /`}
            {`\n | | \\ \\ (_) | | | | | | | | |  __/| (_| |  __/\\ V / `}
            {`\n |_|  \\_\\___/|_| |_|_| |_|_|_|\\___(_)__,_|\\___| \\_/  `}
        </div>
        <div className="text-green-300 mt-4">
            <strong>Welcome to Ronnie&#39;s Development Terminal!</strong>
        </div>

        <div className="border-t border-gray-700 my-4"/>
        <strong className="text-yellow-400">🎩 ABOUT THE DEV</strong>
        <p className="text-white">
            Hi! I&#39;m Ronnie—a developer passionate about blending code and design.
        </p>
        <p className="text-white">
            This site is my playground for testing and crafting innovative projects.
        </p>
        <p className="text-white">
            When I&#39;m not tinkering here, I&#39;m programming for NullDaily LLC, building
            open-source tools to empower creators and developers.
        </p>

        <div className="border-t border-gray-700 my-4"/>
        <strong className="text-yellow-400">📡 SOCIALS</strong>
        <div className="text-white flex items-center mt-2">
            <FaGithub className="text-gray-400 mr-2"/>
            GitHub:{" "}
            <a
                href="https://github.com/Ronniie"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
            >
                Ronniie
            </a>
        </div>

        <div className="text-white flex items-center mt-2">
            <FaBluesky className="text-blue-400 mr-2"/>
            BlueSky:{" "}
            <a
                href="https://bsky.app/profile/ronniie.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
            >
                @ronniie.dev
            </a>
        </div>
        <div className="text-white flex items-center mt-2">
            <FaDiscord className="text-blue-500 mr-2"/>
            Discord:{" "}
            ronniie.
        </div>

        <div className="text-white flex items-center mt-2">
            <FaYoutube className="text-red-500 mr-2"/>
            YouTube:{" "}
            <a
                href="https://www.youtube.com/@Zotechz"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
            >
                @Zotechz
            </a>
        </div>
        <div className="text-white flex items-center mt-2">
            <FaReddit className="text-orange-500 mr-2"/>
            Reddit:{" "}
            <a
                href="https://www.reddit.com/user/Zotechz/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
            >
                u/Zotechz
            </a>
        </div>

        <div className="border-t border-gray-700 my-4"/>
        <strong className="text-yellow-400">⚙️ SELF-HOSTED TOOLS</strong>
        <div className="text-white flex items-center mt-2">
            <SiProxmox className="text-orange-500 mr-2"/>
            Proxmox: Virtual machines and containers, all in one place.
        </div>
        <div className="text-white flex items-center mt-2">
            <SiDocker className="text-blue-500 mr-2"/>
            Portainer: Orchestrating Docker containers effortlessly.
        </div>
        <div className="text-white flex items-center mt-2">
            <SiPlex className="text-blue-400 mr-2"/>
            Plex: Streaming my curated media library.
        </div>
        <div className="text-white flex items-center mt-2">
            <SiHomeassistant className="text-teal-400 mr-2"/>
            Home Assistant: Automating everything smart at home.
        </div>
        <div className="text-white flex items-center mt-2">
            <SiPaperlessngx className="text-green-500 mr-2"/>
            Paperless-ngx: Turning paper piles into searchable archives.
        </div>

        <div className="border-t border-gray-700 my-4"/>
        <p className="text-green-300">
            🌟 &#34;Code, automate, and create with purpose. This isn&#39;t just development;
            it&#39;s an adventure.&#34; 🌟
        </p>


        <div className="border-t border-gray-700 my-4"/>
        <div className="text-gray-400 mt-2">
            Type <span className="text-green-400">&#39;help&#39;</span> to see what you can do. Let’s explore together!
        </div>
    </>
);

export default Terminal;
