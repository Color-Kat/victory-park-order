import {FunctionComponent, InputHTMLAttributes} from "react";
import {BsPerson} from "react-icons/bs";

interface InputProps extends InputHTMLAttributes<any> {
    className?: string;
    name: string;
    value: string | number;
    setForm?: any;

    Icon?: any;
    label?: string;
    description?: string;
    error?: boolean;
}

const Input: FunctionComponent<InputProps> = ({
                                                  value,
                                                  name,
                                                  setForm,
                                                  onChange,
                                                  className,
                                                  label,
                                                  description,
                                                  error = false,
                                                  Icon = BsPerson,

                                                  ...props
                                              }) => {
    return (
        <div>
            <label htmlFor={name}>
                {label && <div className={`leading-4 ${error ? 'mb-1' : 'mb-2'}`}>{label}:</div>}
                {description && <div className="text-sm text-red-500">{description}:</div>}

                <div className={`relative  w-full ${error ? 'border border-red-300 shadow shadow-red-500' : ''}`}>
                    <input
                        type={props.type ?? "text"}
                        className={"w-full bg-app text-gray-700 py-2 px-4 pl-12 h-[48px] rounded-sm flex items-center outline-none " + className}
                        placeholder={props.placeholder}
                        value={value}
                        onChange={
                            onChange
                                ? (e) => onChange(e.target.value as any)
                                : (e) => setForm((prev: any) => ({...prev, [name]: e.target.value}))
                        }
                        {...props}
                    />

                    {Icon &&
                        <Icon className="absolute left-3 text-app-accent top-1/2 -translate-y-1/2 text-2xl"/>
                    }

                </div>


            </label>
        </div>
    );
};

export default Input;