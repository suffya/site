import { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';

const slides = [
  {
    id: 0,
    title: "ВЫВОЗ МЕТАЛЛОЛОМА",
    description:
      "САМОВЫВОЗ металлолома в пункт приема в Симферополе. Скупка «В☆Лом» оказывает услуги: газорезка, демонтаж, погрузка и вывоз цветного и черного лома. Отправим ломовоз за вашим металлом в любое место города, по республике Крым выезд обсуждается.",
    image: "https://metall-priem-simferopol.ru/wp-content/uploads/2022/05/vyvoz-metalla.jpg",
    link: "/vyvoz-metalloloma/",
  },
  {
    id: 1,
    title: "ПРИЕМ ЦВЕТНОГО МЕТАЛЛОЛОМА",
    description:
      "Скупка ЦВЕТНОГО ЛОМА в Крыму по ВЫСОКИМ ЦЕНАМ! В наш пункт приема можно ДОРОГО сдать цветмет. Покупаем медь, бронзу, алюминий, латунь, свинец. При большом объеме — спеццена!",
    image: "https://metall-priem-simferopol.ru/wp-content/uploads/2022/05/priem-cvetnogo-metalla.jpg",
    link: "/cvetnoy-lom/",
  },
  {
    id: 2,
    title: "ПРИЕМ ЧЕРНОГО МЕТАЛЛОЛОМА",
    description:
      "Скупаем ДОРОГО ЧЕРНЫЙ МЕТАЛЛОЛОМ у жителей и организаций Республики Крым! Чугун, железо, нержавейка — неограниченные объемы. Возможен демонтаж и самовывоз.",
    image: "https://metall-priem-simferopol.ru/wp-content/uploads/2022/05/priem-chernogo-metalla.jpg",
    link: "/chernyy-lom/",
  },
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const nextSlide = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % slides.length);
      setFade(true);
    }, 300);
  };

  const prevSlide = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + slides.length) % slides.length);
      setFade(true);
    }, 300);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    trackTouch: true,
    trackMouse: false,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = slides[index];

  return (
    <section
      className="relative h-[662px] w-full overflow-hidden"
      {...swipeHandlers}
    >
      {/* Слой фона с fade-анимацией */}
      <div className="absolute inset-0 z-0 bg-black">
        {slides.map((slide, i) => (
          <img
            key={i}
            src={slide.image}
            alt={slide.title}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              i === index && fade ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      {/* Контент с анимацией появления */}
      <div className="relative z-10 flex justify-center items-center h-full px-4">
        <div
          className={`bg-black/70 p-6 sm:p-10 md:p-12 text-center max-w-3xl transition-all duration-700 ease-in-out transform ${
            fade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4">
            {current.title}
          </h1>
          <p className="text-sm sm:text-base text-white mb-6 leading-relaxed">
            {current.description}
          </p>
          <a
            href={current.link}
            className="inline-block bg-[#f26922] hover:bg-orange-600 text-white font-semibold text-sm py-3 px-6 uppercase tracking-wide transition-all duration-300"
          >
            Подробнее
          </a>
        </div>
      </div>

      {/* Точки-индикаторы */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setFade(false);
              setTimeout(() => {
                setIndex(i);
                setFade(true);
              }, 300);
            }}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === index ? 'bg-black' : 'bg-white bg-opacity-70'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
