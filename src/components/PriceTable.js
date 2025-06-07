import React from 'react';

const PriceTableSection = () => {
  return (
    <section className="bg-[#2f363d] py-12">
    <div className="max-w-[1140px] mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-[#d3d0ce] my-10 uppercase">Цены на прием металлолома</h2>
        <p className="text-gray-300 text-sm sm:text-base text-left mb-10">
        Ищете место с высокими ценами на прием цветного и черного металлолома в Симферополе, <a href="/alushta/" className="text-orange-400 hover:underline">Алуште</a> и <a href="/sevastopol/" className="text-orange-400 hover:underline">Севастополе</a> — звоните в скупку "В☆Лом"! На калькуляторе металла можно сделать предварительный расчет стоимости лома за кг, для понимания реальной суммы звоните в пункт приема. На цену металлолома влияют следующие показатели: вес, вид и категория, демонтаж, самовывоз, процент засора.
        </p>

        <h3 className="text-2xl sm:text-3xl font-bold text-[#d3d0ce] my-10 text-center uppercase">Цветной металлолом</h3>

        <div className="overflow-x-auto mb-12">
        <table className="min-w-full divide-y divide-white border-t border-b border-white">
            <thead className="bg-[#2f363d]">
            <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-orange-400 uppercase tracking-wider">Цветной металл</th>
                <th scope="col" className="px-6 py-3 text-center text-xs font-bold text-orange-400 uppercase tracking-wider">Цена, руб/кг</th>
            </tr>
            </thead>
            <tbody className="divide-y divide-white text-[#d3d0ce] text-sm">
            <tr><td className="px-6 py-2 text-left">медь</td><td className="px-6 py-2 text-center">600-740</td></tr>
            <tr><td className="px-6 py-2 text-left">медная стружка</td><td className="px-6 py-2 text-center">400-540</td></tr>
            <tr><td className="px-6 py-2 text-left">медь блеск</td><td className="px-6 py-2 text-center">630-740</td></tr>
            <tr><td className="px-6 py-2 text-left">медь кусок</td><td className="px-6 py-2 text-center">600-720</td></tr>
            <tr><td className="px-6 py-2 text-left">медь микс</td><td className="px-6 py-2 text-center">600-700</td></tr>
            <tr><td className="px-6 py-2 text-left">алюминий</td><td className="px-6 py-2 text-center">100-210</td></tr>
            <tr><td className="px-6 py-2 text-left">алюминий электротехнический</td><td className="px-6 py-2 text-center">150-210</td></tr>
            <tr><td className="px-6 py-2 text-left">алюминий пищевой</td><td className="px-6 py-2 text-center">1300-200</td></tr>
            <tr><td className="px-6 py-2 text-left">алюминий моторный</td><td className="px-6 py-2 text-center">110-190</td></tr>
            <tr><td className="px-6 py-2 text-left">алюминиевая банка</td><td className="px-6 py-2 text-center">45-65</td></tr>
            <tr><td className="px-6 py-2 text-left">латунь</td><td className="px-6 py-2 text-center">3900-420</td></tr>
            <tr><td className="px-6 py-2 text-left">бронза</td><td className="px-6 py-2 text-center">400-430</td></tr>
            <tr><td className="px-6 py-2 text-left">свинец переплав</td><td className="px-6 py-2 text-center">90-95</td></tr>
            <tr><td className="px-6 py-2 text-left">свинец кабельный</td><td className="px-6 py-2 text-center">65-75</td></tr>
            <tr><td className="px-6 py-2 text-left">нихромовая проволока</td><td className="px-6 py-2 text-center">280-800</td></tr>
            <tr><td className="px-6 py-2 text-left">цинк</td><td className="px-6 py-2 text-center">45-90</td></tr>
            <tr><td className="px-6 py-2 text-left">самовывоз по Крыму</td><td className="px-6 py-2 text-center">договорная</td></tr>
            </tbody>
        </table>
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold text-[#d3d0ce] my-10 text-center uppercase">Черный металлолом</h3>

        <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-white border-t border-b border-white">
            <thead className="bg-[#2f363d]">
            <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-orange-400 uppercase tracking-wider">Черный металл</th>
                <th scope="col" className="px-6 py-3 text-center text-xs font-bold text-orange-400 uppercase tracking-wider">Цена, руб/кг</th>
            </tr>
            </thead>
            <tbody className="divide-y divide-white text-[#d3d0ce] text-sm">
            <tr><td className="px-6 py-2 text-left">чугун</td><td className="px-6 py-2 text-center">17-27</td></tr>
            <tr><td className="px-6 py-2 text-left">сталь</td><td className="px-6 py-2 text-center">14-30</td></tr>
            <tr><td className="px-6 py-2 text-left">сталь 3А</td><td className="px-6 py-2 text-center">13-23</td></tr>
            <tr><td className="px-6 py-2 text-left">сталь 4А</td><td className="px-6 py-2 text-center">14-30</td></tr>
            <tr><td className="px-6 py-2 text-left">сталь 5А</td><td className="px-6 py-2 text-center">17-25</td></tr>
            <tr><td className="px-6 py-2 text-left">сталь 12А</td><td className="px-6 py-2 text-center">15-36</td></tr>
            <tr><td className="px-6 py-2 text-left">сталь 13А</td><td className="px-6 py-2 text-center">17-26</td></tr>
            <tr><td className="px-6 py-2 text-left">нержавейка</td><td className="px-6 py-2 text-center">84-106</td></tr>
            <tr><td className="px-6 py-2 text-left">железо</td><td className="px-6 py-2 text-center">16-25</td></tr>
            <tr><td className="px-6 py-2 text-left">оцинковка</td><td className="px-6 py-2 text-center">12-25</td></tr>
            <tr><td className="px-6 py-2 text-left">арматура</td><td className="px-6 py-2 text-center">14-22</td></tr>
            <tr><td className="px-6 py-2 text-left">жесть</td><td className="px-6 py-2 text-center">9-20</td></tr>
            <tr><td className="px-6 py-2 text-left">тросы</td><td className="px-6 py-2 text-center">23</td></tr>
            <tr><td className="px-6 py-2 text-left">стружка металлическая (чермет)</td><td className="px-6 py-2 text-center">13-20</td></tr>
            <tr><td className="px-6 py-2 text-left">самовывоз по Крыму</td><td className="px-6 py-2 text-center">договорная</td></tr>
            <tr><td className="px-6 py-2 text-left">демонтаж, газорезка</td><td className="px-6 py-2 text-center">договорная</td></tr>
            </tbody>
        </table>
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold text-[#d3d0ce] my-10 text-center uppercase">Аккумуляторы (АКБ)</h3>
        <div className="overflow-x-auto mb-12">
        <table className="min-w-full divide-y divide-white border-t border-b border-white">
            <thead className="bg-[#2f363d]">
            <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-orange-400 uppercase tracking-wider">Аккумуляторы</th>
                <th scope="col" className="px-6 py-3 text-center text-xs font-bold text-orange-400 uppercase tracking-wider">Цена, руб/кг</th>
            </tr>
            </thead>
            <tbody className="divide-y divide-white text-white text-sm">
            <tr><td className="px-6 py-2 text-left">автомобильные АКБ</td><td className="px-6 py-2 text-center">55-62</td></tr>
            <tr><td className="px-6 py-2 text-left">АКБ от ИБП</td><td className="px-6 py-2 text-center">50-63</td></tr>
            <tr><td className="px-6 py-2 text-left">аккумуляторы от ноутбука</td><td className="px-6 py-2 text-center">54-63</td></tr>
            <tr><td className="px-6 py-2 text-left">гелевые АКБ</td><td className="px-6 py-2 text-center">54-63</td></tr>
            <tr><td className="px-6 py-2 text-left">свинцовые АКБ</td><td className="px-6 py-2 text-center">56-62</td></tr>
            <tr><td className="px-6 py-2 text-left">слитые аккумуляторы</td><td className="px-6 py-2 text-center">50-61</td></tr>
            <tr><td className="px-6 py-2 text-left">тяговые аккумуляторы</td><td className="px-6 py-2 text-center">50-62</td></tr>
            <tr><td className="px-6 py-2 text-left">щелочные аккумуляторы</td><td className="px-6 py-2 text-center">39-58</td></tr>
            <tr><td className="px-6 py-2 text-left">эбонитовые АКБ</td><td className="px-6 py-2 text-center">43-77</td></tr>
            <tr><td className="px-6 py-2 text-left">самовывоз по Крыму</td><td className="px-6 py-2 text-center">договорная</td></tr>
            </tbody>
        </table>
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold text-[#d3d0ce] my-10 text-center uppercase">Бытовой лом</h3>
        <div className="overflow-x-auto mb-12">
        <table className="min-w-full divide-y divide-white border-t border-b border-white">
            <thead className="bg-[#2f363d]">
            <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-orange-400 uppercase tracking-wider">Бытовой лом</th>
                <th scope="col" className="px-6 py-3 text-center text-xs font-bold text-orange-400 uppercase tracking-wider">Цена, руб/кг</th>
            </tr>
            </thead>
            <tbody className="divide-y divide-white text-white text-sm">
            <tr><td className="px-6 py-2 text-left">ванна</td><td className="px-6 py-2 text-center">14-27</td></tr>
            <tr><td className="px-6 py-2 text-left">батарея</td><td className="px-6 py-2 text-center">14-27</td></tr>
            <tr><td className="px-6 py-2 text-left">радиодетали</td><td className="px-6 py-2 text-center">договорная</td></tr>
            <tr><td className="px-6 py-2 text-left">самовывоз по Крыму</td><td className="px-6 py-2 text-center">договорная</td></tr>
            </tbody>
        </table>
        </div>

        <div className="text-right">
        <a href="/ceny/" className="text-orange-400 hover:underline font-semibold">
            подробный прайс →
        </a>
        </div>

    </div>
    </section>

  );
};

export default PriceTableSection;
