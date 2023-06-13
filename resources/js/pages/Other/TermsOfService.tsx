import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import illustration from "@assets/images/first-screen.jpg";
import {Helmet} from "react-helmet";
import Markdown from "react-markdown";

export const TermsOfService: React.FC = () => {

    const [text, setText] = useState('');

    useEffect(() => {
        fetch('/storage/terms-of-service.md').then(response => {
            return response.text()
        }).then(text => setText(text));
    }, []);

    return (
        <div className="w-full flex flex-col text-center text-[#3b4256]">

            <Helmet>
                <title>Victory Park - пользовательское соглашение</title>
            </Helmet>

            <section className="relative md:px-[50px] px-5 z-0 text-white flex flex-col pb-32 w-full">
                <div className="image-overlay w-full h-full pointer-events-none absolute top-0 left-0"/>

                <div className="relative my-12 text-gray-100 text-sm text-left">
                    <Link to="/">Главная</Link><span className="mx-2">/</span>Пользовательское соглашение
                </div>

                <h1 className="lg:text-7xl md:text-5xl text-4xl font-bold font-metapro my-16">
                    Пользовательское соглашение
                </h1>

                <div className="disable-tailwind text-left bg-white text-black p-3 rounded-sm">
                    <Markdown skipHtml children={text}/>
                </div>

                <img
                    className="absolute top-0 left-0 w-full object-cover object-center z-[-1]"
                    src={illustration}
                    alt=""
                />
            </section>

        </div>
    );
}