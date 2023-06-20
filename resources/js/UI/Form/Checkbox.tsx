import {FunctionComponent, InputHTMLAttributes, ReactNode} from "react";
import {BsPerson} from "react-icons/bs";
import ReactMarkdown from "react-markdown";
import children = ReactMarkdown.propTypes.children;

interface CheckboxProps extends InputHTMLAttributes<any>{
    children: ReactNode;
    className?: string;
    name: string;
    checked: boolean;
    setForm: any;
}

const Checkbox: FunctionComponent<CheckboxProps> = ({children, checked, name, setForm, className, ...props}) => {
    return (
        <label htmlFor={name} className="text-sm text-gray-600">

            <input
                id={name}
                name={name}
                type="checkbox"
                checked={checked}

                onChange={() => {
                    setForm((prev: any) => ({
                        ...prev,
                        [name]: !prev[name]
                    }))
                }}

                className="mr-2 accent-app-accent w-3.5 h-3.5"
                {...props}
            />

            {children}
        </label>
    );
};

export default Checkbox;