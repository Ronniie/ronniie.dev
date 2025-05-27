import { Command } from "../../types/command";

const clearCommand: Command = {
    metadata: {
        name: "clear",
        description: "Clear the terminal screen",
        icon: "🧹",
    },
    execute: () => {
        // The actual clearing is handled in the Terminal component
        return [];
    },
};

export default clearCommand; 