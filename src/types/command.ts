export interface CommandMetadata {
    name: string;
    description: string;
    icon: string;
    usage?: string;
}

export interface CommandContext {
    uptime?: string;
}

export interface Command {
    metadata: CommandMetadata;
    execute: (args?: string[], context?: CommandContext) => JSX.Element[];
} 