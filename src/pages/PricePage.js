import React from "react";
import { Link } from "react-router-dom";

export default function PricePage() {
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
                            &nbsp; Цена
                            </Link>
                        </li>
                        </ul>
                        <h1 className="text-3xl font-medium uppercase text-left text-white">Прием черного металла</h1>
                    </div>
            </section>
            <section className="bg-[#1f2937] text-white ">
                <div className="bg-[#1e2a35] text-white py-10">
                    <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-10 justify-center">
                            {/* Content Area */}
                            <div className="w-full lg:w-3/4 space-y-6">
                            <p className="text-center italic text-[#d3d0ce] text-sm">Актуальные цены на цветной и черный металлолом в Симферополе, Алуште и Севастополе на сегодня <strong> 28.05.2025 </strong>, но они постоянно меняются. Уточняйте по телефону!
                            
                            </p>
                            <p className="text-center italic text-[#d3d0ce] text-sm">
                                <strong>Цена поднимается от объёма лома: цветного - от 50 кг, чёрного - от 300 кг!</strong>
                            </p>
                            <h2 className="uppercase text-xl text-[#d3d0ce] font-medium py-10">Цены на прием цветного металлолома</h2>

                            <table className="w-full border-t border-b text-sm">
                                    <thead>
                                    <tr className="text-left border-b border-gray-600">
                                        <th className="py-3 px-5 text-orange-500 border-b border-white pb-1" ><Link to="/cvetnoy-lom/">ЦВЕТНОЙ МЕТАЛЛ</Link></th>
                                        <th className="py-3 px-5 border-b border-white pb-1">ЦЕНА, РУБ/КГ *</th>
                                    </tr>
                                    </thead>
                                    <tbody className="text-left text-[#d3d0ce] ">
                                    {[
                                        ["медь", "600-740"],
                                        ["медная стружка", "400-540"],
                                        ["медь блеск", "630-740"],
                                        ["медь кусок", "600-720"],
                                        ["медь микс", "600-700"],
                                        ["алюминий", "100-210"],
                                        ["алюминий электротехнический", "150-210"],
                                        ["алюминий пищевой", "1300-200"],
                                        ["алюминий моторный", "110-190"],
                                        ["алюминиевая банка", "45-65"],
                                        ["латунь", "3900-420"],
                                        ["бронза", "400-430"],
                                        ["свинец переплав", "90-95"],
                                        ["свинец кабельный", "65-75"],
                                        ["нихромовая проволока", "280-800"],
                                        ["цинк", "45-90"],
                                        ["самовывоз по Крыму", "договорная"],
                                    ].map(([metal, price]) => (
                                        <tr key={metal} className="border-t border-gray-700">
                                        <td className="py-3 px-5 border-b border-white">{metal}</td>
                                        <td className="py-3 px-5 border-b border-white">{price}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                            </table>

                            <h2 className="uppercase text-xl text-[#d3d0ce] font-medium py-10">Аккумуляторы (АКБ)</h2>

                            <table className="w-full border-collapse text-sm">
                                <thead>
                                <tr className="text-left border-b border-gray-600">
                                    <th className="py-3 px-5 text-orange-500 border-b border-white pb-1">АККУМУЛЯТОРЫ (АКБ)</th>
                                    <th className="py-3 px-5  border-b border-white pb-1">ЦЕНА, РУБ/КГ *</th>
                                </tr>
                                </thead>
                                <tbody className="text-left text-[#d3d0ce]">
                                <tr><td className="py-3 px-5 border-b border-white">автомобильные АКБ</td><td className="py-3 px-5 border-b border-white">55-62</td></tr>
                                <tr><td className="py-3 px-5 border-b border-white">АКБ от ИБП</td><td className="py-3 px-5 border-b border-white">50-63</td></tr>
                                <tr><td className="py-3 px-5 border-b border-white">аккумуляторы от ноутбука</td><td className="py-3 px-5 border-b border-white">54-63</td></tr>
                                <tr><td className="py-3 px-5 border-b border-white">гелевые АКБ</td><td className="py-3 px-5 border-b border-white">54-63</td></tr>
                                <tr><td className="py-3 px-5 border-b border-white">свинцовые АКБ</td><td className="py-3 px-5 border-b border-white">56-62</td></tr>
                                <tr><td className="py-3 px-5 border-b border-white">слитые аккумуляторы</td><td className="py-3 px-5 border-b border-white">50-61</td></tr>
                                <tr><td className="py-3 px-5 border-b border-white">тяговые аккумуляторы</td><td className="py-3 px-5 border-b border-white">50-62</td></tr>
                                <tr><td className="py-3 px-5 border-b border-white">щелочные аккумуляторы</td><td className="py-3 px-5 border-b border-white">39-58</td></tr>
                                <tr><td className="py-3 px-5 border-b border-white">эбонитовые АКб</td><td className="py-3 px-5 border-b border-white">43-77</td></tr>
                                <tr><td className="py-3 px-5 border-b border-white">самовывоз по Крыму</td><td className="py-3 px-5 border-b border-white">договорная</td></tr>
                                </tbody>
                            </table>
                            
                            <h2 className="py-10 uppercase text-xl text-[#d3d0ce] font-medium ">Автолом</h2>
                            <table className="w-full border-collapse text-sm">
                                <thead>
                                <tr className="text-left border-b border-gray-600">
                                    <th className="py-3 px-5 text-orange-500 border-b border-white pb-1">АВТОЛОМ</th>
                                    <th className="py-3 px-5  border-b border-white pb-1">ЦЕНА, РУБ/КГ *</th>
                                </tr>
                                </thead>
                                <tbody className="text-left text-[#d3d0ce]">
                                <tr><td className="py-3 px-5 border-b border-white">автолом</td><td className="py-3 px-5 border-b border-white">14-27</td></tr>
                                <tr><td className="py-3 px-5 border-b border-white">катализаторы</td><td className="py-3 px-5 border-b border-white">договорная</td></tr>
                                <tr><td className="py-3 px-5 border-b border-white">вывоз металла по Крыму</td><td className="py-3 px-5 border-b border-white">договорная</td></tr>
                                </tbody>
                            </table>

                            <h2 className="py-10 uppercase text-xl text-[#d3d0ce] font-medium ">Стоимость бытового лома</h2>

                            <table className="w-full border-collapse text-sm">
                                <thead>
                                <tr className="text-left border-b border-gray-600">
                                    <th className="py-3 px-5 text-orange-500 border-b border-white pb-1">АВТОЛОМ</th>
                                    <th className="py-3 px-5  border-b border-white pb-1">ЦЕНА, РУБ/КГ *</th>
                                </tr>
                                </thead>
                                <tbody className="text-left text-[#d3d0ce]">
                                <tr><td className="py-3 px-5 border-b border-white">ванна</td><td className="py-3 px-5 border-b border-white">14-27</td></tr>
                                <tr><td className="py-3 px-5 border-b border-white">батарея</td><td className="py-3 px-5 border-b border-white">14-27</td></tr>
                                <tr><td className="py-3 px-5 border-b border-white">радиодетали</td><td className="py-3 px-5 border-b border-white">договорная</td></tr>
                                <tr><td className="py-3 px-5 border-b border-white">самовывоз по Крыму</td><td className="py-3 px-5 border-b border-white">договорная</td></tr>
                                </tbody>
                            </table>

                            <h2 className="py-10 uppercase text-xl text-[#d3d0ce] font-medium ">Стоимость вывоза и демонтажа</h2>

                            <table className="w-full border-collapse text-sm">
                                <thead>
                                <tr className="text-left border-b border-gray-600">
                                    <th className="py-3 px-5 text-orange-500 border-b border-white pb-1">ВЫВОЗ МЕТАЛЛОЛОМА</th>
                                    <th className="py-3 px-5  border-b border-white pb-1">ЦЕНА, РУБ/КГ *</th>
                                </tr>
                                </thead>
                                <tbody className="text-left text-[#d3d0ce]">
                                <tr><td className="py-3 px-5 border-b border-white">вывоз металла по Крыму</td><td className="py-3 px-5 border-b border-white">договорная</td></tr>
                                <tr><td className="py-3 px-5 border-b border-white">погрузка металла</td><td className="py-3 px-5 border-b border-white">бесплатно</td></tr>
                                <tr><td className="py-3 px-5 border-b border-white">оценка демонтажных работ</td><td className="py-3 px-5 border-b border-white">бесплатно</td></tr>
                                <tr><td className="py-3 px-5 border-b border-white">демонтаж, газорезка</td><td className="py-3 px-5 border-b border-white">договорная</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            <section 
            className="bg-cover bg-center py-16 px-4"
            style={{backgroundImage: 'url(	https://metall-priem-simferopol.ru/wp-content/themes/Metall-theme/assets/img/cat-2.webp)'}}>
                <div className="max-w-[1280px] mx-auto p-6 ">
                    <div className="space-y-4 text-gray-800 text-sm sm:text-base leading-relaxed text-left">
                        <p className="text-sm">
                            <strong>Цена на металлолом в Симферополе, Алуште и Севастополе в компании</strong>&nbsp;<Link to="/" className="text-orange-500 hover:underline"> "В-лом"</Link>&nbsp;при обращении к дежурному оператору или знакомстве 
                            с прайсом приятно удивляет тех, кто планирует сдать металл или лом на последующую переработку и выручить живые деньги. Цена приема 1 кг лома цветных или черных металлов в нашей скупке-приемке всегда выше, чем в других компаниях. Менеджер "В-Лом" заключает 
                            с поставщиком договор, если планируется постоянное сотрудничество или сдача металлолома оптом. Для клиента компании — это большая выгода, так как выше цены на скупку лома и выполняется бесплатный самовывоз с точки дислокации металлолома.
                            машины на металлолом будет снижена. Также снижается стоимость автомобиля при наличии неметаллических узлов и элементов, которые обязательно имеются в автоломе.
                            В пункт приемки жители, организации и предприятия города по высоким ценам могут сдать лом цветмета и чермета, автолом, а также бытовой металлолом. В рубрике "Цены" можно найти таблицу-прайс с расценками на приемку всех видов и категорий металла и лома за 1 кг. {' '}
                            <strong>Уточнить цену и условия приема металлолома легко у оператора по телефонному номеру:</strong><Link to="/cvetnoy-lom/" className="text-orange-500 hover:underline"> +7 (978) 160-61-36.</Link> Важно! Опубликованная на сайте информация не относится к договору публичной оферты.
                        </p>
        
                        <p className="text-sm">
                            Воспользоваться услугой самовывоза металлического вторсырья можно, когда на территории накопится большой объем лома. Для подачи заявки на вывоз достаточно позвонить по указанному номеру и согласовать с диспетчером условия приезда выездной бригады. Стоимость самовывоза, необходимый демонтаж металлоконструкций, 
                            другие организационные моменты обсуждаются с оператором по каждому конкретному случаю. На сайте есть онлайн-калькулятор, позволяющий заранее рассчитать цену планируемого к сдаче металлолома. Скупка-приемка "В-Лом" без посредников сотрудничает с предприятиями, которые переплавляют вторичный металл. Поэтому выгодно сдать компании металлический хлам, получив за него хорошие деньги.
                        </p>

                    </div>
                </div>

                <div className="max-w-7xl mx-auto py-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"> {/*BlackMetall*/}
                    <Link
                    to="/chernyy-lom/zhelezo"
                    className="relative group block overflow-hidden"
                    >
                    <img
                        src="	https://metall-priem-simferopol.ru/wp-content/themes/Metall-theme/assets/img/med.webp"
                        alt="Железо"
                        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 w-full text-center py-2 bg-black/60 text-orange-500 font-semibold transition-all duration-300 group-hover:bg-orange-500/60 group-hover:text-white">
                        МЕДЬ
                    </div>
                    </Link>

                    <Link
                    to="/chernyy-lom/chugun"
                    className="relative group block overflow-hidden"
                    >
                    <img
                        src="	https://metall-priem-simferopol.ru/wp-content/themes/Metall-theme/assets/img/latun.webp"
                        alt="Чугун"
                        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 w-full text-center py-2 bg-black/60 text-orange-500 font-semibold transition-all duration-300 group-hover:bg-orange-500/60 group-hover:text-white">
                        ЛАТУНЬ
                    </div>
                    </Link>

                    <Link
                    to="/chernyy-lom/stal"
                    className="relative group block overflow-hidden"
                    >
                    <img
                        src="	https://metall-priem-simferopol.ru/wp-content/themes/Metall-theme/assets/img/alum.webp"
                        alt="Сталь"
                        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 w-full text-center py-2 bg-black/60 text-orange-500 font-semibold transition-all duration-300 group-hover:bg-orange-500/60 group-hover:text-white">
                        АЛЮМИНИЙ
                    </div>
                    </Link>

                    <Link
                    to="/chernyy-lom/nerzhaveyka"
                    className="relative group block overflow-hidden"
                    >
                    <img
                        src="https://metall-priem-simferopol.ru/wp-content/themes/Metall-theme/assets/img/chern-1.webp"
                        alt="Нержавейка"
                        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 w-full text-center py-2 bg-black/60 text-orange-500 font-semibold transition-all duration-300 group-hover:bg-orange-500/60 group-hover:text-white">
                        ЖЕЛЕЗО
                    </div>
                    </Link>
                </div>

                <div className="max-w-7xl mx-auto px-4 py-10 text-black">
                    <div className="space-y-6 text-left text-sm">
                        <h2 className="text-center font-medium text-xl uppercase pt-6">СДАТЬ ЛОМ МЕТАЛЛА В СИМФЕРОПОЛЕ, АЛУШТЕ, СЕВАСТОПОЛЕ ДОРОГО, ПО ВЫСОКОЙ ЦЕНЕ</h2>

                        <p>
                        <strong>Любой тип и категорию металлолома можно сдать в Симферополе, <Link to="/cvetnoy-lom/" className="text-orange-500 hover:underline"> Алушта</Link> и <Link to="/cvetnoy-lom/" className="text-orange-500 hover:underline"> Севастополь</Link> дорого.</strong> В пункте приема эксперт осмотрит сдаваемый лом и оценит его, а окончательная цена зависит от таких нюансов: 
                        </p>
                        <ul className="list-disc pl-6 space-y-1 text-left">
                        <li>объема сдаваемого металлолома: стоимость 1 тонны выше;</li>
                        <li>засора лома неметаллическими добавками и элементами;</li>
                        <li>готовность металлического вторсырья к погрузке и необходимость демонтажа при вызове бригады на участок</li>
                        <li>категории лома – большие конструкции, кусковой металлолом, стружка;</li>
                        <li>статус "постоянный поставщик" (цена скупки выше).</li>
                        </ul>
                        <p>
                        <strong>Окончательную цену приема скажет эксперт после оценки металлолома.</strong> Расчет выполняется переводом денег на карту. Конкретную информацию по стоимости приемки и условиям самовывоза металла узнавайте по указанному телефону или приезжайте в <Link to="/cvetnoy-lom/" className="text-orange-500 hover:underline"> пункт приема.</Link>
                        </p>
                    </div>
                </div>
            </section>

            <section
            className="bg-cover bg-no-repeat"
            style={{
                backgroundImage:
                'url(https://metall-priem-simferopol.ru/wp-content/themes/Metall-theme/assets/img/ocenka-1.webp)',
            }}
            >
                <div className="max-w-[1140px] mx-auto px-4 pt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                    <img
                        src="https://metall-priem-simferopol.ru/wp-content/themes/Metall-theme/assets/img/priem-metall-man.webp"
                        alt="Менеджер по приему металлолома фото"
                        className="w-full max-w-sm mx-auto md:mx-0"
                    />
                    </div>
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl sm:text-3xl font-medium text-black mb-4">
                            Оценка металлолома по фото
                        </h2>
                        <p className="text-lg text-black">
                            Отправьте фотографии вашего лома в WhatsApp и мы за 5 минут проведем его предварительную оценку!
                        </p>
                        <div className="mt-8">
                            <a
                            href="https://wa.me/79781606136"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            <img
                                src="https://metall-priem-simferopol.ru/wp-content/themes/Metall-theme/assets/img/logo-whatsapp-1.webp"
                                alt="Whatsapp logo"
                                title="Whatsapp"
                                className="w-[250px] sm:w-[350px] md:w-[400px] lg:w-[500px] mx-auto"
                            />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}