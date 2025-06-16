import useWindowSize from '../hooks/useWindowSize'; // путь к хуку
import React, { useState, useRef, useEffect} from 'react'; // Для useState
import { ChevronDown, Menu, X } from 'lucide-react'; // Для иконок

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isKrymOpen, setIsKrymOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const dropdownHideTimeout = useRef(null);
  const { width } = useWindowSize();
  
  // Enhanced breakpoints
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 992;
  const isSmallDesktop = width >= 992 && width < 1200;
  const isLargeDesktop = width >= 1200;
  const isExtraLarge = width >= 1476;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const togglePopup = (e) => {
    e.preventDefault();
    setIsPopupOpen(!isPopupOpen);
  };

  const toggleDropdown = (index, e) => {
    e.preventDefault();
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const toggleKrymList = () => {
    setIsKrymOpen((prev) => !prev);
  };

  const menuItems = [
    {
      title: 'Цветной металл',
      link: '/cvetnoy-lom/',
      subItems: [
        { title: 'Медь', link: '/cvetnoy-lom/med/' },
        { title: 'Алюминий', link: '/cvetnoy-lom/alyuminiy/' },
        { title: 'Латунь', link: '/cvetnoy-lom/latun/' },
        { title: 'Свинец', link: '/cvetnoy-lom/svinec/' },
        { title: 'Бронза', link: '/cvetnoy-lom/bronza/' },
        { title: 'Аккумуляторы', link: '/akkumulyator-akb/' },
      ],
    },
    {
      title: 'Черный металл',
      link: '/chernyy-lom/',
      subItems: [
        { title: 'Железо', link: '/chernyy-lom/zhelezo/' },
        { title: 'Чугун', link: '/chernyy-lom/chugun/' },
        { title: 'Сталь', link: '/chernyy-lom/stal/' },
        { title: 'Сталь 3А', link: '/chernyy-lom/stal-3a/' },
        { title: 'Нержавейка', link: '/chernyy-lom/nerzhaveyka/' },
      ],
    },
    {
      title: 'Бытовой лом',
      link: '/bytovoy-lom/',
      subItems: [
        { title: 'Ванна', link: '/bytovoy-lom/vanna/' },
        { title: 'Батарея', link: '/bytovoy-lom/batareya/' },
        { title: 'Радиодетали', link: '/bytovoy-lom/radiodetali/' },
      ],
    },
    {
      title: 'Автолом',
      link: '/avtolom/',
      subItems: [
        { title: 'Катализаторы', link: '/skupka-katalizatorov/' },
      ],
    },
    {
      title: 'Цены',
      link: '/ceny/',
      icon: 'https://metall-priem-simferopol.ru/wp-content/themes/Metall-theme/assets/img/cenyIcon.webp',
      animate: true,
      extraClasses: 'text-gray-300',
    },
    {
      title: 'Вывоз',
      link: '/vyvoz-metalloloma/',
    },
    {
      title: 'Контакты',
      link: '/kontakty/',
    },
  ];

  const krymCities = [
    { name: 'Севастополь', link: '/sevastopol/' },
    { name: 'Феодосия', link: '/feodosiya/' },
    { name: 'Евпатория', link: '#' },
    { name: 'Ялта', link: '/yalta/' },
    { name: 'Бахчисарай', link: '/bakhchisaray/' },
    { name: 'Керчь', link: '#' },
    { name: 'Саки', link: '/saki/' },
    { name: 'Алушта', link: '#' },
    { name: 'Красноперекопск', link: '#' },
    { name: 'Джанкой', link: '#' },
    { name: 'Гвардейское', link: '/gvardeyskoye/' },
    { name: 'Черноморское', link: '#' },
    { name: 'Инкерман', link: '#' },
    { name: 'Белогорск', link: '/belogorsk/' },
    { name: 'Судак', link: '#' },
    { name: 'Алупка', link: '#' },
    { name: 'Армянск', link: '#' },
  ];

  useEffect(() => {
    return () => {
      clearTimeout(dropdownHideTimeout.current);
    };
  }, []);

  // For demo purposes - display current viewport width
  const getViewportStatus = () => {
    if (isMobile) return "Mobile (< 768px)";
    if (isTablet) return "Tablet (768px - 991px)";
    if (isSmallDesktop) return "Small Desktop (992px - 1199px)";
    if (isExtraLarge) return "Extra Large Desktop (≥ 1476px)";
    return "Large Desktop (1200px - 1475px)";
  };

  return (
    <div>
      <div className="bg-gray-700 text-white p-2 text-center text-sm">
        Current view: {getViewportStatus()} - {width}px
      </div>
      
      <nav className="bg-gray-800 sticky top-0 z-50" style={{height: isMobile ? 'auto' : '64px'}}>
        <div className="container mx-auto px-4">
          <div className={`flex items-center justify-between ${isMobile ? 'h-16' : 'h-16'}`}>
            {/* Logo Section */}
            <div className="flex items-center">
              {/* Logo with ВЛОМ text */}
              <div className={`${isMobile ? 'hidden' : 'absolute'}`}>
                <img 
                  src="https://metall-priem-simferopol.ru/wp-content/themes/Metall-theme/assets/img/grape-logo-orange-name-4.png" 
                  alt="Влом" 
                  className="h-16 w-auto" 
                />
              </div>
              
              {/* Mobile only - small logo */}
              {isMobile && (
                <a href="/" className="flex items-center">
                  <img 
                    src="https://metall-priem-simferopol.ru/wp-content/themes/Metall-theme/assets/img/grape-logo-orange.png" 
                    alt="Лого" 
                    className="h-12 w-auto" 
                  />
                  <span className="text-orange-500 font-bold ml-2 hidden">В-ЛОМ</span>
                </a>
              )}
              
              {/* Non-mobile logo */}
              {!isMobile && (
                <a href="/" className="pt-4 ml-8">
                  <img 
                    src="https://metall-priem-simferopol.ru/wp-content/themes/Metall-theme/assets/img/grape-logo-orange.png" 
                    alt="Прием металла лого" 
                    className="h-24 w-auto" 
                  />
                </a>
              )}
            </div>

            {/* Krym trigger - Only on non-mobile or when menu is closed on mobile */}
            {!isMobile && (
              <div className="ml-6"> 
                {!isKrymOpen && (
                  <div onClick={toggleKrymList} className="cursor-pointer">
                    <div className="text-orange-500 text-sm font-bold ">Крым</div>
                    <div className="border-b-2 border-dotted border-orange-500 w-full mt-1"></div>
                  </div>
                )}
              </div>
            )}

            {/* Krym Cities Modal */}
            {isKrymOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
                <div className="bg-gray-800 rounded-xl p-6 w-[90%] max-w-md max-h-[80vh] overflow-y-auto relative text-white font-sans">
                  <button
                    onClick={toggleKrymList}
                    className="absolute top-3 right-3 text-gray-400 hover:text-white"
                  >
                    <X size={20} />
                  </button>
                  <h2 className="text-lg font-bold text-center text-orange-400 mb-4">
                    Выберите город
                  </h2>
                  <ul className="grid grid-cols-2 gap-2 text-sm">
                    {krymCities.map((city, index) => (
                      <li key={index}>
                        <a
                          href={city.link}
                          className="block px-3 py-2 rounded text-base hover:bg-gray-700 hover:text-orange-400 transition-colors duration-150"
                        >
                          {city.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Phone and Messengers - Different layouts for different screen sizes */}
            {/* Mobile Phone and Social Icons */}
            {isMobile && (
              <div className="flex flex-col items-center justify-center">
                <a href="tel:+79782349401" className="text-orange-400 text-lg font-medium">
                  +7 (978) 234-94-01
                </a>
                <div className="flex mt-1">
                  <a 
                    href="https://wa.me/79782349401" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="mr-4"
                  >
                    <img 
                      src="https://metall-priem-simferopol.ru/wp-content/themes/Metall-theme/assets/img/Whatsapp.webp" 
                      alt="WhatsApp" 
                      className="w-8 h-8" 
                    />
                  </a>
                  <a 
                    href="https://t.me/Metal_in_Crimea" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <img 
                      src="https://metall-priem-simferopol.ru/wp-content/themes/Metall-theme/assets/img/telegram.webp" 
                      alt="Telegram" 
                      className="w-8 h-8" 
                    />
                  </a>
                </div>
              </div>
            )}

            {/* Tablet Layout - Centered phone (768px) - based on Image 2 */}
            {isTablet && (
              <div className="hidden md: md:items-center md:justify-center absolute right-0 left-0">
                <div className="flex items-center">
                  <div className="text-center">
                    <a href="tel:+79782349401" className="text-orange-400 block text-base font-medium">
                      +7 (978) 234-94-01
                    </a>
                    <span className="text-white text-xs">Прием металлолома</span>
                  </div>
                  <div className="flex ml-2">
                    <a 
                      href="https://wa.me/79782349401" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="mx-1"
                    >
                      <img 
                        src="https://metall-priem-simferopol.ru/wp-content/themes/Metall-theme/assets/img/Whatsapp.webp" 
                        alt="WhatsApp" 
                        className="w-6 h-6" 
                      />
                    </a>
                    <a 
                      href="https://t.me/Metal_in_Crimea" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="mx-1"
                    >
                      <img 
                        src="https://metall-priem-simferopol.ru/wp-content/themes/Metall-theme/assets/img/telegram.webp" 
                        alt="Telegram" 
                        className="w-6 h-6" 
                      />
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Desktop Navigation */}
            <div className={`hidden md:flex md:justify-center ${!isMobile ? 'pt-1 pb-2' : ''}`}>
              {!isMobile && (
                <ul className={`flex ${isTablet ? 'space-x-0' : isSmallDesktop ? 'space-x-1' : 'space-x-4'}`}>
                  {menuItems.map((item, index) => (
                    <li 
                      key={index} 
                      className="relative group"
                      onMouseEnter={() => {
                        clearTimeout(dropdownHideTimeout.current);
                        setHoveredIndex(index);
                      }}
                      onMouseLeave={() => {
                        dropdownHideTimeout.current = setTimeout(() => {
                          setHoveredIndex(null);
                        }, 50);
                      }}
                    >
                      <div className="relative">
                        <a
                          href={item.link}
                          className={`${isTablet ? 'px-1 py-1 text-xs' : isSmallDesktop ? 'px-1 py-1 text-xs' : 'px-3 py-1'} block text-gray-300 hover:text-white ${item.extraClasses || ''}`}
                        >
                          <span className="flex items-center">
                            {item.title}
                            {item.subItems && (
                              <ChevronDown size={isTablet ? 12 : 16} className="ml-1" />
                            )}
                            {item.icon && (
                              <img
                                src={item.icon}
                                alt="Иконка"
                                className={`${isTablet ? 'h-4' : 'h-5'} w-auto ml-1`}
                              />
                            )}
                          </span>
                        </a>
                      </div>
                      
                      {item.subItems && (
                        <div
                          onMouseEnter={() => {
                            clearTimeout(dropdownHideTimeout.current);
                            setHoveredIndex(index);
                          }}
                          onMouseLeave={() => {
                            dropdownHideTimeout.current = setTimeout(() => {
                              setHoveredIndex(null);
                            }, 200);
                          }} 
                          className={`${hoveredIndex === index ? 'block' : 'hidden'} text-left absolute left-0 mt-1 bg-gray-800 border border-gray-700 rounded z-10 min-w-40`}>
                            {item.subItems.map((subItem, subIndex) => (
                              <a
                                key={subIndex}
                                href={subItem.link}
                                className={`block ${isTablet ? 'px-2 py-1 text-xs' : 'px-4 py-2 text-sm'} text-gray-300 hover:bg-gray-700 hover:text-white whitespace-nowrap`}
                              >
                                {subItem.title}
                              </a>
                            ))}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Desktop Phone and Rating - For small/medium desktop */}
            {(isSmallDesktop || (isLargeDesktop && !isExtraLarge)) && (
              <div className="hidden md:block lg:block  mr-4">
                <div className="text-center xl-range:text-end">
                  <a href="tel:+79782349401" className="lg:text- text-orange-400 block text-lg font-medium">
                    +7 (978) 234-94-01
                  </a>
                  <span className="text-white text-sm xl-range:hidden">Прием металлолома</span>
                </div>
                {/* Desktop Rating Widget - Below Phone - Hide for tablet */}
                <div className="hidden md:block lg:block absolute mt-7">
                  <iframe 
                    title='Yandex Rating'
                    src="https://yandex.ru/sprav/widget/rating-badge/236827132868?type=rating&theme=dark" 
                    width="150" 
                    height="50" 
                    frameBorder="0"
                  />
                </div>
              </div>
            )}
            
            {/* Extra large screen layout (≥1476px) - Based on Image 4 */}
            {isExtraLarge && (
              <div className="hidden md:block lg:block mr-4">
                <div className="text-right">
                  <a href="tel:+79782349401" className="text-orange-400 block text-lg font-medium">
                    +7 (978) 234-94-01
                  </a>
                  <span className="text-white text-sm">Прием металлолома</span>
                </div>
                {/* Desktop Rating Widget - Below Phone but right aligned */}
                <div className="hidden md:block lg:block absolute mt-7">
                  <iframe 
                    title='Yandex Rating'
                    src="https://yandex.ru/sprav/widget/rating-badge/236827132868?type=rating&theme=dark" 
                    width="150" 
                    height="50" 
                    frameBorder="0"
                  />
                </div>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-300 hover:text-white focus:outline-none"
            >
              <div className="w-8 h-8 flex items-center justify-center border border-gray-600 rounded">
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </div>
            </button>
          </div>

          {/* Krym Link - Mobile Only when menu is open */}
          {isMobile && isOpen && (
            <div className="text-center py-2 border-t border-gray-700 mt-2">
              <button 
                onClick={togglePopup}
                className="text-orange-400 border-b border-dotted border-orange-400"
              >
                Вывоз по Крыму
              </button>
            </div>
          )}

          {/* Mobile Navigation */}
          {isMobile && (
            <div className={`${isOpen ? 'block' : 'hidden'}`}>
              <ul className="py-2">
                {menuItems.map((item, index) => (
                  <li key={index} className="relative border-b border-gray-700">
                    {item.subItems ? (
                      <div>
                        <button
                          onClick={(e) => toggleDropdown(index, e)}
                          className="w-full text-left flex items-center justify-between text-gray-300 py-3"
                        >
                          <span className={`${item.extraClasses || ''}`}>{item.title}</span>
                          <ChevronDown 
                            size={16} 
                            className={`transform transition-transform ${activeDropdown === index ? 'rotate-180' : ''}`} 
                          />
                        </button>
                        <div className={`bg-gray-900 text-left ${activeDropdown === index ? 'block' : 'hidden'}`}>
                          {item.subItems.map((subItem, subIndex) => (
                            <a
                              key={subIndex}
                              href={subItem.link}
                              className="block px-4 py-2 text-sm text-gray-400"
                            >
                              {subItem.title}
                            </a>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <a
                        href={item.link}
                        className={`block py-3 text-gray-300 ${item.extraClasses || ''}`}
                      >
                        <span className="flex items-center">
                          {item.title}
                          {item.icon && (
                            <img
                              src={item.icon}
                              alt="Иконка"
                              className="h-5 w-auto ml-1"
                            />
                          )}
                        </span>
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Krym Cities Popup */}
        {isPopupOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-orange-400 rounded-lg p-6 max-w-md w-full max-h-[80vh] overflow-y-auto">
              <div className="flex justify-end">
                <button onClick={togglePopup} className="text-gray-500 hover:text-gray-700">
                  <X size={24} />
                </button>
              </div>
              <ul className="grid grid-cols-2 gap-2">
                {krymCities.map((city, index) => (
                  <li key={index}>
                    <a
                      href={city.link}
                      className="block px-3 py-2 text-black hover:bg-gray-100 hover:text-orange-500"
                    >
                      {city.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;