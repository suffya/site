import React from 'react';
import { Link } from 'react-router-dom';

export default function ColoredScrapPage() {
  const categories = [
    {
      title: 'МЕДЬ',
      link: '/cvetnoy-lom/med',
      image: '	https://metall-priem-simferopol.ru/wp-content/themes/Metall-theme/assets/img/med.webp',
      alt: 'Медь фото',
    },
    {
      title: 'ЛАТУНЬ',
      link: '/cvetnoy-lom/latun',
      image: '	https://metall-priem-simferopol.ru/wp-content/themes/Metall-theme/assets/img/latun.webp',
      alt: 'Латунь фото',
    },
    {
      title: 'АЛЮМИНИЙ',
      link: '/cvetnoy-lom/alyuminiy',
      image: 'https://metall-priem-simferopol.ru/wp-content/themes/Metall-theme/assets/img/alum.webp',
      alt: 'Алюминий фото',
    },
    {
      title: 'СВИНЕЦ',
      link: '/cvetnoy-lom/svinec',
      image: 'https://metall-priem-simferopol.ru/wp-content/themes/Metall-theme/assets/img/svinec.webp',
      alt: 'Свинец фото',
    },
    {
      title: 'БРОНЗА',
      link: '/cvetnoy-lom/bronza',
      image: 'https://metall-priem-simferopol.ru/wp-content/themes/Metall-theme/assets/img/bronza.webp',
      alt: 'Бронза фото',
    },
    {
      title: 'АКБ',
      link: '/akkumulyator-akb',
      image: 'https://metall-priem-simferopol.ru/wp-content/themes/Metall-theme/assets/slides/akb-1.webp',
      alt: 'АКБ фото',
    },
  ];

  return (
    <div className="text-white">
      {/* Хлебные крошки + заголовок */}
      <div
        className="bg-cover bg-center py-20"
        style={{ backgroundImage: 'url(https://metall-priem-simferopol.ru/wp-content/themes/Metall-theme/assets/banner/cvetmet.webp)' }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <ul className="text-sm mb-4 flex space-x-2">
            <li>
              <Link to="/" className="text-white hover:underline">
                Главная
              </Link>
              <span className="text-white"> •</span>
            </li>
            <li>
              <span className="text-white">&nbsp;Прием цветного металла</span>
            </li>
          </ul>
          <h1 className="text-3xl font-medium py-5 uppercase text-left">Прием цветного металла</h1>
        </div>
      </div>


      {/* Сетка с категориями */}
      <section
        className="bg-cover bg-center py-12"
        style={{ backgroundImage: 'url(	https://metall-priem-simferopol.ru/wp-content/themes/Metall-theme/assets/img/cat-1.webp)' }}
      >
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(({ title, link, image, alt }) => (
            <Link
            key={title}
            to={link}
            className="relative group block overflow-hidden"
            >
            <img
                src={image}
                alt={alt}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 w-full text-center py-2 bg-black/60 text-orange-500 font-semibold transition-all duration-300 group-hover:bg-orange-500/60 group-hover:text-white">
                {title}
            </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="bg-white text-black py-12 px-4 max-w-5xl mx-auto">
            <div className="space-y-6 text-left">
                <p>
                <strong>Прием лома цветного металла в Симферополе по конкурентным ценам</strong> выполняет от жителей, организаций и предприятий скупка-приемка{" "}
                <a href="/" className="text-orange-500 hover:underline">"В-Лом"</a>. В пункт приема в любом количестве можно сдать металлолом цветных металлов и сплавов (латунь, бронза) разных типов и категорий. Лом цветных металлов после переработки остается востребованным сырьем в промышленности благодаря своим характеристикам, которые более ценные, чем металлолом{" "}
                <a href="/chernyy-lom/" className="text-orange-500 hover:underline">черных металлов</a>.{" "}
                <strong>В пункте приема "В-Лом" можно в рабочее время дорого сдать такие разновидности цветного лома</strong>:
                </p>

                <ul className="list-disc list-inside space-y-1">
                <li>медный (куски, блеск, провода, детали техники, стружка, обломки и отходы продукции);</li>
                <li>латунный (куски, стружка, радиаторы, изделия, детали и их части);</li>
                <li>алюминиевый (профильный, стружка, электротехнический и бытовой);</li>
                <li>бронзовый (оловянные/двухкомпонентные и безоловянные/многокомпонентные цельные изделия, отходы, куски, микс);</li>
                <li>свинцовый (аккумуляторы, переплав);</li>
                <li>лом редкоземельных металлов (скандий, иттрий и др.).</li>
                </ul>

                <p>
                Если на вашей территории скопилось много металлолома, то можно заказать у компании его самовывоз. Выездная бригада самостоятельно оценит, погрузит на специальный транспорт и перевезет цветные металлы и их лом в наш пункт приема. Подать заявку на вывоз можно оператору по указанному на сайте телефону. По предварительной договоренности специалисты проводят и демонтаж металлоконструкций.{" "}
                <strong>Цену скупки цветмета можно посмотреть в <a href="/ceny/" className="text-orange-500 hover:underline">разделе с прайсом</a>, стоимость указывается за 1 кг</strong>. Окончательные условия приема цветного, черного, бытового металлолома легко узнать у оператора по телефону:{" "}
                <a href="tel:+79781606136" className="text-orange-500 hover:underline">+7 (978) 234-94-01</a>.
                </p>

                <h2 className="text-2xl sm:text-2xl font-medium uppercase text-center mt-8">Прием лома цветного металла по высокой цене в Симферополе</h2>

                <p>
                Скупка "В-Лом" напрямую сотрудничает с заводами по переработке металлического вторсырья, поэтому постоянные клиенты и оптовики могут сдать цветной металл по высоким ценам. Прием металлолома разных видов и категорий проводится от частных и юридических лиц. Если с компанией заключается договор о сотрудничестве, то для клиента действуют льготы:{" "}
                <strong>оптовые расценки на прием и бесплатный вывоз цветмета с места дислокации металлолома</strong>.
                </p>

                <p>
                В <a href="/kontakty/" className="text-orange-500 hover:underline">точке приемки</a> экспертом выполняется оценивание сдаваемого металла и лома. На окончательную цену приема влияет:
                </p>

                <ul className="list-disc list-inside space-y-1">
                <li>вес цветного лома;</li>
                <li>его размеры;</li>
                <li>засоры, включения из чермета и неметаллических элементов;</li>
                <li>необходимость демонтажа металлоконструкций и готовность лома к загрузке при выезде бригады по заявке.</li>
                </ul>

                <p>
                После оценки и взвешивания цветного металлолома сотрудник рассчитывается с клиентом переводом на счет. За подробной информацией и консультацией{" "}
                <em>звоните в компанию по указанному телефону и зарабатывайте живые деньги, сдавая лом цветных металлов</em>.
                </p>
            </div>
        </section>

    </div>
  );
}
