interface NavButtonProps {
    onClick: () => void;
    icon: React.ReactNode;
    label: string;
    active: boolean;
}

export function NavButton({ onClick, icon, label, active }: NavButtonProps) {
    return (
        <button 
            onClick={onClick} 
            className={`flex items-center space-x-2 w-full rounded-lg p-2 transition-colors duration-200 text-sm
                ${active 
                    ? 'bg-gray-800 text-blue-700' 
                    : 'text-slate-400 hover:text-blue-700 hover:bg-slate-700'
                }`}
        >
            {icon}
            <span>{label}</span>
        </button>
    );
}