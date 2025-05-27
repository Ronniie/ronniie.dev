import { Command } from "../../types/command";

const helpCommand: Command = {
    metadata: {
        name: "help",
        description: "Show available commands",
        icon: "❓",
    },
    execute: () => {
        return [
            <div key="help" className="text-gray-400">
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-orange-500 mb-2">Available Commands</h2>
                    <p className="text-gray-400">Type any command to execute it. Use ↑ and ↓ to navigate history.</p>
                </div>

                <div className="space-y-6">
                    {/* System Commands */}
                    <div>
                        <h3 className="text-lg font-semibold text-orange-500 mb-2">System</h3>
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2">
                                <span className="text-orange-500">clear</span>
                                <span className="text-gray-400">- Clear the terminal screen</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-orange-500">date</span>
                                <span className="text-gray-400">- Display current date and time</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-orange-500">echo</span>
                                <span className="text-gray-400">- Print text to the terminal</span>
                            </div>
                            <div className="text-gray-500 text-sm ml-6">Usage: echo &lt;text&gt;</div>
                            <div className="flex items-center gap-2">
                                <span className="text-orange-500">exit</span>
                                <span className="text-gray-400">- Exit the terminal</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-orange-500">help</span>
                                <span className="text-gray-400">- Show this help message</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-orange-500">neofetch</span>
                                <span className="text-gray-400">- Display system information</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-orange-500">whoami</span>
                                <span className="text-gray-400">- Show current user</span>
                            </div>
                        </div>
                    </div>

                    {/* File System Commands */}
                    <div>
                        <h3 className="text-lg font-semibold text-orange-500 mb-2">File System</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-2">
                                    <span className="text-orange-500">ls</span>
                                    <span className="text-gray-400">- List files and directories</span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-2">
                                    <span className="text-orange-500">pwd</span>
                                    <span className="text-gray-400">- Show current directory</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project Commands */}
                    <div>
                        <h3 className="text-lg font-semibold text-orange-500 mb-2">Projects</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-2">
                                    <span className="text-orange-500">projects</span>
                                    <span className="text-gray-400">- Show my projects</span>
                                </div>
                                <div className="text-gray-500 text-sm ml-6">Usage: projects [project-name]</div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-2">
                                    <span className="text-orange-500">source</span>
                                    <span className="text-gray-400">- View source code</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-700">
                    <p className="text-gray-400">
                        💡 Pro tip: Commands are case-insensitive and support tab completion.
                    </p>
                </div>
            </div>
        ];
    },
};

export default helpCommand;
