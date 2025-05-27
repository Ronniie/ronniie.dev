import { Command } from "../../types/command";
import projects from "../../data/projects.json";

const projectsCommand: Command = {
    metadata: {
        name: "projects",
        description: "Show my projects",
        icon: "🚀",
        usage: "projects [project-name]",
    },
    execute: (args: string[] = []) => {
        if (args.length === 0) {
            // Show all projects
            return [
                <div key="projects" className="text-orange-500">
                    <div className="mb-4">Available Projects:</div>
                    <div className="grid grid-cols-1 gap-4">
                        {projects.projects.map((project) => (
                            <div key={project.name} className="border border-gray-700 rounded p-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-orange-500">{project.icon}</span>
                                    <span className="font-bold">{project.name}</span>
                                </div>
                                <p className="text-gray-400 mb-2">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="text-sm bg-gray-800 text-gray-300 px-2 py-1 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-orange-500 hover:text-orange-400"
                                >
                                    Visit Project →
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            ];
        }

        // Show specific project
        const projectName = args[0].toLowerCase();
        const project = projects.projects.find(
            (p) => p.name.toLowerCase() === projectName
        );

        if (!project) {
            return [
                <div key="project-error" className="text-red-400">
                    Error: Project not found
                    <div className="text-gray-400 mt-1">
                        Available projects: {projects.projects.map(p => p.name).join(", ")}
                    </div>
                </div>
            ];
        }

        return [
            <div key="project-detail" className="text-orange-500">
                <div className="border border-gray-700 rounded p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-2xl">{project.icon}</span>
                        <h2 className="text-2xl font-bold">{project.name}</h2>
                    </div>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="mb-4">
                        <h3 className="text-yellow-400 mb-2">Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <span key={tag} className="text-sm bg-gray-800 text-gray-300 px-2 py-1 rounded">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-orange-500 hover:text-orange-400"
                        >
                            Visit Project →
                        </a>
                    </div>
                </div>
            </div>
        ];
    },
};

export default projectsCommand; 