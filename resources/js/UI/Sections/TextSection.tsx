import React from "react";

export const TextSection: React.FC<{ title: string, text: string }> = ({title, text}) => {
    return (
        <section className="md:px-8 px-5">
            <h2 className="sm:mt-12 mt-8 text-app-accent font-bold lg:text-6xl md:text-5xl text-3xl font-metapro">
                {title}
            </h2>

            <p className="max-w-3xl mx-auto sm:my-12 my-8">
                {text}
            </p>
        </section>
    );
}