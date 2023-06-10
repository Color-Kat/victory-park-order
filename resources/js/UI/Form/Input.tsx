import {FunctionComponent} from "react";
import {BsPerson} from "react-icons/bs";

interface InputProps {
    type?: 'text' | 'number' | 'select';
    className?: string;
    placeholder?: string;
    name: string;
    value: string | number;
    onChange?: (e: string) => void;
    setForm?: any;
}

const Input: FunctionComponent<InputProps> = ({type, value, name, setForm, placeholder, onChange, className}) => {
    return (
        <div className="relative h-[48px] w-full">
            <input
                type={type ?? "text"}
                className={"bg-app text-gray-700 py-2 px-4 pl-12 h-[48px] rounded-sm flex items-center outline-none " + className}
                placeholder={placeholder ?? ""}
                value={value}
                onChange={
                    onChange
                        ? (e) => onChange(e.target.value)
                        : (e) => setForm((prev: any) => ({...prev, [name]: e.target.value}))
                }
            />

            <BsPerson className="absolute left-3 text-app-accent top-1/2 -translate-y-1/2 text-2xl"/>
        </div>
    );
};

export default Input;