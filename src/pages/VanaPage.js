import React from "react";
import { Link } from "react-router-dom";

export default function VanaPage() {
    return(
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
                className="bg-cover bg-center py-12 "
                style={{
                    backgroundImage:
                    "url('https://metall-priem-simferopol.ru/wp-content/themes/Metall-theme/assets/img/cat-1.webp')",
                }}
                >
                    <div className="max-w-7xl mx-auto px-4 flex grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        <Link
                        to="/chernyy-lom/zhelezo"
                        className="relative group block overflow-hidden"
                        >
                        <img
                            src="	https://metall-priem-simferopol.ru/wp-content/themes/Metall-theme/assets/slides/vanna-1.webp"
                            alt="Железо"
                            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute bottom-0 w-full text-center py-2 bg-black/60 text-orange-500 font-semibold transition-all duration-300 group-hover:bg-orange-500/60 group-hover:text-white">
                            ВАННА
                        </div>
                        </Link>

                        <Link
                        to="/chernyy-lom/chugun"
                        className="relative group block overflow-hidden"
                        >
                        <img
                            src="https://metall-priem-simferopol.ru/wp-content/themes/Metall-theme/assets/slides/batareya-1.webp"
                            alt="Чугун"
                            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute bottom-0 w-full text-center py-2 bg-black/60 text-orange-500 font-semibold transition-all duration-300 group-hover:bg-orange-500/60 group-hover:text-white">
                            БАТАРЕЯ
                        </div>
                        </Link>

                        <Link
                        to="/chernyy-lom/stal"
                        className="relative group block overflow-hidden"
                        >
                        <img
                            src="https://metall-priem-simferopol.ru/wp-content/themes/Metall-theme/assets/slides/radiodetali-1.webp"
                            alt="Сталь"
                            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute bottom-0 w-full text-center py-2 bg-black/60 text-orange-500 font-semibold transition-all duration-300 group-hover:bg-orange-500/60 group-hover:text-white">
                            РАДЕОДЕТАЛИ
                        </div>
                        </Link>
                    </div>
                </section>
                <div className="max-w-7xl mx-auto px-4 py-10 text-black">
                    <div className="space-y-6 text-left text-sm">
                        <p>
                        <strong>Прием бытового лома в Симферополе проводит по высоким ценам у населения и организаций скупка-приемка { }<a className="text-orange-500 underline" href="/">"В-Лом"</a></strong>.
                       У каждого человека в доме, квартире, гараже найдется масса предметов, которые давно отслужили свой срок, не подлежат ремонту или стали ненужными предметами быта, но так и не утилизированные по разным причинам. Нет необходимости сохранять ненужные изделия и сломанную бытовую технику, загромождать хламом свободную территорию 
                       <strong>Компания предлагает за бытовой лом хорошие цены на приеме.</strong> Узнать расценки на приемку металлолома можно в прайс-таблице или у оператора по телефону:
                       <a href="/" className="text-orange-500 underline">+7 (978) 160-61-36</a>.

                        </p>
                        <p>
                        Если на вашем участке накопилось большое количество бытового лома, то оформите у диспетчера по указанному телефону его самовывоз. Наши сотрудники приедут на спецтранспорте на место дислокации металлолома, аккуратно и быстро погрузят его и перевезут в точку приема. Расчет за бытовой лом проводится по желанию в скупке компании или на месте вывоза, осуществляется переводом на банковскую карту поставщика. Наша бригада по договоренности проводит демонтаж металлоконструкций. Все детали работ надо обсудить заранее.
                        </p>


                        <h2 className="text-center font-bold text-xl uppercase pt-6">ПРИЕМ БЫТОВОГО ЛОМА В Симферополе ДОРОГО</h2>

                        <p>
                        <strong>Компании "В-Лом" можно сдать старые бытовые приборы и технику,</strong>. в составе которых имеются примеси из <a className="text-orange-500 underline" href="/ceny/">цветных</a> и <a className="text-orange-500 underline" href="/ceny/">черных</a>
                        </p>
                        <ul className="list-disc pl-6 space-y-1 text-left">
                        <li>всю технику для дома: холодильники, микроволновки, кухонные комбайны, стиральные машины и т. п.;</li>
                        <li>батареи отопления, ванны;</li>
                        <li>отходы из чермета и цветмета: стружка, целые куски, мелкие механизмы и элементы;</li>
                        <li>лом от газовых или водопроводных труб;</li>
                        <li>аккумуляторы, приборы с радиодеталями;</li>
                        <li>все предметы, в составе которых присутствует металл.</li>
                        </ul>
                        <p>
                        Повысить цену приема бытового лома можно – надо освободить изделия от неметаллических элементов. После визуального осмотра и оценки бытового металлолома наш сотрудник озвучит стоимость принимаемого лома или техники. Компания напрямую работает с перерабатывающими вторсырье предприятиями и устанавливает на приемке выгодные для поставщиков цены. Высокие расценки на скупке металлолома, самовывоз по договоренности и качество обслуживания сделают вас постоянным клиентом "В-Лом".
                        </p>
                        <p>
                        <strong>Узнать текущие условия приема и самовывоза металлолома, <a className="text-orange-500 underline" href="/">цена металла</a> за 1 кг или тонну, можно по телефону или в точке приемки.</strong>
                        </p>
                    </div>
                </div>
        </div>
    )
}