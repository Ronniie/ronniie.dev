import dynamic from "next/dynamic";

// Self-hosted Services
const SiDocker = dynamic(() => import("react-icons/si").then((mod) => mod.SiDocker), { ssr: false });
const SiPlex = dynamic(() => import("react-icons/si").then((mod) => mod.SiPlex), { ssr: false });
const SiProxmox = dynamic(() => import("react-icons/si").then((mod) => mod.SiProxmox), { ssr: false });
const SiHomeassistant = dynamic(() => import("react-icons/si").then((mod) => mod.SiHomeassistant), { ssr: false });
const SiPaperlessngx = dynamic(() => import("react-icons/si").then((mod) => mod.SiPaperlessngx), { ssr: false });

const selfhostedCommand= (showHeader = true) => [
    <div key="selfHosted">
        {showHeader && (
        <strong className="text-yellow-400">⚙️ SELF-HOSTED TOOLS</strong>
        )}
        <div className="text-white flex items-center mt-2">
            <SiProxmox className="text-orange-500 mr-2"/>
            Proxmox: Virtual machines and containers, all in one place.
        </div>
        <div className="text-white flex items-center mt-2">
            <SiDocker className="text-blue-500 mr-2"/>
            Portainer: Orchestrating Docker containers effortlessly.
        </div>
        <div className="text-white flex items-center mt-2">
            <SiPlex className="text-blue-400 mr-2"/>
            Plex: Streaming my curated media library.
        </div>
        <div className="text-white flex items-center mt-2">
            <SiHomeassistant className="text-teal-400 mr-2"/>
            Home Assistant: Automating everything smart at home.
        </div>
        <div className="text-white flex items-center mt-2">
            <SiPaperlessngx className="text-green-500 mr-2"/>
            Paperless-ngx: Turning paper piles into searchable archives.
        </div>

    </div>,
];

export default selfhostedCommand;
