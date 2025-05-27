import socialsCommand from "./socials";
import selfhostedCommand from "./selfhosted";

const motdCommand = () => {
    const socialsOutput = socialsCommand(false);
    const selfHostedOutput = selfhostedCommand(false);

    return [
        <div key="motd-header" className="text-green-400">
            {`  _____                   _ _           _            `}
            {`\n |  __ \\                 (_|_)         | |           `}
            {`\n | |__) |___  _ __  _ __  _ _  ___   __| | _____   __`}
            {`\n |  _  // _ \\| '_ \\| '_ \\| | |/ _ \\ / _\` |/ _ \\ \\ / /`}
            {`\n | | \\ \\ (_) | | | | | | | | |  __/| (_| |  __/\\ V / `}
            {`\n |_|  \\_\\___/|_| |_|_| |_|_|_|\\___(_)__,_|\\___| \\_/  `}
        </div>,
        <div key="motd-welcome" className="text-green-300 mt-4">
            <strong>Welcome to Ronnie&#39;s Development Terminal!</strong>
        </div>,

        <div className="border-t border-gray-700 my-4" key="motd-divider-1" />,
        <strong key="motd-about-header" className="text-yellow-400">🎩 ABOUT THE DEV</strong>,
        <p key="motd-about-1" className="text-white">
            Hi! I&#39;m Ronnie—a developer passionate about blending code and design.
        </p>,
        <p key="motd-about-2" className="text-white">
            This site is my playground for testing and crafting innovative projects.
        </p>,
        <p key="motd-about-3" className="text-white">
            When I&#39;m not tinkering here, I&#39;m programming for NullDaily LLC, building
            open-source tools to empower creators and developers.
        </p>,

        <div className="border-t border-gray-700 my-4" key="motd-divider-2" />,
        <strong key="motd-socials-header" className="text-yellow-400">📡 SOCIALS</strong>,
        ...socialsOutput,

        <div className="border-t border-gray-700 my-4" key="motd-divider-3" />,
        <strong key="motd-selfhosted-header" className="text-yellow-400">⚙️ SELF-HOSTED TOOLS</strong>,
        ...selfHostedOutput,

        <div className="border-t border-gray-700 my-4" key="motd-divider-4" />,
        <p key="motd-quote" className="text-green-300">
            🌟 &#34;Code, automate, and create with purpose. This isn&#39;t just development;
            it&#39;s an adventure.&#34; 🌟
        </p>,
        <div className="border-t border-gray-700 my-4" key="motd-divider-5" />,
        <div key="motd-footer" className="text-gray-400 mt-2">
            Type <span className="text-green-400">&#39;help&#39;</span> to see what you can do. Let’s explore
            together!
        </div>,
    ];
};

export const name = "motd";
export const description = "Display the Message of the Day.";
export default motdCommand;
