import dynamic from "next/dynamic";

// Dynamically import React Icons with client-side rendering
const FaYoutube = dynamic(() => import("react-icons/fa6").then((mod) => mod.FaYoutube), { ssr: false });
const FaBluesky = dynamic(() => import("react-icons/fa6").then((mod) => mod.FaBluesky), { ssr: false });
const FaDiscord = dynamic(() => import("react-icons/fa6").then((mod) => mod.FaDiscord), { ssr: false });
const FaGithub = dynamic(() => import("react-icons/fa6").then((mod) => mod.FaGithub), { ssr: false });
const FaReddit = dynamic(() => import("react-icons/fa6").then((mod) => mod.FaReddit), { ssr: false });

const socialsCommand = (showHeader = true) => [
    <div key="socials">
        {showHeader && (
            <strong className="text-yellow-400">📡 Social Links:</strong>
        )}
        <div className="text-white flex items-center mt-2">
            <FaGithub className="text-gray-400 mr-2" />
            GitHub:{" "}
            <a
                href="https://github.com/Ronniie"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
            >
                Ronniie
            </a>
        </div>
        <div className="text-white flex items-center mt-2">
            <FaBluesky className="text-blue-400 mr-2" />
            BlueSky:{" "}
            <a
                href="https://bsky.app/profile/ronniie.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
            >
                @ronniie.dev
            </a>
        </div>
        <div className="text-white flex items-center mt-2">
            <FaDiscord className="text-blue-500 mr-2" />
            Discord: ronniie.
        </div>
        <div className="text-white flex items-center mt-2">
            <FaYoutube className="text-red-500 mr-2" />
            YouTube:{" "}
            <a
                href="https://www.youtube.com/@Zotechz"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
            >
                @Zotechz
            </a>
        </div>
        <div className="text-white flex items-center mt-2">
            <FaReddit className="text-orange-500 mr-2" />
            Reddit:{" "}
            <a
                href="https://www.reddit.com/user/Zotechz/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
            >
                u/Zotechz
            </a>
        </div>
    </div>,
];

export default socialsCommand;
