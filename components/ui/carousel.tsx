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
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-row space-x-10 justify-center">
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
      <div className="relative mt-10">
        <div className="flex absolute bottom-0 left-0 ml-3">
          {cards.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => {
                goToSlide(index);
                setCurrentIndex(index);
              }}
            />
          ))}
        </div>
        <div className="flex space-x-4 mr-4 justify-end">
          <button
            onClick={prevSlide}
            className="bg-[#FFFFFF] rounded-full border-2 border-[#F53838] p-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#F53838"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="bg-[#F53838] rounded-full border-2 border-[#F53838] p-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#FFFFFF"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
