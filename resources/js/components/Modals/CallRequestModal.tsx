import React, {useState} from 'react';
import {useTDispatch, useTSelector} from "@hooks/redux.ts";

import {closeCallRequestModal} from "@/store/modals/modals.slice.tsx";
import Input from "@UI/Form/Input.tsx";
import {RedButton} from "@UI/Buttons";
import {useRequestCallMutation} from "@/store/offices/offices.api.ts";
import Checkbox from "@UI/Form/Checkbox.tsx";
import {isPhoneNumber} from "@/utils/formValidation.ts";
import {BsTelephone} from "react-icons/bs";

interface ModalProps {

}

export const CallRequestModal: React.FC<ModalProps> = ({}) => {

    const {isCallRequestModalOpen, callRequestModalData} = useTSelector(state => state.modals);
    const dispatch = useTDispatch();
    const [requestCall] = useRequestCallMutation();

    const [isSent, setIsSent] = useState(false);
    const [form, setForm] = useState({
        name: '',
        phone: '',
        agree: false
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
        if(!form.agree) return showError("Вы должны принять политику обработки персональных данных", "agree");
        else showError(false);

        await requestCall({
            name: form.name,
            phone: form.phone,
            ...callRequestModalData
        });

        setIsSent(true);
    }

    return (
        <div
            className={`${isCallRequestModalOpen ? 'opacity-1 translate-y-0 shadow-2xl' : 'opacity-0 -translate-y-8 pointer-events-none'} fixed w-screen h-screen top-0 left-0 bg-black/[.7] flex items-center justify-center z-50 transition duration-300 px-2`}
        >
            <div
                className="absolute top-0 left-0 w-full h-full z-0"
                onClick={() => dispatch(closeCallRequestModal())}
            />

            <div className="relative modal px-16 py-16 bg-white z-10 max-w-md">
                <div
                    className="absolute top-4 right-4 cursor-pointer font-bold text-gray-600 text-2xl"
                    onClick={() => dispatch(closeCallRequestModal())}
                >
                    &#10005; {/* HTML code for a multiplication sign */}
                </div>

                {!isSent && <div className="flex flex-col justify-center gap-5">
                    <h3 className="text-app-accent font-bold text-2xl text-center">Заказать звонок</h3>

                    <div className={`text-lg text-gray-900 text-center my-2 ${error ? 'block' : 'hidden'} max-w-sm`}>
                        {error}
                    </div>

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

                    <Checkbox
                        name="agree"
                        checked={form.agree}
                        setForm={setForm}
                    >
                        Отправляя свои данные, я соглашаюсь с <a href="/personal-data" className="underline" target="_blank">Политикой обработки персональных данных</a> и <a href="/terms-of-service" className="underline" target="_blank">Пользовательским соглашением</a>
                    </Checkbox>

                    <RedButton 
                        filled={true} 
                        className="sm:w-full"
                        onClick={sendRequest}
                    >Отправить</RedButton>
                </div>}

                {isSent && <div className="mt-4 text-lg text-center max-w-xs">
                    Спасибо за обращение! <br/>
                    В ближайшее время с Вами свяжется наш специалист.
                </div>}
            </div>
        </div>
    );
}