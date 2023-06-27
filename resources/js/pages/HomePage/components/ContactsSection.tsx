import React, {useState} from 'react';
import {RedButton} from "@UI/Buttons";
import Input from "@UI/Form/Input.tsx";
import {useRequestCallMutation} from "@/store/offices/offices.api.ts";
import {TermsFooter} from "@modules/Layout/components/TermsFooter.tsx";
import Checkbox from "@UI/Form/Checkbox.tsx";
import {isPhoneNumber} from "@/utils/formValidation.ts";
import {BsTelephone} from "react-icons/bs";
import {GoMail} from "react-icons/go";

export const ContactsSection: React.FC = ({}) => {
    const [requestCall] = useRequestCallMutation();

    const [form, setForm] = useState({
        name: '',
        phone: '',
        agree: false,
        email: '',
        message: ''
    });

    const [isSent, setIsSent] = useState(false);

    const [error, setError] = useState<boolean | string>(false);
    const [errorField, setErrorField] = useState<null | 'name' | 'phone' | 'agree' | 'email' | 'all'>(null);
    const showError = (text: string | false, field: any = null) => {
        setError(text);
        setErrorField(field);
    }

    const phoneMaskHandler = (phone: string) => {
        let subNum = phone.toString().substring(0,3)
        subNum = subNum + "XXXXXXXXXXXX"
        return subNum
    }

    const send = async (e: any) => {
        e.preventDefault();
        setIsSent(false);

        if (!form.name || !form.phone) return showError('Пожалуйста, заполните все поля.', 'all');
        if (!isPhoneNumber(form.phone)) return showError('Введите корректный номер телефона', 'phone');
        if (!form.email.includes('@')) return showError('Введите корректный E-mail', 'email');
        if (!form.agree) return showError('Вы должны принять политику обработки персональных данных', 'agree');
        else showError(false);

        await requestCall({
            ...form
        });

        setIsSent(true);
    }

    return (
        <div
            className="relative section w-full lg:px-16 px-5 flex items-center justify-center xs:pb-16 pb-24"
            data-anchor="page-7"
            id="page-7-anchor"
        >
            <h2 className="font-metapro lg:text-6xl md:text-6xl xs:text-5xl text-3xl font-bold text-app-accent text-center lg:mb-16 mb-8">
                Оставьте заявку на просмотр
            </h2>

            <div className={`text-lg text-gray-900 text-center my-3 ${isSent ? 'block' : 'hidden'}`}>
                Спасибо за обращение! <br/>
                В ближайшее время с Вами свяжется наш специалист.
            </div>

            <div className={`text-lg text-gray-900 text-center my-3 ${error ? 'block' : 'hidden'}`}>
                {error}
            </div>

            <form className="flex flex-col w-full lg:max-w-none max-w-xl mx-auto">
                <div
                    className="relative w-full xl:space-x-6 xl:space-y-0 space-y-6 mb-6 flex xl:flex-row flex-col items-center"
                >

                    <Input
                        value={form.name}
                        setForm={setForm}
                        required
                        type="text"
                        name="name"
                        placeholder="Ваше Имя"
                        className="xl:w-auto flex flex-1 flex-shrink-1 w-full"
                        error={errorField == "all" && form.name == ""}
                    />

                    <Input
                        value={form.phone}
                        setForm={setForm}
                        required
                        type="text"
                        name="phone"
                        placeholder="Ваш Телефон"
                        className="xl:w-auto w-full"
                        mask="+7 (999) 999 99-99"
                        Icon={BsTelephone}
                        error={errorField == "phone" || (errorField == "all" && form.phone == "")}
                    />

                    <Input
                        value={form.email}
                        setForm={setForm}
                        type="email"
                        name="email"
                        placeholder="Ваш E-mail"
                        className="xl:w-auto w-full"
                        Icon={GoMail}
                        error={errorField == "email" || (errorField == "all" && form.email == "")}
                    />
                </div>

                <textarea
                    name="message"
                    id="message"
                    className="bg-app p-3 md:px-12 outline-none text-gray-700 mb-6"
                    placeholder="Сообщение"
                    value={form.message}
                    onChange={(e) => setForm((prev: any) => ({
                        ...prev,
                        message: e.target.value
                    }))}
                ></textarea>

                <div className="mb-10">
                    <Checkbox
                        name="agree"
                        checked={form.agree}
                        setForm={setForm}
                    >
                        Отправляя свои данные, я соглашаюсь с <a href="/personal-data" className="underline"
                                                                 target="_blank">Политикой обработки персональных
                        данных</a> и <a href="/terms-of-service" className="underline" target="_blank">Пользовательским
                        соглашением</a>
                    </Checkbox>
                </div>

                <RedButton
                    filled={true}
                    onClick={send}

                >
                    Отправить
                </RedButton>
            </form>

            <TermsFooter/>
        </div>
    );
}