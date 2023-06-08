import { FunctionComponent } from "react";

interface InputProps {
    type?: 'text' | 'number' | 'select';
    className?: string;
    placeholder?: string;
    value: string | number;
    onChange: (e: string) => void;
}

const Input: FunctionComponent<InputProps> = ({type, value, placeholder, onChange, className}) => {
    return (
        <input
            type={type ?? "text"}
            className={"border pt-2 px-4 w-full h-[42px] rounded-md bg-gray-300 text-gray-900 " + className}
            placeholder={placeholder ?? ""}
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    );
};

export default Input;