import React from 'react';

// Компонент хлебных крошек
const Breadcrumbs = () => {
  return (
    <nav className="mb-6">
      <ul className="flex items-center space-x-1 text-gray-300">
        <li>
          <a href="/" className="hover:text-white transition-colors">
            Главная •
          </a>
        </li>
        <li>
          <span className="text-gray-400">&nbsp;Контакты</span>
        </li>
      </ul>
    </nav>
  );
};

// Компонент карточки пункта приема
const ContactPoint = ({ title, address, workingHours }) => {
  return (
    <div className="border-b border-gray-600 pb-4 mb-4">
      <div className="mb-2">
        <strong className="text-white">★ {title}</strong>
      </div>
      <div className="text-gray-300 text-sm leading-relaxed">
        <div className="mb-1">
          <span className="font-medium">АДРЕС:</span> {address}
        </div>
        <div>
          <span className="font-medium">Режим работы:</span> {workingHours}
        </div>
      </div>
    </div>
  );
};

// Компонент контактной информации
const ContactInfo = () => {
  const contactPoints = [
    {
      title: "ПУНКТ ПРИЕМА",
      address: "295051, Россия, республика Крым, Симферополь, ул. Трансформаторная, 3Б",
      workingHours: "Круглосуточно, без выходных"
    },
    {
      title: "ПУНКТ ПРИЕМА", 
      address: "295001, Россия, республика Крым, Симферополь, ул. Коммунальная, 29А",
      workingHours: "Круглосуточно, без выходных"
    }
  ];

  return (
    <div className="bg-gray-800 bg-opacity-80 rounded-lg">
      {/* Заголовок таблицы контактов */}
      <div className="border-b border-gray-600 pb-3 mb-6">
        <h2 className="text-white font-bold text-lg">КОНТАКТЫ «В-ЛОМ»</h2>
      </div>

      {/* Пункты приема */}
      {contactPoints.map((point, index) => (
        <ContactPoint
          key={index}
          title={point.title}
          address={point.address}
          workingHours={point.workingHours}
        />
      ))}

      {/* Телефон */}
      <div className="pt-2">
        <div className="text-white font-bold mb-1">ТЕЛЕФОН:</div>
        <a 
          href="tel:+79781606136" 
          className="text-orange-400 hover:text-orange-300 transition-colors text-lg font-medium"
        >
          +7 (978) 234-94-01
        </a>
      </div>
    </div>
  );
};

// Компонент карты
const MapSection = () => {
  return (
    <div className="flex justify-center lg:justify-end">
      <div className="w-full max-w-2xl">
        <iframe
          className="w-full h-96 lg:h-[430px] rounded-lg shadow-lg bg-white animate-pulse"
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A6f141f09d049d7f89a230613d141a89afc9ed73190a0bf4ae64cc42b80518c3a&source=constructor"
          width="100%"
          height="430"
          frameBorder="0"
          title="Карта расположения пунктов приема"
        />
        
        {/* Ссылка на открытие в Яндекс.Картах */}
        <div className="mt-3 text-center">
          <a 
            href="https://yandex.ru/maps" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-red-500 hover:text-red-400 transition-colors text-sm"
          >
            <span className="mr-1">📍</span>
            Открыть в Яндекс.Картах
          </a>
        </div>
      </div>
    </div>
  );
};

// Компонент информационного блока
const InfoSection = () => {
  return (
    <div className="p-6 lg:p-8 mt-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl lg:text-2xl font-bold text-white mb-6 text-center leading-tight">
          КУДА СДАТЬ МЕТАЛЛОЛОМ В СИМФЕРОПОЛЕ: АДРЕС, НОМЕР ТЕЛЕФОНА
        </h2>
        
        <div className="prose prose-lg max-w-none text-white leading-relaxed">
          <p>
            <strong>
              Куда сдать металлолом в Симферополе,{" "}
              <a href="/alushta/" className="text-blue-600 hover:text-blue-800 underline">
                Алуште
              </a>{" "}
              и{" "}
              <a href="/sevastopol/" className="text-blue-600 hover:text-blue-800 underline">
                Севастополе
              </a>{" "}
              дорого?
            </strong>{" "}
            Привезти{" "}
            <a href="/chernyy-lom/" className="text-blue-600 hover:text-blue-800 underline">
              лом черных
            </a>{" "}
            и{" "}
            <a href="/cvetnoy-lom/" className="text-blue-600 hover:text-blue-800 underline">
              цветных металлов
            </a>
            , автолом и бытовой металлолом можно в компанию{" "}
            <a href="/" className="text-blue-600 hover:text-blue-800 underline font-semibold">
              "В-Лом"
            </a>
            ! Наша организация по высоким закупочным ценам принимает от населения, 
            юридических лиц и предприятий все разновидности и категории лома в любых объемах. 
            Доставить металлолом в нашу точку приема можно самостоятельно или оформив самовывоз 
            при наличии его на участке от 100 кг. Выполняем услугу вывоза на спецтранспорте с 
            вашего адреса и прием металлического вторсырья в короткие сроки, аккуратно и выгодно!{" "}
            <em className="text-[#e5e7eb]">
              Остались вопросы по{" "}
              <a href="/ceny/" className="text-blue-600 hover:text-blue-800 underline">
                цене
              </a>{" "}
              и условиям приемки?
            </em>{" "}
            Позвоните оператору по телефону:{" "}
            <a 
              href="tel:+79781606136" 
              className="text-orange-600 hover:text-orange-700 font-semibold"
            >
              +7 (978) 234-94-01
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

// Основной компонент страницы контактов
const ContactsPage = () => {
  return (
    <div className="min-h-screen bg-gray-800">
      <div className="container max-w-[1140px] mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Левая колонка - контактная информация */}
          <div className="lg:col-span-5 text-left">
            <Breadcrumbs />
            
            {/* Главный заголовок */}
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-8 tracking-wider">
              КОНТАКТЫ
            </h1>
            
            <ContactInfo />
          </div>

          {/* Правая колонка - карта */}
          <div className="lg:col-span-7">
            <MapSection />
          </div>
          
        </div>
        
        {/* Информационный блок */}
        <InfoSection />
      </div>
    </div>
  );
};

export default ContactsPage;