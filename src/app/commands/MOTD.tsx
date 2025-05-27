const motdCommand = () => {
    return [
        <div key="motd" className="font-mono">
            <div className="text-orange-500">
                {`  _____                   _ _           _            `}
                {`\n |  __ \\                 (_|_)         | |           `}
                {`\n | |__) |___  _ __  _ __  _ _  ___   __| | _____   __`}
                {`\n |  _  // _ \\| '_ \\| '_ \\| | |/ _ \\ / _\` |/ _ \\ \\ / /`}
                {`\n | | \\ \\ (_) | | | | | | | | |  __/| (_| |  __/\\ V / `}
                {`\n |_|  \\_\\___/|_| |_|_| |_|_|_|\\___(_)__,_|\\___| \\_/  `}
            </div>
            <div className="text-orange-400 mt-4">
                <strong>Welcome to Ronnie&#39;s Project Terminal!</strong>
            </div>

            <div className="border-t border-gray-700 my-4"/>
            <strong className="text-orange-500">🚀 ABOUT THIS TERMINAL</strong>
            <p className="text-gray-400">
                This is a showcase of my experimental projects hosted on *.ronniie.dev.
            </p>
            <p className="text-gray-400">
                Each project is a unique experiment, from fun visualizations to useful tools.
            </p>
            <p className="text-gray-400">
                Feel free to explore and interact with them!
            </p>

            <div className="border-t border-gray-700 my-4"/>
            <p className="text-orange-400">
                🌟 &#34;Every project is an adventure in learning and creation.&#34; 🌟
            </p>

            <div className="border-t border-gray-700 my-4"/>
            <div className="text-gray-400 mt-2">
                Type <span className="text-orange-500">&#39;help&#39;</span> to see available commands. Let&#39;s explore
                together!
            </div>
            <div className="text-gray-400 mt-2">
                Want to learn more about me? Visit <a href="https://ronniie.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">ronniie.com</a> for my full portfolio and blog.
            </div>
        </div>
    ];
};

export default motdCommand;
