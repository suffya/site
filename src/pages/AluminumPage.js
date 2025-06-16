import React from "react";
import { Link } from "react-router-dom";

export default function AluminumPage() {
  return (
    <div className="text-white">
      {/* Заголовок с фоном */}
      <section
        className="bg-cover bg-center py-20"
        style={{
          backgroundImage:
            "url('	https://metall-priem-simferopol.ru/wp-content/themes/Metall-theme/assets/banner/aluminiy.webp')",
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
              <Link className="text-white hover:underline" to="/cvetnoy-lom">
                &nbsp;Цветной лом
              </Link>
              <span className="text-white"> •</span>
            </li>
            <li>
              <span className="text-white">&nbsp;Прием меди</span>
            </li>
          </ul>
          <h1 className="text-3xl font-medium uppercase text-left">Прием Алюминия</h1>
        </div>
      </section>

        <section className="bg-[#1f2937] text-white py-12">
            <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-8">
                {/* Sidebar */}
              <div className="bg-[#1f2937] p-4 text-center text-[#d3d0ce]">
                <h3 className="text-orange-500 font-bold mb-4">ЦВЕТНОЙ ЛОМ</h3>
                <ul className="divide-y divide-white/80">
                  <li>
                    <Link to="/cvetnoy-lom/med" className="block py-2 text-orange-500 underline">медь</Link>
                  </li>
                  <li>
                     <Link to="/cvetnoy-lom/alyuminiy" className="block py-2 text-orange-500 font-bold hover:underline">алюминий</Link>
                  </li>
                  <li>
                    <Link to="/cvetnoy-lom/alyuminiy" className="block py-2 text-orange-500 hover:underline">латунь</Link>
                  </li>
                  <li>
                    <Link to="/cvetnoy-lom/alyuminiy" className="block py-2 text-orange-500 hover:underline">свинец</Link>
                  </li>
                  <li>
                    <Link to="/cvetnoy-lom/alyuminiy" className="block py-2 text-orange-500 hover:underline">бронза</Link>
                  </li>
                  <li>
                    <Link to="/cvetnoy-lom/alyuminiy" className="block py-2 text-orange-500 hover:underline">аккумуляторы</Link>
                  </li>
                </ul>
              </div>

                {/* Main Table */}
                <div className="w-full lg:w-3/4">
                <p className="text-center italic mb-6 ">Цены на алюминий постоянно меняются, уточняйте по телефону!</p>
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

                <div className="text-sm text-white space-y-4 pt-20">
                    <p><strong>Прием алюминия у населения, организаций, предприятий Симферополя по высоким ценам проводит компания<Link to="/" className="text-orange-500 underline">"В-Лом"</Link></strong> Цветной металл не подвергается коррозии, отличается пластичностью,
                     легкостью, морозоустойчивостью, хорошо плавится. Эти характеристики делают алюминий и его лом популярным, металлическое вторсырье охотно покупают перерабатывающие заводы. Промышленность разных отраслей применяет алюминий и его сплавы после переплавки
                      в производстве большого ассортимента товаров, тем самым снижая себестоимость продукции. <Link to="/" className="text-orange-500 underline">"Узнать цену"</Link><strong>приемки 1 кг алюминия и лома можно из прайса на сайте или у оператора по телефону:</strong>
                     <Link to="/" className="text-orange-500 underline">"+7 (978) 234-94-01."</Link>
                     </p>
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
                      <img src="https://metall-priem-simferopol.ru/wp-content/themes/Metall-theme/assets/slides/aluminiy-1.webp" alt="Медь" className="w-full h-auto object-cover" />
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
            <h2 className="text-center text-xl sm:text-3xl font-medium mb-6 uppercase text-black">
              Прием лома меди в Симферополе по высокой цене
            </h2>
            <div className="space-y-4 text-gray-800 text-sm sm:text-base leading-relaxed">
              <p>
                Скупка В-Лом работает каждый день, и можно самостоятельно привезти скопившееся металлическое вторсырье в пункт приема.
                Если нет возможности большой объем лома доставить в приемку, то у диспетчера компании можно оформить его самовывоз.
                Заявку легко подать оператору по телефону <a href="tel:+79781606136" className="text-orange-500 font-semibold hover:underline">+7 (978) 234-94-01</a>.
                При согласовании нюансов вывоза металлолома с точки дислокации важно обсудить и демонтаж металлоконструкций, который выполняется сотрудниками компании при необходимости.
              </p>

              <p>
                "В-Лом" сотрудничает с металл перерабатывающими заводами без посредников, поэтому для оптовиков и постоянных поставщиков
                <strong> устанавливает высокие цены на скупку медного лома</strong>. Физические и юридические лица в пункт приема могут сдать дорого:
              </p>

              <ul className="list-disc list-inside space-y-1">
                <li>блеск (без изоляции провода, кабели);</li>
                <li>кусковую медь (листы, трубы, детали техники, цельные отходы продукции, элементы механизмов);</li>
                <li>микс (блеск и кусковую медь с засором или с примесями металлов).</li>
              </ul>

              <p>
                На приемке металлолома эксперт "В-Лом" определяет категорию медного лома, взвешивает его и оплачивает на банковскую карту.
                На стоимость приема меди влияет количество сдаваемого металлолома и сезонность – зимой цена выше.
                За подробной информацией и консультацией как <strong>дорого сдать медь и другой</strong>{' '}
                <Link to="/cvetnoy-lom/" className="text-orange-500 hover:underline">цветной металлолом</Link> звоните в компанию по указанному телефону или приезжайте в{' '}
                <Link to="/kontakty/" className="text-orange-500 hover:underline">пункт приема</Link>.
              </p>
            </div>
          </div>
        </section>

    </div>
  );
}
