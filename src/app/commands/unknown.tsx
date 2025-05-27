const unknownCommand = (input: string) => () => [
    <div key="unknown-command" className="text-red-500">
        Unknown command: <span className="font-bold">{input}</span>
    </div>,
    <div key="suggestion" className="text-gray-400">
        Type <span className="text-orange-500">help</span> to see available commands.
    </div>,
];

export default unknownCommand;
