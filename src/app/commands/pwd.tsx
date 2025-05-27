import { Command } from "../../types/command";

const pwdCommand: Command = {
    metadata: {
        name: "pwd",
        description: "Show current directory",
        icon: "📁",
    },
    execute: () => {
        return [
            <div key="pwd" className="text-gray-400">
                /home/ronnie
            </div>
        ];
    },
};

export default pwdCommand; 