import React, {useState} from 'react';
import {RedButton} from "@UI/Buttons";
import Input from "@UI/Form/Input.tsx";
import {useRequestCallMutation} from "@/store/offices/offices.api.ts";

export const ContactsSection: React.FC = ({}) => {
    const [requestCall] = useRequestCallMutation();

    const [form, setForm] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const [isSent, setIsSent] = useState(false);
    const send = async (e: any) => {
        e.preventDefault();

        await requestCall({
            ...form
        });

        setIsSent(true);
    }

    return (
        <div
            className="relative section w-full h-full lg:px-16 px-5 flex items-center justify-center"
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

            <form className="flex flex-col w-full">
                <div className="relative w-full xl:space-x-6 xl:space-y-0 space-y-6 mb-6 flex xl:flex-row flex-col items-center">

                    <Input
                        value={form.name}
                        setForm={setForm}
                        name="name"
                        placeholder="Ваше Имя"
                        className="xl:w-auto flex flex-1 flex-shrink-1 w-full"
                    />

                    <Input
                        value={form.phone}
                        setForm={setForm}
                        name="phone"
                        placeholder="Ваш Телефон"
                        className="xl:w-auto w-full"
                    />

                    <Input
                        value={form.email}
                        setForm={setForm}
                        name="email"
                        placeholder="Ваше E-mail"
                        className="xl:w-auto w-full"
                    />

                </div>

                <textarea
                    name="message"
                    id="message"
                    className="bg-app p-3 md:px-12 outline-none text-gray-700 mb-10"
                    placeholder="Сообщение"
                    value={form.message}
                    onChange={(e) => setForm((prev: any) => ({
                        ...prev,
                        message: e.target.value
                    }))}
                ></textarea>

                <RedButton
                    filled={true}
                    onClick={send}
                >
                    Отправить
                </RedButton>
            </form>
        </div>
    );
}