import { Command } from "../../types/command";

const exitCommand: Command = {
    metadata: {
        name: "exit",
        description: "Close the terminal",
        icon: "❌",
    },
    execute: () => {
        // This is a special case where we need to handle the exit command differently
        // The actual execution is handled in the Terminal component
        return [
            <div key="exit" className="text-red-500">
                Terminal exited. Refresh the page to restart. 🚀
            </div>,
        ];
    },
};

export default exitCommand;
