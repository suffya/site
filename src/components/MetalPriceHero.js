import React from 'react';

const MetalPriceHero = ({ width, breadcrumbs, title }) => {
  // Определение размеров экрана на основе переданной ширины
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 992;
  const isSmallDesktop = width >= 992 && width < 1200;
  const isLargeDesktop = width >= 1200;
  const isExtraLarge = width >= 1476;
  // Динамические стили на основе размера экрана
  const getResponsiveStyles = () => {
    return {
      // Контейнер - используем стандартные Tailwind классы
      container: 'px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-3 sm:py-4 md:py-5 lg:py-6 xl:py-8',
      
      // Главная область контента - адаптивная ширина
      contentArea: 'w-full md:w-7/12 lg:w-6/12 xl:w-5/12 flex flex-col justify-center h-full text-left',
      
      // Дополнительный контент - скрыт для экономии места в компактной высоте
      additionalContent: 'hidden' // Скрываем дополнительный контент при фиксированной высоте 173px
    };
  };

  const styles = getResponsiveStyles();

  return (
    <div 
      className="relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://metall-priem-simferopol.ru/wp-content/themes/Metall-theme/assets/img/ceny.webp')",
        height: '173px'
      }}
    >
      {/* Темный оверлей для лучшей читаемости текста */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Контент */}
      <div className={`relative z-10 container mx-auto h-full ${styles.container}`}>
        <div className="flex flex-wrap h-full">
          {/* Область с заголовком и хлебными крошками */}
          <div className={styles.contentArea}>
            
            {/* Хлебные крошки */}
            <nav className="mb-2 md:mb-3">
              <ul className={
                `flex flex-wrap items-center text-sm sm:text-[15px] md:text-base`}>
                {breadcrumbs && breadcrumbs.length > 0 ? (
                  breadcrumbs.map((crumb, index) => (
                    <li key={index} className="flex items-center">
                      {crumb.href ? (
                        <a 
                          href={crumb.href} 
                          className="text-white hover:text-yellow-400 transition-colors duration-200"
                        >
                          {crumb.label}
                        </a>
                      ) : (
                        <span className="text-white">
                          {crumb.label}
                        </span>
                      )}
                      {index < breadcrumbs.length - 1 && (
                        <span className="text-white mx-2">•</span>
                      )}
                    </li>
                  ))
                ) : (
                  // Дефолтные хлебные крошки если не переданы
                  <>
                    <li className="flex items-center">
                      <a 
                        href="/" 
                        className="text-white hover:text-yellow-400 transition-colors duration-200"
                      >
                        Главная
                      </a>
                      <span className="text-white mx-2">•</span>
                    </li>
                    <li>
                      <span className="text-white">
                        Цена на металлолом
                      </span>
                    </li>
                  </>
                )}
              </ul>
            </nav>
            
            {/* Основной заголовок */}
            <h1 
              className="
              font-bold text-white leading-tight text-left mb-1 sm:mb-2 lg:mb-3 
              text-lg sm:text-[26px] md:text-3xl lg:text-4xl}
              "
            >
              {title || "Цена на металлолом"}
            </h1>
            
            {/* Дополнительный контент (если нужен) */}
            <div className={`text-white opacity-90 ${styles.additionalContent}`}>
              {/* Здесь можно добавить описание или дополнительную информацию */}
              {!isMobile && (
                <p>Актуальные цены на прием черного и цветного металлолома. Высокие расценки и быстрая оценка.</p>
              )}
            </div>
            
          </div>
        </div>
      </div>
      
      {/* Декоративные элементы металлолома (опционально) */}
      <div className="absolute bottom-0 right-0 opacity-20 pointer-events-none">
        {/* Здесь можно добавить SVG иконки металлолома для декора */}
      </div>
    </div>
  );
};

export default MetalPriceHero;