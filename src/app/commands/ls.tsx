import { Command } from "../../types/command";
import projects from "../../data/projects.json";

const lsCommand: Command = {
    metadata: {
        name: "ls",
        description: "List files and directories",
        icon: "📋",
    },
    execute: () => {
        return [
            <div key="ls" className="text-gray-400">
                <div className="grid grid-cols-1 gap-2">
                    {projects.projects.map((project) => (
                        <div key={project.name} className="flex items-center gap-2">
                            <span className="text-orange-500">📁</span>
                            <span>{project.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        ];
    },
};

export default lsCommand; 