import React, { useState } from "react";
import { CustomCard } from "./customcard";
import { StaticImageData } from "next/image";

interface CarouselProps {
  cards: {
    avatarSrc: string | StaticImageData;
    name: string;
    country: string;
    score: number;
    message: string;
  }[];
}

const Carousel: React.FC<CarouselProps> = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-row space-x-10">
        {cards.map((card, index) => (
          <CustomCard
            key={index}
            avatarSrc={card.avatarSrc}
            name={card.name}
            country={card.country}
            score={card.score}
            message={card.message}
            isActive={index === currentIndex}
          />
        ))}
      </div>
      <div className="">
        <button onClick={prevSlide}>Prev</button>
        <button onClick={nextSlide}>Next</button>
      </div>
      <div className="">
        {cards.map((_, index) => (
          <span
            key={index}
            className={index === currentIndex ? "active" : ""}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
