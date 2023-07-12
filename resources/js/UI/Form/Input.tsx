import {FunctionComponent, InputHTMLAttributes} from "react";
import InputMask from 'react-input-mask';
import {BsPerson} from "react-icons/bs";

interface InputProps extends InputHTMLAttributes<any> {
    className?: string;
    containerClassName?: string;
    name: string;
    value: string | number;
    setForm?: any;

    Icon?: any;
    label?: string;
    description?: string;
    error?: boolean;
    mask?: string;
}

const Input: FunctionComponent<InputProps> = ({
                                                  value,
                                                  name,
                                                  setForm,
                                                  className,
                                                  containerClassName,
                                                  label,
                                                  description,
                                                  error = false,
                                                  Icon = BsPerson,
                                                  mask = "",

                                                  ...props
                                              }) => {


    return (
        <label htmlFor={name} className={"w-full block " + containerClassName}>
            {label && <div className={`leading-4 ${error ? 'mb-1' : 'mb-2'}`}>{label}:</div>}
            {description && <div className="text-sm text-red-500">{description}:</div>}

            <div className={`relative  w-full ${error ? 'border border-red-300 shadow shadow-red-500' : ''}`}>
                <InputMask
                    type={props.type ?? "text"}
                    className={"w-full bg-app text-gray-700 py-2 px-4 pl-12 h-[48px] rounded-sm flex items-center outline-none " + className}
                    placeholder={props.placeholder}
                    value={value}
                    onChange={
                        props.onChange
                            ? (e) => props.onChange!(e.target.value as any)
                            : (e) => setForm((prev: any) => ({...prev, [name]: e.target.value}))
                    }
                    mask={mask}
                    {...props}
                />

                {Icon &&
                    <Icon className="absolute left-3 text-app-accent top-1/2 -translate-y-1/2 text-2xl"/>
                }
            </div>
        </label>
    );
};

export default Input;