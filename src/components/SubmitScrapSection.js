import React from 'react';

const SubmitScrapSection = () => (
  <section
    className="bg-cover bg-no-repeat"
    style={{ backgroundImage: 'url(	https://metall-priem-simferopol.ru/wp-content/themes/Metall-theme/assets/img/cat-2.webp)' }}
  >
    <div className="max-w-[1140px] mx-auto px-4 pb-12 pt-28">
      <h2 className="text-2xl sm:text-3xl text-center text-black mb-6 uppercase font-medium">
        Сдать лом в прием металла в 2025 году
      </h2>
      <p className="text-gray-800 text-sm sm:text-base text-left max-w-3xl mx-auto mb-12">
        <strong>Сдать лом в металл прием</strong>, чтобы получить дополнительный финансовый прирост — верная мысль! В 2025 году цена на металлолом в Симферополе регулярно меняется, но спрос на услугу приемки остается неизменным. Ведь всегда выгодно сдать груду ненужного металлического хлама и получить взамен деньги. <em>В 2025 году честно держим цены на предельно высоком уровне</em>, зарабатывая на объеме, а не на разнице.
      </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
                {
                href: "/cvetnoy-lom/med/",
                src: "https://metall-priem-simferopol.ru/wp-content/themes/Metall-theme/assets/img/med.webp",
                alt: "Медь",
                title: "Медь",
                desc: "Скупка медного лома по высоким ценам. Прием меди и медных изделий: кабель, провод, контакты, луженка.",
                },
                {
                href: "/cvetnoy-lom/latun/",
                src: "	https://metall-priem-simferopol.ru/wp-content/themes/Metall-theme/assets/img/latun.webp",
                alt: "Латунь",
                title: "Латунь",
                desc: "Дорого покупаем латунь и латунные изделия различных сплавов, запорную арматуру, трубы, стружку и так далее.",
                },
                {
                href: "/cvetnoy-lom/alyuminiy/",
                src: "https://metall-priem-simferopol.ru/wp-content/themes/Metall-theme/assets/img/alum.webp",
                alt: "Алюминий",
                title: "Алюминий",
                desc: "Привозите алюминий в наш пункт приема металлолома. Купим алюминиевый лом: кабель, профиль, микс, банки и др.",
                },
                {
                href: "/chernyy-lom/zhelezo/",
                src: "	https://metall-priem-simferopol.ru/wp-content/themes/Metall-theme/assets/img/chern-1.webp",
                alt: "Железо",
                title: "Железо",
                desc: "Звоните и сдавайте железный лом, любой металлический мусор из гаража или дачи, производственные обрезки.",
                },
            ].map(({ href, src, alt, title, desc }) => (
                <div key={title} className="rounded shadow overflow-hidden relative group">
                    <a href={href} className="block">
                        <div className="relative">
                        <img
                            src={src}
                            alt={alt}
                            className="w-full h-48 object-cover transition duration-300 group-hover:opacity-90 cursor-pointer"
                            onMouseEnter={e => {
                            const overlay = e.currentTarget.nextElementSibling;
                            overlay.style.backgroundColor = 'rgba(255, 111, 0, 0.6)';
                            overlay.style.color = 'white';
                            }}
                            onMouseLeave={e => {
                            const overlay = e.currentTarget.nextElementSibling;
                            overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
                            overlay.style.color = '#ff6f00';
                            }}
                        />
                        <div
                            className="absolute bottom-0 left-0 w-full py-2 text-[#ff6f00] text-sm font-normal uppercase transition-all duration-300 cursor-pointer"
                            style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', zIndex: 10 }}
                            onMouseEnter={e => {
                            e.currentTarget.style.backgroundColor = 'rgba(255, 111, 0, 0.6)';
                            e.currentTarget.style.color = 'white';
                            }}
                            onMouseLeave={e => {
                            e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
                            e.currentTarget.style.color = '#ff6f00';
                            }}
                        >
                            {title}
                        </div>
                        </div>
                    </a>
                    <p className="text-sm p-4 text-gray-800">{desc}</p>
                </div>
            ))}
        </div>

    </div>
  </section>
);

export default SubmitScrapSection;
