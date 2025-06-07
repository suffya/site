import React from 'react';

export default function PromoSection() {
  return (
    <section className="relative w-full text-white">
      {/* Фоновое изображение */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-right-top z-0"
        style={{
          backgroundImage:
            "url('https://metall-priem-simferopol.ru/wp-content/themes/Metall-theme/assets/img/metal-carapiny-staryj-1.webp')",
        }}
      />
      
      {/* Затемнение для контраста текста */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />

      {/* Контент */}
      <div className="relative z-20 min-h-[552px] flex items-start">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2">
          <div className="p-6 sm:p-10 md:p-12 text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-[#d3d0ce] leading-tight">
              ПРИЕМ МЕТАЛЛОЛОМА <br className="hidden sm:inline" /> СИМФЕРОПОЛЬ
            </h2>

            <p className="mb-4 font-semibold text-gray-200">
              Прием металлолома в Симферополе в пункте скупке "В-Лом" дорого, по рекордным ценам Республики Крым. Нужно сдать лом на выгодных условиях...
            </p>

            <ul className="list-disc pl-5 text-gray-300 space-y-1 mb-4">
              <li><strong>прием металлолома дорого;</strong></li>
              <li>взвешиваем на электронных весах;</li>
              <li>подъем цены за 1 кг от увеличения общего количества лома;</li>
              <li>взаимодействуем с физическими и юридическими лицами;</li>
              <li>предоставляем услуги газорезки, демонтажа и вывоза.</li>
            </ul>

            <p className="text-gray-300 mb-4">
              Скупаем <a href="/cvetnoy-lom/" className="text-orange-400 hover:underline">цветной лом</a>,{" "}
              <a href="/chernyy-lom/" className="text-orange-400 hover:underline">черный</a>, ...
            </p>

            <p className="text-gray-300">
              Актуальные цены — в{" "}
              <a href="/ceny/" className="text-orange-400 hover:underline">Прайс-таблице</a>, адрес — в{" "}
              <a href="/kontakty/" className="text-orange-400 hover:underline">Контактах</a>, звоните{" "}
              <a href="tel:+79781606136" className="text-orange-400 hover:underline">+7 (978) 160-61-36</a>.
            </p>
          </div>

          <div className="hidden md:block" />
        </div>
      </div>
    </section>
  );
}
