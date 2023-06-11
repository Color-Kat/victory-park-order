import React, {useState} from 'react';
import {useTDispatch, useTSelector} from "@hooks/redux.ts";

import {closeModal} from "@/store/modal/modal.slice.tsx";
import Input from "@UI/Form/Input.tsx";
import {RedButton} from "@UI/Buttons";

interface ModalProps {

}

export const CallRequestModal: React.FC<ModalProps> = ({}) => {

    const {isOpen} = useTSelector(state => state.modalCallRequest);
    const dispatch = useTDispatch();

    const [form, setForm] = useState({
        name: '',
        phone: ''
    });

    return (
        <div
            className={`${isOpen ? 'opacity-1 translate-y-0 shadow-2xl' : 'opacity-0 -translate-y-8 pointer-events-none'} fixed w-screen h-screen top-0 left-0 bg-black/[.7] flex items-center justify-center z-50 transition duration-300`}
        >
            <div
                className="absolute top-0 left-0 w-full -m-16 h-full z-0"
                onClick={() => dispatch(closeModal())}
            />

            <div className="relative modal px-16 py-16 bg-white z-10">
                <div
                    className="absolute top-4 right-4 cursor-pointer font-bold text-gray-600 text-2xl"
                    onClick={() => dispatch(closeModal())}
                >
                    &#10005; {/* HTML code for a multiplication sign */}
                </div>

                <div className="flex flex-col justify-center gap-5">
                    <h3 className="text-app-accent font-bold text-2xl text-center">Заказать звонок</h3>

                    <Input name="name" placeholder="Имя" value={form.name} setForm={setForm} type="text"/>

                    <Input name="phone" placeholder="Телефон" value={form.phone} setForm={setForm} type="text"/>

                    <RedButton filled={true} className="sm:w-full">Отправить</RedButton>
                </div>
            </div>
        </div>
    );
}