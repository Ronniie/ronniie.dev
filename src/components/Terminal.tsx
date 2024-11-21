"use client";

import { useState, useRef, useEffect } from "react";
import helpCommand from "../app/commands/help";
import socialsCommand from "../app/commands/socials";
import selfhostedCommand from "../app/commands/selfhosted";
import exitCommand from "../app/commands/exit";
import unknownCommand from "../app/commands/unknown";

const Terminal: React.FC = () => {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState<JSX.Element[]>([<MOTD key="motd" />]);
    const [history, setHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState<number | null>(null);
    const [suggestion, setSuggestion] = useState<string | null>(null); // For live suggestions

    const terminalEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const commandsList = ["help", "socials", "exit", "selfhosted"];
    useEffect(() => {
        window.scrollTo(0, 0); // Automatically scroll to the top
    }, []);


    const handleInput = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // If the input is empty, add a blank line
        if (input.trim() === "") {
            setOutput((prev) => [
                ...prev,
                <div key={`blank-${prev.length}`}>&nbsp;</div>, // Blank line
            ]);
            setInput(""); // Clear the input field
            return;
        }

        const normalizedInput = input.toLowerCase();
        const commands: { [key: string]: () => JSX.Element[] } = {
            help: helpCommand,
            socials: socialsCommand,
            exit: exitCommand,
            selfhosted: selfhostedCommand,
        };

        const commandOutput =
            commands[normalizedInput] || unknownCommand(normalizedInput);

        setOutput((prev) => [
            ...prev,
            <div key={`cmd-${input}`}>$ {input}</div>,
            ...commandOutput(),
        ]);
        setHistory((prev) => [...prev, input]);
        setHistoryIndex(null);
        setInput("");
        setSuggestion(null); // Clear suggestion after submission
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Tab") {
            e.preventDefault(); // Prevent browser default behavior
            if (suggestion) {
                setInput(suggestion);
                setSuggestion(null); // Clear suggestion after Tab
            }
        }

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

    const handleInputChange = (value: string) => {
        setInput(value);

        // Suggest commands dynamically
        const normalizedInput = value.toLowerCase();
        const matchedCommand = commandsList.find((command) =>
            command.startsWith(normalizedInput)
        );
        setSuggestion(matchedCommand || null);
    };

    useEffect(() => {
        terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [output]);

    return (
        <div
            className="bg-black text-white font-mono w-full h-screen overflow-y-auto p-4"
            onClick={() => inputRef.current?.focus()}
        >
            <div>
                {output.map((line, index) => (
                    <div key={index} className="whitespace-pre-wrap">
                        {line}
                    </div>
                ))}
            </div>
            <form onSubmit={handleInput} className="flex items-center mt-2 relative">
                <span className="text-green-500">$</span>
                <div className="relative flex-1 ml-2">
                    <input
                        ref={inputRef}
                        type="text"
                        className="bg-black text-white outline-none w-full"
                        value={input}
                        onChange={(e) => handleInputChange(e.target.value)}
                        onKeyDown={handleKeyDown}
                        autoFocus
                    />
                    {suggestion && input.trim() !== suggestion && (
                        <div
                            className="absolute top-0 left-0 text-gray-500"
                            style={{
                                opacity: 0.5,
                                pointerEvents: "none",
                                paddingLeft: "2px",
                            }}
                        >
                            {input}
                            <span className="text-gray-400">
                                {suggestion.slice(input.length)}
                            </span>
                        </div>
                    )}
                </div>
            </form>
            <div ref={terminalEndRef}></div>
        </div>
    );
};

const MOTD = () => {
    const socialsOutput = socialsCommand(false);
    const selfHostedOutput = selfhostedCommand(false);

    return (

        <>
            <div
                className="overflow-x-auto whitespace-pre font-mono text-xs sm:text-sm md:text-base text-green-400"
            >
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
            <div>
                {socialsOutput.map((line, index) => (
                    <div key={index}>{line}</div>
                ))}
            </div>

            <div className="border-t border-gray-700 my-4"/>
            <strong className="text-yellow-400">⚙️ SELF-HOSTED TOOLS</strong>
            <div>
                {selfHostedOutput.map((line, index) => (
                    <div key={index}>{line}</div>
                ))}
            </div>

            <div className="border-t border-gray-700 my-4"/>
            <p className="text-green-300">
                🌟 &#34;Code, automate, and create with purpose. This isn&#39;t just development;
                it&#39;s an adventure.&#34; 🌟
            </p>


            <div className="border-t border-gray-700 my-4"/>
            <div className="text-gray-400 mt-2">
                Type <span className="text-green-400">&#39;help&#39;</span> to see what you can do. Let’s explore
                together!
            </div>
        </>
    );
}

export default Terminal;
