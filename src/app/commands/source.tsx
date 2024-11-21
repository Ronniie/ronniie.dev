import dynamic from "next/dynamic";

const FaGithub = dynamic(() => import("react-icons/fa6").then((mod) => mod.FaGithub), { ssr: false });

const sourceCommand = () => [
    <div key="source">
        <strong className="text-yellow-400">📄 Terminal Source Code:</strong>
        <div className="text-white flex items-center mt-2">
            <FaGithub className="text-gray-400 mr-2"/>
            GitHub:{" "}
            <a
                href="https://github.com/Ronniie/ronniie.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
            >
                Ronniie/ronniie.dev
            </a>
        </div>
    </div>,
];

export default sourceCommand;
