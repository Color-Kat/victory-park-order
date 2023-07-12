import React, {useRef, useState} from 'react';
import {useTDispatch, useTSelector} from "@hooks/redux.ts";

import {closeCallRequestModal, closeWhatsAppRequestModal} from "@/store/modals/modals.slice.tsx";
import Input from "@UI/Form/Input.tsx";
import {RedButton} from "@UI/Buttons";
import {useRequestCallMutation, useRequestWhatsAppMutation} from "@/store/offices/offices.api.ts";
import Checkbox from "@UI/Form/Checkbox.tsx";
import {isPhoneNumber} from "@/utils/formValidation.ts";
import {BsTelephone} from "react-icons/bs";
import ReCaptcha from "react-google-recaptcha";
import {Loader} from "@UI/Loaders/Loader.tsx";

export const WhatsAppRequestModal: React.FC = ({}) => {
    const {isWhatsAppRequestModalOpen, whatsAppRequestModalData} = useTSelector(state => state.modals);
    const dispatch = useTDispatch();
    const [requestWhatsApp] = useRequestWhatsAppMutation();

    const reCaptchaRef = useRef<ReCaptcha>();

    const [isSent, setIsSent] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        phone: '',
        agree_1: false,
        agree_2: false,
    });

    const [error, setError] = useState<boolean|string>(false);
    const [errorField, setErrorField] = useState<null|'name'|'phone'|'agree'|'all'>(null);
    const showError = (text: string|false, field: any = null) => {
        setError(text);
        setErrorField(field);
    }

    const sendRequest = async () => {
        if(!form.name || !form.phone) return showError("Пожалуйста, заполните все поля.", "all");
        if(!isPhoneNumber(form.phone)) return showError("Введите корректный номер телефона", "phone");
        if (!form.agree_1) return showError('Вы должны принять пользовательское соглашение', 'agree_1');
        if (!form.agree_2) return showError('Вы должны дать согласие на обработку персональных данных', 'agree_2');
        else showError(false);

        setIsLoading(true);

        const captchaToken = await reCaptchaRef.current?.executeAsync();
        const result = await requestWhatsApp({
            name: form.name,
            phone: form.phone,
            'g-recaptcha-response': captchaToken ?? '',
            ...whatsAppRequestModalData
        });

        reCaptchaRef.current?.reset(); // reset recaptcha

        setIsLoading(false);

        // Some errors
        if('data' in result && result.data && 'error' in result.data || 'error' in result)
            return showError((result as any)?.data?.error ?? 'Произошла какая-то ошибка');

        setIsSent(true);
    }

    return (
        <div
            className={`${isWhatsAppRequestModalOpen ? 'opacity-1 translate-y-0 shadow-2xl' : 'opacity-0 -translate-y-8 pointer-events-none'} fixed w-screen h-screen top-0 left-0 bg-black/[.7] flex items-center justify-center z-50 transition duration-300`}
        >
            <div
                className="absolute top-0 left-0 w-full h-full z-0"
                onClick={() => dispatch(closeWhatsAppRequestModal())}
            />

            <div className="relative modal px-16 py-16 bg-white z-10 max-w-md">
                <div
                    className="absolute top-4 right-4 cursor-pointer font-bold text-gray-600 text-2xl"
                    onClick={() => dispatch(closeWhatsAppRequestModal())}
                >
                    &#10005; {/* HTML code for a multiplication sign */}
                </div>

                {!isSent && <div className="flex flex-col justify-center gap-5">
                    <h3 className="text-app-accent font-bold text-2xl text-center">Получить презентацию на Whatsapp</h3>

                    <div className={`text-lg text-gray-900 text-center my-2 ${error ? 'block' : 'hidden'} max-w-sm`}>
                        {error}
                    </div>

                    <ReCaptcha
                        sitekey={(import.meta as any).env.VITE_CAPTCHA_SITE_KEY}
                        size='invisible'
                        ref={reCaptchaRef as any}
                    />

                    <Input
                        name="name"
                        placeholder="Имя"
                        value={form.name}
                        setForm={setForm}
                        type="text"
                        error={errorField == "all" && form.name == ""}
                    />

                    <Input
                        name="phone"
                        placeholder="Телефон"
                        value={form.phone}
                        setForm={setForm}
                        type="text"
                        mask="+7 (999) 999 99-99"
                        Icon={BsTelephone}
                        error={errorField == "phone" || (errorField == "all" && form.phone == "")}
                    />

                    <div className="flex flex-col">
                        <Checkbox
                            name="agree_1"
                            checked={form.agree_1}
                            setForm={setForm}
                        >
                            Отправляя свои данные, я соглашаюсь с <a href="/terms-of-service" className="underline" target="_blank">Пользовательским соглашением</a> и <a href="/privacy-policy" className="underline" target="_blank">Политикой конфиденциальности</a>
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
                        className="sm:w-full"
                        onClick={sendRequest}
                    >
                        {
                            isLoading
                                ? <><Loader />Загрузка</>
                                : <>Получить</>
                        }
                    </RedButton>
                </div>}

                {isSent && <div className="mt-4 text-lg text-center max-w-xs">
                    Спасибо за обращение! <br/>
                    В ближайшее время с Вами свяжется наш специалист.
                </div>}
            </div>
        </div>
    );
}