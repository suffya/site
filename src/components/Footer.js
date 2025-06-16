import React from 'react';

export default function Footer() {
  return (
    <footer className="h-auto bg-cover bg-no-repeat text-white py-12" style={{ backgroundImage: 'url(https://metall-priem-simferopol.ru/wp-content/themes/Metall-theme/assets/img/footer_2.webp)' }}>
      <div className="max-w-[1140px] mx-auto px-4">
        <div className="text-center text-sm mb-6 font-light uppercase">
          *Все детали и окончательные условия сделки уточняются по телефону
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <div className='text-left text-[#b8b3b1]'>
            <a href="tel:+79781606136" className="text-orange-400 font-semibold block mb-2">+7 (978) 234-94-01</a>
            <p className="mb-2">★ Пункт приема<br />95001, Россия, республика Крым, Симферополь, ул. Трансформаторная, 3Б<br />Режим работы: Круглосуточно, без выходных</p>
            <p className="mb-2">★ Пункт приема<br />ул. Коммунальная, 29А<br />Режим работы: Круглосуточно, без выходных</p>
            <a href="mailto:osman-usmanov@internet.ru" className="text-orange-400 text-2xl hover:text-white duration-300">osman-usmanov@internet.ru</a>
            <p className="mt-2"><a href="https://priem-metall-simferopol.ru/" target="_blank" rel="noopener noreferrer" className="text-orange-400 text-2xl hover:text-white transition">«Ломовозкин»</a></p>
            <p className="text-sm">Наш партнер</p>
            <a href="/" className="border-b border-dotted mt-2 inline-block open-popup text-orange-400 text-2xl hover:text-white transition cursor-pointer">Симферополь</a>
          </div>

          <div>
            <ul className="space-y-1 text-left text-[#d3d0ce]">
              <li><a href='\' className="text-orange-300 font-semibold hover:text-white duration-300 cursor-pointer uppercase">Главная</a></li>
              <li><a href="/ceny/" className='hover:text-white duration-300'>Цены</a></li>
              <li><a href="/vyvoz-metalloloma/" className='hover:text-white duration-300'>Самовывоз</a></li>
              <li><a href="/blog/" className='hover:text-white duration-300'>Блог</a></li>
              <li><a href="/kontakty/" className='hover:text-white duration-300'>Контакты</a></li>
            </ul>
          </div>

          <div>
            <ul className="space-y-1 text-left text-[#d3d0ce]">
              <li><a href="/cvetnoy-lom/" className='hover:text-white duration-300 uppercase'>Цветмет ↓</a></li>
              <li><a href="/cvetnoy-lom/med/" className='hover:text-white duration-300'>Медь</a></li>
              <li><a href="/cvetnoy-lom/alyuminiy/" className='hover:text-white duration-300'>Алюминий</a></li>
              <li><a href="/cvetnoy-lom/latun/" className='hover:text-white duration-300'>Латунь</a></li>
              <li><a href="/cvetnoy-lom/svinec/" className='hover:text-white duration-300'>Свинец</a></li>
              <li><a href="/cvetnoy-lom/bronza/" className='hover:text-white duration-300'>Бронза</a></li>
              <li><a href="/akkumulyator-akb/" className='hover:text-white duration-300'>Аккумуляторы</a></li>
            </ul>
          </div>

          <div>
            <ul className="space-y-1 text-left text-[#d3d0ce]">
              <li><a href="/chernyy-lom/" className='hover:text-white duration-300 uppercase'>Чермет ↓</a></li>
              <li><a href="/chernyy-lom/zhelezo/" className='hover:text-white duration-300'>Железо</a></li>
              <li><a href="/chernyy-lom/nerzhaveyka/" className='hover:text-white duration-300'>Нержавейка</a></li>
              <li><a href="/chernyy-lom/stal/" className='hover:text-white duration-300'>Сталь</a></li>
              <li><a href="/chernyy-lom/stal-3a/" className='hover:text-white duration-300'>Сталь 3А</a></li>
              <li><a href="/chernyy-lom/chugun/" className='hover:text-white duration-300'>Чугун</a></li>
              <li><a href="/avtolom/" className='hover:text-white duration-300'>Автолом</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-y-4 items-center border-t border-gray-700 pt-4">
          <iframe
            src="https://yandex.ru/sprav/widget/rating-badge/236827132868?type=rating&theme=dark"
            width="150"
            height="50"
            frameBorder="0"
            className="mb-0 sm:mb-0"
            title="Рейтинг компании на Яндексе"
          ></iframe>

          <img
            src="https://metall-priem-simferopol.ru/wp-content/themes/Metall-theme/assets/img/grape-logo-footer.webp"
            alt="Логотип В-Лом"
            className="w-[160px] h-auto"
          />
        </div>

        <div className="mt-4 text-[10px] text-left text-gray-300">
          <p>© «В-Лом» - Прием металлолома, 2022-2025
Материалы сайта являются объектами авторского права. Запрещается копирование, распространение, любое использование информации и объектов без предварительного согласия правообладателя. ЗАЩИЩЕНО ЗАКОНОМ РОССИЙСКОЙ ФЕДЕРАЦИИ ОТ 09.07.93Г. №5351-1 “ОБ АВТОРСКОМ ПРАВЕ И СМЕЖНЫХ ПРАВАХ” (с изменениями от 19 июля 1995 г., 20 июля 2004 г.).
*Данный сайт носит исключительно информационный характер и ни при каких условиях информационные материалы и цены, размещенные на сайте, не являются публичной офертой, определяемой положениями Статьи 437 ГК РФ..</p>
        </div>
      </div>
    </footer>
  );
}
