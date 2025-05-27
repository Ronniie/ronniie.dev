import { Command } from "../../types/command";
import dynamic from "next/dynamic";

const FaGithub = dynamic(() => import("react-icons/fa6").then((mod) => mod.FaGithub), { ssr: false });

const sourceCommand: Command = {
    metadata: {
        name: "source",
        description: "View the source code of this terminal",
        icon: "📄",
    },
    execute: () => [
        <div key="source">
            <strong className="text-orange-500">📄 Terminal Source Code:</strong>
            <div className="text-gray-400 flex items-center mt-2">
                <FaGithub className="text-gray-400 mr-2"/>
                GitHub:{" "}
                <a
                    href="https://github.com/Ronniie/ronniie.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-500 hover:text-orange-400"
                >
                    Ronniie/ronniie.dev
                </a>
            </div>
        </div>,
    ],
};

export default sourceCommand;
