import { Command } from "../../types/command";

const whoamiCommand: Command = {
    metadata: {
        name: "whoami",
        description: "Show current user",
        icon: "👤",
    },
    execute: () => {
        return [
            <div key="whoami" className="text-gray-400">
                ronnie
            </div>
        ];
    },
};

export default whoamiCommand; 