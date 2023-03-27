import React from "react";
interface props {
    children: string;
}

function Button({ children }: props) {
    return (
        <button className="text-center px-4 py-2 bg-gray-400 transition-all bg-opacity-10 hover:bg-opacity-20 rounded font-semibold text-gray-700 text-opacity-40 w-full">
            {children}
        </button>
    );
}

export default Button;
