import { Command } from "../../types/command";

const dateCommand: Command = {
    metadata: {
        name: "date",
        description: "Display the current date and time",
        icon: "📅",
    },
    execute: () => {
        const now = new Date();
        return [
            <div key="date" className="text-gray-400">
                {now.toLocaleString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    timeZoneName: 'short'
                })}
            </div>
        ];
    },
};

export default dateCommand; 