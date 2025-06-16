import React from "react";
import { Link } from "react-router-dom";

const IronPage = () => {
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

        <section className="bg-[#1f2937] text-white py-12">
            <div className="bg-[#1e2a35] text-white py-10">
                <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-10">
                    {/* Sidebar */}
                    <div className="bg-[#1f2937] p-4 text-center text-[#d3d0ce]">
                        <h3 className="text-orange-500 font-bold mb-4">ЧЕРНЫЙ ДОМ</h3>
                        <ul className="divide-y divide-white/80">
                        <li>
                            <Link to="/cvetnoy-lom/med" className="block py-2 text-orange-500 underline">железо</Link>
                        </li>
                        <li>
                            <Link to="/cvetnoy-lom/alyuminiy" className="block py-2 text-orange-500 font-bold hover:underline">чугун</Link>
                        </li>
                        <li>
                            <Link to="/cvetnoy-lom/alyuminiy" className="block py-2 text-orange-500 hover:underline">сталь</Link>
                        </li>
                        <li>
                            <Link to="/cvetnoy-lom/alyuminiy" className="block py-2 text-orange-500 hover:underline">сталь 3А</Link>
                        </li>
                        <li>
                            <Link to="/cvetnoy-lom/alyuminiy" className="block py-2 text-orange-500 hover:underline">нержавейка</Link>
                        </li>
                        </ul>
                    </div>

                    {/* Content Area */}
                    <div className="w-full lg:w-3/4 space-y-6">
                    <p className="text-center italic">Цены на железо постоянно меняются, уточняйте по телефону!</p>

                    <table className="w-full border-collapse text-sm">
                        <thead>
                        <tr className="text-left border-b border-gray-600">
                            <th className="py-3 px-5 text-orange-500 border-b border-white pb-1">ЧЕРНЫЙ МЕТАЛЛ</th>
                            <th className="py-3 px-5  border-b border-white pb-1">ЦЕНА, РУБ/КГ *</th>
                        </tr>
                        </thead>
                        <tbody className="text-left text-[#d3d0ce]">
                        <tr><td className="py-3 px-5 border-b border-white">чугун</td><td className="py-3 px-5 border-b border-white">17-27</td></tr>
                        <tr><td className="py-3 px-5 border-b border-white">сталь</td><td className="py-3 px-5 border-b border-white">14-30</td></tr>
                        <tr><td className="py-3 px-5 border-b border-white">сталь 3А</td><td className="py-3 px-5 border-b border-white">13-23</td></tr>
                        <tr><td className="py-3 px-5 border-b border-white">сталь 4А</td><td className="py-3 px-5 border-b border-white">14-30</td></tr>
                        <tr><td className="py-3 px-5 border-b border-white">сталь 5А</td><td className="py-3 px-5 border-b border-white">17-25</td></tr>
                        <tr><td className="py-3 px-5 border-b border-white">сталь 12А</td><td className="py-3 px-5 border-b border-white">15-36</td></tr>
                        <tr><td className="py-3 px-5 border-b border-white">сталь 13А</td><td className="py-3 px-5 border-b border-white">17-26</td></tr>
                        <tr><td className="py-3 px-5 border-b border-white">нержавейка</td><td className="py-3 px-5 border-b border-white">84-106</td></tr>
                        <tr><td className="py-3 px-5 border-b border-white">железо</td><td className="py-3 px-5 border-b border-white">16-25</td></tr>
                        <tr><td className="py-3 px-5 border-b border-white">оцинковка</td><td className="py-3 px-5 border-b border-white">12-25</td></tr>
                        <tr><td className="py-3 px-5 border-b border-white">арматура</td><td className="py-3 px-5 border-b border-white">14-22</td></tr>
                        <tr><td className="py-3 px-5 border-b border-white">жесть</td><td className="py-3 px-5 border-b border-white">9-20</td></tr>
                        <tr><td className="py-3 px-5 border-b border-white">тросы</td><td className="py-3 px-5 border-b border-white">23</td></tr>
                        <tr><td className="py-3 px-5 border-b border-white">стружка металлическая (чермет)</td><td className="py-3 px-5 border-b border-white">13-20</td></tr>
                        <tr><td className="py-3 px-5 border-b border-white">самовывоз по Крыму</td><td className="py-3 px-5 border-b border-white">договорная</td></tr>
                        <tr><td className="py-3 px-5 border-b border-white">демонтаж, газорезка</td><td className="py-3 px-5 border-b border-white">договорная</td></tr>
                        </tbody>
                    </table>

                    {/* Call To Action */}
                    <div className="space-y-4">
                        <a href="tel:+79781606136">
                        </a>
                        <p className="text-left text-[#d3d0ce] text-sm">
                        <strong>Прием железа дорого в Симферополе выполняет скупка-приемка</strong><Link className="text-orange-500 underline" to="/">"В-Лом"</Link>.
                        Население, учреждения, предприятия города могут сдать любой объем и разные категории железного лома компании. Добыча железорудных ископаемых происходит постоянно, ведь железо используется в промышленности в больших количествах. 
                        Сберечь природные ресурсы можно при использовании переработанного металлолома. У железа нет антикоррозийных характеристик, период эксплуатации железной продукции недолог. Поэтому пришедшие в негодность железные изделия стоит сдать 
                        на лом и выручить "живые" деньги. <strong> На сайте в рубрике </strong><Link to="/ceny" className="text-orange-500 underline">"Ценах"</Link>. Уточнить по телефону:{" "}
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
                        <img src="https://metall-priem-simferopol.ru/wp-content/themes/Metall-theme/assets/slides/zhelezo-3.webp" alt="Медь" className="w-full h-auto object-cover" />
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
                Приём железа и железного лома в Симферополе дорого
            </h2>
            <div className="space-y-4 text-gray-800 text-sm sm:text-base leading-relaxed text-left">
                <p>
                Если на участке накопился металлолом от 100 кг, стоит заказать по указанному телефону его вывоз. После уточнения деталей самовывоза на место дислокации лома
                прибудет бригада сотрудников, погрузит металлолом и <a href="tel:+79781606136" className="text-orange-500 font-semibold hover:underline">пункт приема</a>&nbsp;
                Если нужен демонтаж металлоконструкций, то об этом важно сказать оператору при
                подаче заявки. Все работы по вывозу проводятся аккуратно и в короткие сроки.
                При согласовании нюансов вывоза металлолома с точки дислокации важно обсудить и демонтаж металлоконструкций, который выполняется сотрудниками компании при необходимости.
                </p>

                <p>
                Компания без посредников сотрудничает с перерабатывающими металлолом заводами и устанавливает на скупке конкурентные цены. При заключении договора с оптовиками и постоянными поставщиками выгода обоюдная: 
                у клиентов высокие цены и бесплатный вывоз, у компании – постоянное поступление вторсырья. На приеме наш сотрудник проверяет качество железа и лома. На окончательную цену скупки влияет:
                </p>

                <ul className="list-disc list-inside space-y-1">
                <li>объем металлолома;</li>
                <li>наличие примесей, изъянов, ржавчины;</li>
                <li>присутствие в ломе железа цветных металлов;</li>
                <li>загрязнения маслом, краской, лаком.</li>
                </ul>

                <p>
                <strong>Расчет после приема железа проводится мгновенно переводом на карту.</strong>{' '}
                 За подробной информацией и консультацией как дорого сдать железо и другой
                <Link to="/cvetnoy-lom/" className="text-orange-500 hover:underline"> черный металлолом звоните</Link> звоните в компанию по указанному телефону или приезжайте в{' '}
                </p>
            </div>
            </div>
        </section>
    </div>
  );
};

export default IronPage;
