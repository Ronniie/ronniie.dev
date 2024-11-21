const helpCommand = () => [
    <div key="help">
        <strong className="text-yellow-400">📖 Help Menu:</strong>
        <ul className="mt-2 space-y-1">
            <li>🆘 <strong className="text-green-400">help</strong>: Display this help menu.</li>
            <li>📄 <strong className="text-green-400">source</strong>: View the source code of this terminal.</li>
            <li>📡 <strong className="text-green-400">socials</strong>: View my social links.</li>
            <li>🌐 <strong className="text-green-400">selfhosted</strong>: View what I self host in my homelab.</li>
            <li>❌ <strong className="text-green-400">exit</strong>: Close the terminal.</li>
        </ul>
        <p className="mt-4 text-gray-400">
            💡 Pro Tip: Use <span className="text-green-400">↑</span> and <span className="text-green-400">↓</span> to navigate through your command history.
        </p>
    </div>,
];

export default helpCommand;
