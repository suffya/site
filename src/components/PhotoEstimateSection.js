import React from 'react';

export default function PhotoEstimateSection() {
  return (
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
  );
}
