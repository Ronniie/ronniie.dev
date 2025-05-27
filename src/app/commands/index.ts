import { Command } from "../../types/command";
import helpCommand from "./help";
import exitCommand from "./exit";
import sourceCommand from "./source";
import projectsCommand from "./projects";
import clearCommand from "./clear";
import dateCommand from "./date";
import neofetchCommand from "./neofetch";
import echoCommand from "./echo";
import whoamiCommand from "./whoami";
import pwdCommand from "./pwd";
import lsCommand from "./ls";

export const commands: Record<string, Command> = {
    help: helpCommand,
    exit: exitCommand,
    source: sourceCommand,
    projects: projectsCommand,
    clear: clearCommand,
    date: dateCommand,
    neofetch: neofetchCommand,
    echo: echoCommand,
    whoami: whoamiCommand,
    pwd: pwdCommand,
    ls: lsCommand,
}; 