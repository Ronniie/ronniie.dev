import { Command, CommandContext } from "../../types/command";

// Add type declarations for Navigator properties
declare global {
    interface Navigator {
        deviceMemory?: number;
        hardwareConcurrency?: number;
        platform: string;
        userAgent: string;
        language: string;
        vendor: string;
    }
}

const neofetchCommand: Command = {
    metadata: {
        name: "neofetch",
        description: "Display system information",
        icon: "🖥️",
    },
    execute: (_, context?: CommandContext) => {
        const platform = navigator.platform;
        const userAgent = navigator.userAgent;
        const language = navigator.language;
        const vendor = navigator.vendor;
        const memory = navigator.deviceMemory ? `${navigator.deviceMemory} GB` : "Unknown";
        const cores = navigator.hardwareConcurrency || "Unknown";

        const osInfo = {
            platform: platform,
            userAgent: userAgent,
            language: language,
            vendor: vendor,
            memory: memory,
            cores: cores,
        };

        // Enhanced OS detection
        let os = 'Unknown';
        let osVersion = '';
        
        if (osInfo.userAgent.includes('Windows')) {
            os = 'Windows';
            if (osInfo.userAgent.includes('Windows NT 10.0')) {
                // Windows 11 has a specific pattern in the user agent
                // It includes "Windows NT 10.0" followed by specific identifiers
                const isWindows11 = osInfo.userAgent.includes('Windows NT 10.0; Win64; x64') && 
                    (osInfo.userAgent.includes('Windows NT 10.0; Win64; x64; Windows NT 10.0') || 
                     osInfo.userAgent.includes('Windows NT 10.0; Win64; x64; rv:') ||
                     osInfo.userAgent.includes('Windows NT 10.0; Win64; x64; Edge/'));
                
                osVersion = isWindows11 ? '11' : '10';
            }
            else if (osInfo.userAgent.includes('Windows NT 6.3')) osVersion = '8.1';
            else if (osInfo.userAgent.includes('Windows NT 6.2')) osVersion = '8';
            else if (osInfo.userAgent.includes('Windows NT 6.1')) osVersion = '7';
        }
        else if (osInfo.userAgent.includes('Mac')) {
            os = 'macOS';
            const match = osInfo.userAgent.match(/Mac OS X (\d+[._]\d+)/);
            if (match) osVersion = match[1].replace('_', '.');
        }
        else if (osInfo.userAgent.includes('Linux')) {
            os = 'Linux';
            if (osInfo.userAgent.includes('Ubuntu')) osVersion = 'Ubuntu';
            else if (osInfo.userAgent.includes('Fedora')) osVersion = 'Fedora';
            else if (osInfo.userAgent.includes('Debian')) osVersion = 'Debian';
            else if (osInfo.userAgent.includes('Android')) {
                os = 'Android';
                const match = osInfo.userAgent.match(/Android (\d+[._]\d+)/);
                if (match) osVersion = match[1].replace('_', '.');
            }
        }
        else if (osInfo.userAgent.includes('iOS')) {
            os = 'iOS';
            const match = osInfo.userAgent.match(/OS (\d+[._]\d+)/);
            if (match) osVersion = match[1].replace('_', '.');
        }

        // Enhanced browser detection
        let browser = 'Unknown';
        let browserVersion = '';
        
        if (osInfo.userAgent.includes('Chrome')) {
            browser = 'Chrome';
            const match = osInfo.userAgent.match(/Chrome\/(\d+[._]\d+)/);
            if (match) browserVersion = match[1].replace('_', '.');
        }
        else if (osInfo.userAgent.includes('Firefox')) {
            browser = 'Firefox';
            const match = osInfo.userAgent.match(/Firefox\/(\d+[._]\d+)/);
            if (match) browserVersion = match[1].replace('_', '.');
        }
        else if (osInfo.userAgent.includes('Safari')) {
            browser = 'Safari';
            const match = osInfo.userAgent.match(/Version\/(\d+[._]\d+)/);
            if (match) browserVersion = match[1].replace('_', '.');
        }
        else if (osInfo.userAgent.includes('Edge')) {
            browser = 'Edge';
            const match = osInfo.userAgent.match(/Edge\/(\d+[._]\d+)/);
            if (match) browserVersion = match[1].replace('_', '.');
        }

        return [
            <div key="neofetch" className="font-mono">
                <div className="flex gap-8">
                    <div className="text-orange-500">
                        {`  _____                   _ _           _            `}
                        {`\n |  __ \\                 (_|_)         | |           `}
                        {`\n | |__) |___  _ __  _ __  _ _  ___   __| | _____   __`}
                        {`\n |  _  // _ \\| '_ \\| '_ \\| | |/ _ \\ / _\` |/ _ \\ \\ / /`}
                        {`\n | | \\ \\ (_) | | | | | | | | |  __/| (_| |  __/\\ V / `}
                        {`\n |_|  \\_\\___/|_| |_|_| |_|_|_|\\___(_)__,_|\\___| \\_/  `}
                    </div>
                    <div className="text-gray-400">
                        <div><span className="text-orange-500">OS:</span> {os}{osVersion ? ` ${osVersion}` : ''}</div>
                        <div><span className="text-orange-500">Host:</span> ronniie.dev</div>
                        <div><span className="text-orange-500">Kernel:</span> Next.js 15.0.3</div>
                        <div><span className="text-orange-500">Shell:</span> React Terminal</div>
                        <div><span className="text-orange-500">Terminal:</span> {browser}{browserVersion ? ` ${browserVersion}` : ''}</div>
                        <div><span className="text-orange-500">CPU:</span> {osInfo.cores} cores</div>
                        <div><span className="text-orange-500">Memory:</span> {osInfo.memory}</div>
                        <div><span className="text-orange-500">Uptime:</span> {context?.uptime || 'Unknown'}</div>
                        <div><span className="text-orange-500">Language:</span> {osInfo.language}</div>
                    </div>
                </div>
            </div>
        ];
    },
};

export default neofetchCommand; 