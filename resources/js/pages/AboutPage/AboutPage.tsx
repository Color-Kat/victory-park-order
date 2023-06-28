import React from 'react';
import {Link} from "react-router-dom";

import "./aboutPage.scss";
import illustration from "@assets/images/about-bg.jpg";
import {TextSection} from "@UI/Sections/TextSection.tsx";
import {Helmet} from "react-helmet";

export const AboutPage: React.FC = () => {
    const BC_name = (import.meta as any).env.VITE_BC_NAME;

    return (
        <div className="w-full flex flex-col text-center text-[#3b4256]">

            <Helmet>
                <title>Описание бизнес-центра {BC_name}. Инфраструктура, характеристики {BC_name}</title>
                <meta name="description" content={`Информация о бизнес-центре ${BC_name}.`} />
                <link rel="canonical" href={(import.meta as any).env.VITE_APP_URL + '/about'}/>
            </Helmet>

            <section className="relative md:px-[50px] px-5 z-0 text-white flex flex-col pb-32">
                <div className="image-overlay w-full h-full pointer-events-none absolute top-0 left-0"/>

                <div className="relative my-12 text-gray-100 text-sm text-left">
                    <Link to="/">Главная</Link><span className="mx-2">/</span>О бизнес-центре
                </div>

                <h1 className="lg:text-7xl md:text-5xl text-4xl font-bold font-metapro text-white z-10 my-16">
                    О бизнес-центре {BC_name}
                </h1>

                <p className="max-w-5xl mx-auto bg-black/20 backdrop-blur-md rounded-lg p-3">
                    Бизнес-центр «Central City Tower» - офисный центр класса A, расположенный в самом центре Москвы, в непосредственной близости от Кремля. Здание 14 этажей. Общая площадь объекта 38 300 квадратных метров. Офисный комплекс был введен в эксплуатацию в 2005 году и с тех пор сдается в аренду под офисы для крупных российских и зарубежных компаний. Также в бизнес-центре на последнем этаже расположен ресторан Карлсон. Эксплуатация объекта осуществляется профессиональной управляющей компанией.
                </p>

                <img
                    className="absolute top-0 left-0 w-full h-full object-cover object-center z-[-1]"
                    src={illustration}
                    alt=""
                />
            </section>

            <TextSection
                title="Близость к метро и Садовому кольцу"
                text="Бизнес-центр «Central City Tower» располагается в районе Замоскворечье Центрального округа Москвы по адресу: Овчинниковская наб. 20, стр.1 Близость от крупных транспортных развязок делает расположение бизнес-центра исключительно удобным. Расстояние до Садового кольца составляет 1,2 км., до Третьего транспортного кольца - 4,5 км. Рядом пролегают улицы: Пятницкая и Новокузнецкая, набережные: Садовническая, Озерковская и Раушская. Дорога пешком до ближайшей станции метрополитена «Новокузнецкая» займет не более 5 минут. Таким образом, добраться до офиса в «Central City Tower» можно как на личном транспорте, так и пешком от станций метро. Важным преимуществом является то, что неподалеку от здания располагается Павелецкий вокзал, откуда курсируют экспрессы в международный аэропорт Домодедово."
            />

            <TextSection
                title="Техническое оснащение"
                text='Техническое оснащение «Central City Tower» находится на высоком уровне. БЦ «Central City Tower» оборудован передовыми инженерными системами: приточно-вытяжная вентиляция, система центрального кондиционирования, противопожарная сигнализация. Это создает благоприятный микроклимат в офисных помещениях. В бизнес-центре соблюдены все необходимые меры для безопасного арендаторов: круглосуточная охрана, система видеонаблюдения и система охранной сигнализации. Кроме того круглосуточная охрана «Central City Tower» исключит попадание в бизнес-центр посторонних лиц. Бизнес-центр обслуживается лифтами фирмы "ThyssenKrupp" (Германия).'
            />

            <TextSection
                title="Престижность"
                text='Компании, арендующие здесь офис, получают престижное окружение с множеством объектов инфраструктуры. В разное время арендаторами бизнес-центра являлись такие компании как «Международный Московский Банк», «Северстальтранс», «Фрито Лэй Мануфактуринг» и «Ренессанс Капитал» Аренда в "Central City Tower" обеспечит Вам комфортное ведение бизнеса и подчеркнет успешность компании в глазах партнеров и конкурентов.'
            />

            <div className="specifications-polygon flex flex-wrap sm:justify-center px-5 lg:space-x-8 max-w-6xl mx-auto my-8">
                <article className="flex items-center">
                    <p>Общая площадь бизнес-центра:<br/><span>38 300 м<sup>2</sup></span></p>
                </article>
                <article className="flex items-center">
                    <p>Арендуемая площадь:<br/><span>28 000 м<sup>2</sup></span></p>
                </article>
                <article className="flex items-center">
                    <p>Количество этажей:<br/><span>14</span></p>
                </article>
                <article className="flex items-center md:pr-16 sm:pr-20">
                    <p>Год постройки:<br/><span>2005</span></p>
                </article>
                <article className="flex items-center md:pr-24 sm:pr-20">
                    <p>Паркинг:<br/><span>310 мест</span></p>
                </article>
            </div>

            <TextSection
                title="Инфраструктура"
                text="Бизнес-центр также предлагает широкий спектр удобств и услуг, которые помогут вам и вашей команде сосредоточиться на ядре вашего бизнеса. Внутренний ресторан и кафе предлагают разнообразные варианты питания, а современный фитнес-центр и спа-салон помогут вам расслабиться и поддерживать баланс между работой и личной жизнью."
            />
        </div>
    );
}