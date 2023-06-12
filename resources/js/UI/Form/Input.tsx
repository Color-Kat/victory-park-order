import {FunctionComponent, InputHTMLAttributes} from "react";
import {BsPerson} from "react-icons/bs";

interface InputProps extends InputHTMLAttributes<any>{
    className?: string;
    placeholder?: string;
    name: string;
    value: string | number;
    setForm?: any;
}

const Input: FunctionComponent<InputProps> = ({type, value, name, setForm, placeholder, onChange, className, ...props}) => {
    return (
        <div className="relative h-[48px] w-full">
            <input
                type={type ?? "text"}
                className={"bg-app text-gray-700 py-2 px-4 pl-12 h-[48px] rounded-sm flex items-center outline-none " + className}
                placeholder={placeholder ?? ""}
                value={value}
                onChange={
                    onChange
                        ? (e) => onChange(e.target.value as any)
                        : (e) => setForm((prev: any) => ({...prev, [name]: e.target.value}))
                }
                {...props}
            />

            <BsPerson className="absolute left-3 text-app-accent top-1/2 -translate-y-1/2 text-2xl"/>
        </div>
    );
};

export default Input;