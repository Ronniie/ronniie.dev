"use client";

import { useState, useRef, useEffect } from "react";
import { commands } from "../app/commands";
import unknownCommand from "../app/commands/unknown";
import projects from "../data/projects.json";

interface Project {
    name: string;
    description: string;
    url: string;
    icon: string;
    tags: string[];
}

const Terminal: React.FC = () => {
    const [mounted, setMounted] = useState(false);
    const [input, setInput] = useState("");
    const [output, setOutput] = useState<JSX.Element[]>([]);
    const [history, setHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState<number | null>(null);
    const [suggestion, setSuggestion] = useState<string | null>(null);
    const [inputDisabled, setInputDisabled] = useState(false);
    const [startTime] = useState<Date>(new Date());

    const terminalEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const commandsList = Object.keys(commands);

    useEffect(() => {
        setMounted(true);
        setOutput([<MOTD key="motd" />]);
    }, []);

    const getUptime = () => {
        const now = new Date();
        const diff = now.getTime() - startTime.getTime();
        const seconds = Math.floor(diff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        if (days > 0) {
            return `${days}d ${hours % 24}h ${minutes % 60}m`;
        } else if (hours > 0) {
            return `${hours}h ${minutes % 60}m ${seconds % 60}s`;
        } else if (minutes > 0) {
            return `${minutes}m ${seconds % 60}s`;
        } else {
            return `${seconds}s`;
        }
    };

    const handleInput = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (inputDisabled) return;

        if (input.trim() === "") {
            setOutput((prev) => [
                ...prev,
                <div key={`blank-${prev.length}`}>&nbsp;</div>,
            ]);
            setInput("");
            return;
        }

        const normalizedInput = input.toLowerCase();
        // Split by spaces but preserve quoted strings
        const args = input.match(/(?:[^\s"]+|"[^"]*")+/g) || [];
        if (args.length === 0) {
            setInput("");
            return;
        }
        const cmd = args[0]?.toLowerCase() || "";
        const commandArgs = args.slice(1).map(arg => arg.replace(/^"|"$/g, '')); // Remove quotes
        const command = commands[cmd];

        if (normalizedInput === "clear") {
            setOutput([]);
            setInput("");
            return;
        }

        if (command) {
            if (normalizedInput === "exit") {
                setInputDisabled(true);
            }
            setOutput((prev) => [
                ...prev,
                <div key={`cmd-${input}`} className="text-gray-400">
                    <span className="text-orange-500">$</span> {input}
                </div>,
                ...command.execute(commandArgs, { uptime: getUptime() }),
            ]);
        } else {
            setOutput((prev) => [
                ...prev,
                <div key={`cmd-${input}`} className="text-gray-400">
                    <span className="text-orange-500">$</span> {input}
                </div>,
                ...unknownCommand(normalizedInput)(),
            ]);
        }

        setHistory((prev) => [...prev, input]);
        setHistoryIndex(null);
        setInput("");
        setSuggestion(null);
    };

    const handleInputChange = (value: string) => {
        setInput(value);

        const normalizedInput = value.toLowerCase();
        const parts = normalizedInput.split(" ");
        if (parts.length === 0) {
            setSuggestion(null);
            return;
        }
        const cmd = parts[0];
        const args = parts.slice(1);
        
        // Handle project name suggestions
        if (cmd === "projects") {
            const projectPrefix = args.join(" ").toLowerCase().replace(/^"|"$/g, '');
            const matchedProject = projects.projects.find((project: Project) =>
                project.name.toLowerCase().startsWith(projectPrefix)
            );
            if (matchedProject) {
                setSuggestion(`projects "${matchedProject.name}"`);
            } else {
                setSuggestion(null);
            }
            return;
        }

        // Handle command suggestions
        const matchedCommand = commandsList.find((command) =>
            command.startsWith(normalizedInput)
        );
        setSuggestion(matchedCommand || null);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "ArrowUp") {
            e.preventDefault();
            if (history.length === 0) return;
            
            const newIndex = historyIndex === null 
                ? history.length - 1 
                : Math.max(0, historyIndex - 1);
            
            setHistoryIndex(newIndex);
            setInput(history[newIndex]);
        } else if (e.key === "ArrowDown") {
            e.preventDefault();
            if (historyIndex === null) return;
            
            const newIndex = historyIndex + 1;
            if (newIndex >= history.length) {
                setHistoryIndex(null);
                setInput("");
            } else {
                setHistoryIndex(newIndex);
                setInput(history[newIndex]);
            }
        } else if (e.key === "Tab" && suggestion) {
            e.preventDefault();
            setInput(suggestion);
            setSuggestion(null);
        }
    };

    useEffect(() => {
        terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [output]);

    if (!mounted) {
        return null;
    }

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
            <form
                onSubmit={handleInput}
                className="flex items-center mt-2 relative"
            >
                {!inputDisabled && (
                    <span className="text-orange-500">$</span>
                )}
                {!inputDisabled && (
                    <div className="relative flex-1 ml-2">
                        <input
                            ref={inputRef}
                            type="text"
                            className="bg-black text-white outline-none w-full"
                            value={input}
                            onChange={(e) => handleInputChange(e.target.value)}
                            onKeyDown={handleKeyDown}
                            autoFocus
                            disabled={inputDisabled}
                        />
                        {suggestion && (
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
                )}
            </form>

            <div ref={terminalEndRef}></div>
        </div>
    );
};

const MOTD = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <>
            <div
                className="overflow-x-auto whitespace-pre font-mono text-xs sm:text-sm md:text-base text-orange-500"
            >
                {`  _____                   _ _           _            `}
                {`\n |  __ \\                 (_|_)         | |           `}
                {`\n | |__) |___  _ __  _ __  _ _  ___   __| | _____   __`}
                {`\n |  _  // _ \\| '_ \\| '_ \\| | |/ _ \\ / _\` |/ _ \\ \\ / /`}
                {`\n | | \\ \\ (_) | | | | | | | | |  __/| (_| |  __/\\ V / `}
                {`\n |_|  \\_\\___/|_| |_|_| |_|_|_|\\___(_)__,_|\\___| \\_/  `}
            </div>
            <div className="text-orange-400 mt-4">
                <strong>Welcome to Ronnie&#39;s Project Terminal!</strong>
            </div>

            <div className="border-t border-gray-700 my-4"/>
            <strong className="text-orange-500">🚀 ABOUT THIS TERMINAL</strong>
            <p className="text-gray-400">
                This is a showcase of my experimental projects hosted on *.ronniie.dev.
            </p>
            <p className="text-gray-400">
                Each project is a unique experiment, from fun visualizations to useful tools.
            </p>
            <p className="text-gray-400">
                Feel free to explore and interact with them!
            </p>

            <div className="border-t border-gray-700 my-4"/>
            <p className="text-orange-400">
                🌟 &#34;Every project is an adventure in learning and creation.&#34; 🌟
            </p>

            <div className="border-t border-gray-700 my-4"/>
            <div className="text-gray-400 mt-2">
                Type <span className="text-orange-500">&#39;help&#39;</span> to see available commands. Let&#39;s explore
                together!
            </div>
            <div className="text-gray-400 mt-2">
                Want to learn more about me? Visit <a href="https://ronniie.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">ronniie.com</a> for my full portfolio and blog.
            </div>
            <div className="text-gray-400 mt-1">
                Available projects: {projects?.projects?.map(p => p.name).join(", ") || "None"}
            </div>
        </>
    );
}

export default Terminal;
