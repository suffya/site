import React from "react";
import { Link } from "react-router-dom";

export default function VivozPage(){
    return(
        <div>
            <section
                className="bg-cover bg-center py-20"
                style={{
                    backgroundImage:
                    "url('	https://metall-priem-simferopol.ru/wp-content/themes/Metall-theme/assets/img/ceny.webp')",
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
                            <Link className="text-white hover:underline" to="/ceny-lom">
                            &nbsp; Вывоз металлолома
                            </Link>
                        </li>
                        </ul>
                        <h1 className="text-4xl font-medium uppercase text-left text-white">Вывоз металлолома</h1>
                    </div>
            </section>

            <section className="bg-[#1f2937] text-white ">
                <div className="bg-[#1f2937] text-white py-10">
                    <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-10 justify-center">
                        <div className="bg-[#1f2937] p-4 text-center text-[#d3d0ce]">
                            <ul className="divide-y divide-white/80">
                            <li>
                                <Link to="/cvetnoy-lom/med" className="block py-2 text-orange-500 underline font-bold">медь</Link>
                            </li>
                            <li>
                                <Link to="/" className="block py-2 text-orange-500 font-medium hover:underline">Алюминий</Link>
                            </li>
                            <li>
                                <Link to="/" className="block py-2 text-orange-500 font-medium hover:underline">Латунь</Link>
                            </li>
                            <li>
                                <Link to="/" className="block py-2 text-orange-500 font-medium hover:underline">Свинец</Link>
                            </li>
                            <li>
                                <Link to="/" className="block py-2 text-orange-500 font-medium hover:underline">Бронза</Link>
                            </li>
                            <li>
                                <Link to="/" className="block py-2 text-orange-500 font-medium hover:underline">Железо</Link>
                            </li>
                            <li>
                                <Link to="/" className="block py-2 text-orange-500 font-bold hover:underline">Чугун</Link>
                            </li>
                            <li>
                                <Link to="/" className="block py-2 text-orange-500 font-medium hover:underline">Сталь</Link>
                            </li>
                            <li>
                                <Link to="/" className="block py-2 text-orange-500 font-medium hover:underline">Нержавейка</Link>
                            </li>
                            </ul>
                        </div>
                            {/* Content Area */}
                        <div className="w-full lg:w-3/4 space-y-6">
                            <table className="w-full border-collapse text-sm">
                                <thead>
                                <tr className="text-left border-b border-gray-600">
                                    <th className="py-3 px-5 text-orange-500 border-b border-white pb-1">МЕТАЛЛ</th>
                                    <th className="py-3 px-5  border-b border-white pb-1">ЦЕНА, РУБ/КГ *</th>
                                </tr>
                                </thead>
                                <tbody className="text-left text-[#d3d0ce]">
                                <tr><td className="py-3 px-5 border-b border-white">самовывоз по Симферополю</td><td className="py-3 px-5 border-b border-white">договорная</td></tr>
                                </tbody>
                            </table>
                            <div className="max-w-4xl mx-auto p-6 ">
                                <div className="space-y-4 text-[#d3d0ce] text-sm sm:text-base leading-relaxed text-left">
                                    <p>
                                        <strong>Вывоз металлолома в Симферополе, <Link to="/cvetnoy-lom/" className="text-orange-500 hover:underline"> Алуште</Link> и <Link to="/cvetnoy-lom/" className="text-orange-500 hover:underline"> Севастополе</Link> жителям, организациям и предприятиям предлагает компания
                                        <Link to="/cvetnoy-lom/" className="text-orange-500 hover:underline"> "В-лом"</Link>
                                        </strong> Специальный транспорт имеется не у всех желающих сдать металлолом, особенно если собралось на территории большое количество металлического лома. Наша скупка предлагает услуги по самовывозу с вашего места дислокации лома черных и цветных металлов, бытового металлолома, металлических отходов. Оформить заявку на вывоз легко у диспетчера по телефону: 
                                        &nbsp;
                                        <Link to="/cvetnoy-lom/" className="text-orange-500 hover:underline"> +7 (978) 234-94-01.</Link>
                                    </p>
                                </div>
                            </div>
                            <div className="bg-[#1f2937] py-8 px-4">
                                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                                    
                                    {/* Левый столбец с преимуществами */}
                                    <div className="flex flex-col gap-6 text-white w-full md:w-1/2">
                                    <div className="flex items-center gap-4">
                                        <img src="	https://metall-priem-simferopol.ru/wp-content/themes/Metall-theme/assets/img/samovyvoz.webp" alt="Самовывоз" className="w-12 h-12" />
                                        <div className="text-left">
                                        <p className="font-bold text-white uppercase text-sm">САМОВЫВОЗ</p>
                                        <p className="text-sm text-white">вывозим сами</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <img src="	https://metall-priem-simferopol.ru/wp-content/themes/Metall-theme/assets/img/vesy.webp" alt="Весы" className="w-12 h-12" />
                                        <div className="text-left">
                                        <p className="font-bold text-white uppercase text-sm">ТОЧНЫЕ ВЕСЫ</p>
                                        <p className="text-sm text-white">без обмана</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <img src="	https://metall-priem-simferopol.ru/wp-content/themes/Metall-theme/assets/img/ves-kg.webp	" alt="Объёмы" className="w-12 h-12" />
                                        <div className="text-left">
                                        <p className="font-bold text-white uppercase text-sm">ЛЮБЫЕ ОБЪЕМЫ</p>
                                        <p className="text-sm text-white">Алюминий от 1 кг</p>
                                        </div>
                                    </div>
                                    </div>

                                    {/* Правая часть — изображение */}
                                    <div className="w-full md:w-1/2">
                                    <img src="https://metall-priem-simferopol.ru/wp-content/themes/Metall-theme/assets/slides/avtolom-2.webp" alt="Медь" className="w-full h-auto object-cover" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section 
            className="bg-cover bg-center py-16 px-4"
            style={{backgroundImage: 'url(	https://metall-priem-simferopol.ru/wp-content/themes/Metall-theme/assets/img/cat-2.webp)'}}>
                <div className="max-w-4xl mx-auto p-6 ">
                    <h2 className="pb-10 uppercase text-2xl text-black font-medium ">Вывоз лома металлов в Симферополе</h2>
                    <div className="space-y-4 text-gray-800 sm:text-base leading-relaxed text-left">
                        <p className="text-sm">
                       Сотрудник компании перезвонит для согласования деталей самовывоза, в том числе и о выполнении демонтажа металлоконструкций (тогда с бригадой приедет и газорезчик). Все работы по демонтажу, загрузке и транспортировке лома в
                        &nbsp;<Link to="/cvetnoy-lom/" className="text-orange-500 hover:underline"> приемный пункт</Link>&nbsp; выполняются опытными сотрудниками в кратчайшие сроки. Все манипуляции проводятся аккуратно и быстро.
                        <strong> Вывоз металлолома с территории</strong> {' '}
                         позволяет избавиться как жителям, так и предприятиям города от ненужного металлического хлама. Телефонный звонок в компанию позволит закрыть проблемы, которые касаются приема, демонтажа и самовывоза металлолома.
                        </p>
        
                        <p className="text-sm">
                        Скупка-приемка "В-Лом" вывозит из любой точки города <Link to="/cvetnoy-lom/" className="text-orange-500 hover:underline"> автомобильный </Link> и <Link to="/cvetnoy-lom/" className="text-orange-500 hover:underline">бытовой лом, </Link>
                         металлолом, в составе которого цветные и черные металлы. Для подачи заявки достаточно позвонить оператору и согласовать все нюансы. Процедура самовывоза лома по шагам:
                        </p>
        
                        <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Житель города или учреждение любым удобным вариантом отправляет заявку на вывоз лома. Наш сотрудник ее принимает, согласовывает нюансы работы и передает специалистам.</li>
                        <li>Если необходимо, то менеджер подготовит по запросу документы на приемку металлолома и смету на демонтажные работы.</li>
                        </ul>
        
                        <p className="text-sm">
                            <strong>Эксперт из бригады на выезде оценит качество металлолома, так как оно влияет на цену приема лома.</strong>{' '}
                            Расчет проводится безналичной оплатой. Узнать текущие условия вывоза лома, цены металла за 1 кг или тонну можно по телефону или в точке приемки. Приезжайте или звоните для вывоза металлолома!
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}