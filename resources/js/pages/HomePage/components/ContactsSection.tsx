import React, {useState} from 'react';
import {RedButton} from "@UI/Buttons";
import firstScreenImg from "@assets/images/first-screen.jpg";
import Input from "@UI/Form/Input.tsx";


export const ContactsSection: React.FC = ({}) => {

    const [form, setForm] = useState({
        name: '',
        phone: '',
        email: '',
        text: ''
    });

    const send = (e: any) => {
        e.preventDefault();
        console.log(form);
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
                    name="text"
                    id="text"
                    className="bg-app p-3 md:px-12 outline-none text-gray-700 mb-10"
                    placeholder="Сообщение"
                    value={form.text}
                    onChange={(e) => setForm((prev: any) => ({
                        ...prev,
                        text: e.target.value
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