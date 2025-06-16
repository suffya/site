import React from "react";
import { Link } from "react-router-dom";

export default function CarsMetallPage() {
    return(
        <div>
            <section
                className="bg-cover bg-center py-20"
                style={{
                    backgroundImage:
                    "url('https://metall-priem-simferopol.ru/wp-content/themes/Metall-theme/assets/banner/avtolom.webp')",
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
                            &nbsp;Машина на металлолом
                            </Link>
                        </li>
                        </ul>
                        <h1 className="text-3xl font-medium uppercase text-left text-white">Прием черного металла</h1>
                    </div>
            </section>
            <section className="bg-[#1f2937] text-white py-12">
                <div className="bg-[#1e2a35] text-white py-10">
                    <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-10">
                        {/* Sidebar */}
                        <div className="bg-[#1f2937] p-4 text-center text-[#d3d0ce]">
                            <ul className="divide-y divide-white/80">
                            <li>
                                <Link to="/cvetnoy-lom/med" className="block py-2 text-orange-500 underline font-bold">АВТОЛОМ</Link>
                            </li>
                            <li>
                                <Link to="/cvetnoy-lom/alyuminiy" className="block py-2 text-orange-500 font-bold hover:underline">катализаторы</Link>
                            </li>
                            </ul>
                        </div>

                        {/* Content Area */}
                        <div className="w-full lg:w-3/4 space-y-6">
                        <p className="text-center italic">Цены на железо постоянно меняются, уточняйте по телефону!</p>

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

                        {/* Call To Action */}
                        <div className="space-y-4">
                            <a href="tel:+79781606136">
                            </a>
                            <p className="text-left text-[#d3d0ce] text-sm">
                            <strong>Машину на металлолом в Симферополе по выгодной цене принимает скупка-приемка</strong><Link className="text-orange-500 underline" to="/">"В-Лом"</Link>.
                            Автомобильный лом можно сдать как неразобранным автотранспортом, так и частями. Состояние машины на приемке не имеет значения, компания ведет скупку автомобилей полностью разрушенных, после пожара или ДТП.
                            Автолом принимается в приемном пункте, но чаще всего требуется вывоз машины на металлолом по причине большого веса. При необходимости клиенту выдается справка о переработке его авто на лом. Узнать об условиях скупки и самовывоза, 
                            о ценах на прием автомобиля и его частей можно у диспетчера по номеру: Уточнить по телефону:{" "}
                            <a href="tel:+79781606136" className="text-orange-500">+7 (978) 234-94-01</a>.
                            </p>
                        </div>

                        {/* Advantages */}
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
                    <h2 className="text-center text-[21px] sm:text-3xl font-medium mb-6 uppercase text-black">
                        Машина на металлолом в Симферополе дорого
                    </h2>
                    <div className="space-y-4 text-gray-800 text-sm sm:text-base leading-relaxed text-left">
                        <p>
                        Любая автотехника, идущая на последующую переработку, проверяется нашим экспертом на наличие неметаллических деталей и элементов специальным прибором. Визуально сотрудник проверяет поверхность авто и запчасти на следы от горения и прободной ржавчины, последствия от агрессивной химии. Если обнаружены подобные дефекты, то
                        &nbsp;<a href="tel:+79781606136" className="text-orange-500 font-semibold hover:underline">цена приема</a>&nbsp;
                        машины на металлолом будет снижена. Также снижается стоимость автомобиля при наличии неметаллических узлов и элементов, которые обязательно имеются в автоломе.
                        </p>
        
                        <p>
                       Для вывоза машины с точки дислокации наши сотрудники приедут на спецтранспорте с инструментами для демонтажных работ. При необходимости разрежут авто на части и перевезут в наш приемный пункт металлолома.
                       Сдать компании "В-Лом" юридические и частные лица могут такие разновидности автолома:
                        </p>
        
                        <ul className="list-disc list-inside space-y-1">
                        <li>разных типов машины в целом состоянии (легковые и грузовые);</li>
                        <li>отдельные элементы авто: ходовую, капоты, двери;</li>
                        <li>автотехнику сельскохозяйственного пользования;</li>
                        <li>строительные машины: подъемники, экскаваторы, погрузчики, бульдозеры;</li>
                        <li>другие виды спецтехники.</li>
                        </ul>
        
                        <p>
                            Весь принятый автомобильный лом разбирается на механизмы и части для последующей переработки. 
                            <strong>Машины на металлолом дорого сдать можно по адресу пункта приема.</strong>{' '}
                            Конкретную информацию по цене скупки и условиям самовывоза автомобиля или другого
                            <Link to="/cvetnoy-lom/" className="text-orange-500 hover:underline"> черный металлолом звоните</Link> узнавайте по указанному телефону или приезжайте в
                            <Link to="/cvetnoy-lom/" className="text-orange-500 hover:underline"> пункт приема</Link> компании.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}