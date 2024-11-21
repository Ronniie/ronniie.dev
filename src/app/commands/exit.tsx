const exitCommand = (setInputDisabled: (value: boolean) => void, setOutput: (value: JSX.Element[]) => void) => {
    setInputDisabled(true); // Disable further input
    setOutput([
        <div key="exit" className="text-red-400">
            Terminal exited. Refresh the page to restart. 🚀
        </div>,
    ]);
    return [];
};

export default exitCommand;
