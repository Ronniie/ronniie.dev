import { Command } from "../../types/command";

const echoCommand: Command = {
    metadata: {
        name: "echo",
        description: "Print text to the terminal",
        icon: "📢",
        usage: "echo <text>",
    },
    execute: (args: string[] = []) => {
        if (args.length === 0) {
            return [
                <div key="echo-error" className="text-red-500">
                    Error: Missing arguments
                    <div className="text-gray-400 mt-1">
                        Usage: echo &lt;text&gt;
                    </div>
                </div>
            ];
        }
        return [
            <div key="echo" className="text-gray-400">
                {args.join(" ")}
            </div>
        ];
    },
};

export default echoCommand; 