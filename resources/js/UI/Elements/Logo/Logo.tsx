import react from 'react';
import { Link } from "react-router-dom";

export const Logo = () => {
    return (
        <div className="logo font-ubuntu-mono text-3xl font-bold text-gray-900 hover:scale-105 transition border-2 border-gray-800 rounded-full aspect-square w-12 flex items-center justify-center">
            <Link to="/">GH</Link>
        </div>
    );
};