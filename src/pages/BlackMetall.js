import React from "react";
import { Link } from "react-router-dom";


export default function BlackMetall() {
    
    return (
        <div>
            <section
                className="bg-cover bg-center py-20"
                style={{
                    backgroundImage:
                    "url('	https://metall-priem-simferopol.ru/wp-content/themes/Metall-theme/assets/banner/med.webp')",
                }}
                >
                    <div className="max-w-7xl mx-auto px-4">
                        <ul className="text-sm mb-4 flex space-x-2">
                        <li>
                            <Link className="text-white hover:underline" to="/">
                            Главная
                            </Link>
                            <span className="text-white"> •</span>
                        </li>
                        <li>
                            <Link className="text-white hover:underline" to="/chernyy-lom">
                            &nbsp;Черный металл
                            </Link>
                            <span className="text-white"> •</span>
                        </li>
                        <li>
                            <span className="text-white">&nbsp;Прием черного металла</span>
                        </li>
                        </ul>
                        <h1 className="text-3xl font-medium uppercase text-left text-white">Прием черного металла</h1>
                    </div>
            </section>
            <section
            className="bg-cover bg-center py-12"
            style={{
                backgroundImage:
                "url('https://metall-priem-simferopol.ru/wp-content/themes/Metall-theme/assets/img/cat-1.webp')",
            }}
            >
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    <Link
                    to="/chernyy-lom/zhelezo"
                    className="relative group block overflow-hidden"
                    >
                    <img
                        src="https://metall-priem-simferopol.ru/wp-content/themes/Metall-theme/assets/slides/zhelezo-1.webp"
                        alt="Железо"
                        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 w-full text-center py-2 bg-black/60 text-orange-500 font-semibold transition-all duration-300 group-hover:bg-orange-500/60 group-hover:text-white">
                        ЖЕЛЕЗО
                    </div>
                    </Link>

                    <Link
                    to="/chernyy-lom/chugun"
                    className="relative group block overflow-hidden"
                    >
                    <img
                        src="https://metall-priem-simferopol.ru/wp-content/themes/Metall-theme/assets/slides/chugun-1.webp"
                        alt="Чугун"
                        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 w-full text-center py-2 bg-black/60 text-orange-500 font-semibold transition-all duration-300 group-hover:bg-orange-500/60 group-hover:text-white">
                        ЧУГУН
                    </div>
                    </Link>

                    <Link
                    to="/chernyy-lom/stal"
                    className="relative group block overflow-hidden"
                    >
                    <img
                        src="https://metall-priem-simferopol.ru/wp-content/themes/Metall-theme/assets/slides/stal-1.webp"
                        alt="Сталь"
                        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 w-full text-center py-2 bg-black/60 text-orange-500 font-semibold transition-all duration-300 group-hover:bg-orange-500/60 group-hover:text-white">
                        СТАЛЬ
                    </div>
                    </Link>

                    <Link
                    to="/chernyy-lom/nerzhaveyka"
                    className="relative group block overflow-hidden"
                    >
                    <img
                        src="https://metall-priem-simferopol.ru/wp-content/themes/Metall-theme/assets/slides/nerga-1.webp"
                        alt="Нержавейка"
                        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 w-full text-center py-2 bg-black/60 text-orange-500 font-semibold transition-all duration-300 group-hover:bg-orange-500/60 group-hover:text-white">
                        НЕРЖАВЕЙКА
                    </div>
                    </Link>
                </div>
            </section>
            <div className="max-w-7xl mx-auto px-4 py-10 text-black">
                <div className="space-y-6 text-left text-sm">
                    <p>
                    <strong>Прием черного металла (чермета) в Симферополе осуществляет у населения, организаций и предприятий города компания <a className="text-orange-500 underline" href="/">"В-Лом"</a></strong>.
                    К чермету относится железо, сталь, чугун, нержавеющая сталь, ферросплавы. К запасам природных ископаемых нужно относиться расчетливо, поэтому металлургия и другие сферы промышленности активно задействуют повторно переработанные черные металлы. Такое применение металлолома снижает себестоимость выпущенной продукции. Стоимость 1 кг чермета зависит от различных факторов, в том числе и от рыночной цены. Скупка-приемка "В-Лом" работает напрямую 
                    с перерабатывающими металлическое вторсырье предприятиями. Поэтому для клиентов компании установлены высокие цены приемки черных металлов и лома в сравнении с конкурентами. Чтобы узнать цены и условия приема черного металлолома, достаточно позвонить диспетчеру компании по телефону: <a href="/" className="text-orange-500 underline">+7 (978) 160-61-36</a>.
                    </p>
                    <p>
                    Стоимость 1 кг чермета зависит от различных факторов. Скупка-приемка "В-Лом" работает напрямую с перерабатывающими предприятиями, предлагая конкурентные цены. Чтобы <strong>узнать цены и условия приема черного металлолома</strong>, позвоните: <a href="tel:+79781606136" className="text-orange-500 underline">+7 (978) 160-61-36</a>.
                    </p>
                    <p>
                    Любые виды и категории черного и <a className="text-orange-500 underline" href="/cernyy-lom/">цветного металла</a> можно привезти в точку приема. Или оформить вывоз и демонтаж металлоконструкций.
                    </p>

                    <h2 className="text-center font-bold text-xl uppercase pt-6">СДАТЬ ЛОМ ЧЕРНЫХ МЕТАЛЛОВ В СИМФЕРОПОЛЕ</h2>

                    <p>
                    <strong>Примерную стоимость можно узнать в <a className="text-orange-500 underline" href="/ceny/">прайс-листе</a> на сайте или с помощью онлайн-калькулятора</strong>. Сдают такие виды:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-left">
                    <li>чугунный лом: цельные изделия, габаритные/негабаритные размеры;</li>
                    <li>железо и лом разных категорий;</li>
                    <li>нержавеющая сталь всех марок;</li>
                    <li>стальной лом разных классов.</li>
                    </ul>
                    <p>
                    При приеме сотрудник проводит анализ. Цена может снижаться из-за ржавчины, засоров, неметаллических примесей. Перед сдачей желательно убрать дерево, пластик и т.д.
                    </p>
                    <p>
                    <strong>Остались вопросы?</strong> Звоните в <a className="text-orange-500 underline" href="/kontakty/">пункт приема</a> или приезжайте.
                    </p>
                </div>
            </div>

        </div>
        
    )
}