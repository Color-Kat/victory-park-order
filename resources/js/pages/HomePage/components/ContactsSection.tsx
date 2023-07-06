import React, {useRef, useState} from 'react';
import ReCaptcha from "react-google-recaptcha"

import {RedButton} from "@UI/Buttons";
import Input from "@UI/Form/Input.tsx";
import {useRequestCallMutation} from "@/store/offices/offices.api.ts";
import {TermsFooter} from "@modules/Layout/components/TermsFooter.tsx";
import Checkbox from "@UI/Form/Checkbox.tsx";
import {isPhoneNumber} from "@/utils/formValidation.ts";
import {BsTelephone} from "react-icons/bs";
import {GoMail} from "react-icons/go";
import {Loader} from "@UI/Loaders/Loader.tsx";

export const ContactsSection: React.FC = ({}) => {
    const [requestCall] = useRequestCallMutation();
    const reCaptchaRef = useRef<ReCaptcha>();

    const [form, setForm] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
        agree_1: false,
        agree_2: false,
    });

    const [isSent, setIsSent] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [error, setError] = useState<boolean | string>(false);
    const [errorField, setErrorField] = useState<null | 'name' | 'phone' | 'agree' | 'email' | 'all'>(null);
    const showError = (text: string | false, field: any = null) => {
        setError(text);
        setErrorField(field);
    }

    const send = async (e: any) => {
        e.preventDefault();
        setIsSent(false);

        if (!form.name || !form.phone) return showError('Пожалуйста, заполните все поля.', 'all');
        if (!isPhoneNumber(form.phone)) return showError('Введите корректный номер телефона', 'phone');
        if (!form.email.includes('@')) return showError('Введите корректный E-mail', 'email');
        if (!form.agree_1) return showError('Вы должны принять пользовательское соглашение', 'agree_1');
        if (!form.agree_2) return showError('Вы должны дать согласие на обработку персональных данных', 'agree_2');
        else showError(false);

        setIsLoading(true);

        const captchaToken = await reCaptchaRef.current?.executeAsync();
        const result = await requestCall({
            ...form,
            'g-recaptcha-response': captchaToken ?? '',
        });

        reCaptchaRef.current?.reset();
        setIsLoading(false);

        if('data' in result && result.data && 'error' in result.data)
            return showError((result as any)?.data?.error ?? 'Произошла какая-то ошибка');

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

            <form className="flex flex-col w-full lg:max-w-none max-w-xl mx-auto sm:pb-10 md:pb-0 pb-24">
                <ReCaptcha
                    sitekey={(import.meta as any).env.VITE_CAPTCHA_SITE_KEY}
                    size='invisible'
                    ref={reCaptchaRef as any}
                />

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

                <div className="mb-10 flex flex-col">
                    <Checkbox
                        name="agree_1"
                        checked={form.agree_1}
                        setForm={setForm}
                    >
                        Отправляя свои данные, я соглашаюсь с <a href="/terms-of-service" className="underline" target="_blank">Пользовательским соглашением</a> и <a href="/pivacy-policy" className="underline" target="_blank">Политикой конфиденциальности</a>
                    </Checkbox>

                    <Checkbox
                        name="agree_2"
                        checked={form.agree_2}
                        setForm={setForm}
                    >
                        Даю согласие на <a href="/personal-data" className="underline" target="_blank">Обработку персональных данных</a>
                    </Checkbox>
                </div>

                <RedButton
                    filled={true}
                    onClick={send}

                >
                    {
                        isLoading
                            ? <><Loader />Загрузка</>
                            : <>Отправить</>
                    }
                </RedButton>
            </form>

            <TermsFooter/>
        </div>
    );
}