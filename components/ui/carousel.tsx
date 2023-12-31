"use client";

import React, { useState, useEffect } from "react";
import { CustomCard, CustomCardTypes } from "./customcard";
import useGetData from "@/hooks/use-get-data";

const tw = "-translate-x-[100%]";
const tw1 = "-translate-x-[200%]";
const tw2 = "-translate-x-[300%]";
const tw3 = "-translate-x-[400%]";
const tw4 = "-translate-x-[500%]";
const tw5 = "-translate-x-[33.333333333333336%]";
const tw6 = "-translate-x-[66.66666666666667%]";
const tw7 = "-translate-x-[133.33333333333334%]";
const tw8 = "-translate-x-[16.666666666666668%]";
const tw9 = "-translate-x-[50%]";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [countries, setCountries] = useState<string[]>([]);

  const cardPerSlide = {
    mobile: 1,
    tablet: 3,
    desktop: 6,
  };

  let transformValue: number | string = 0;

  if (isMobile) {
    transformValue = `${currentIndex * (100 / cardPerSlide.mobile)}`;
  } else if (isDesktop) {
    transformValue =
      currentIndex === 0
        ? "0"
        : currentIndex === 1
        ? "16.666666666666668"
        : currentIndex === 2
        ? "33.333333333333336"
        : currentIndex === 3
        ? "50"
        : currentIndex === 4
        ? "66.66666666666667"
        : "0";
  } else {
    transformValue =
      currentIndex === 0
        ? "0"
        : currentIndex === 1
        ? "33.333333333333336"
        : currentIndex === 2
        ? "66.66666666666667"
        : currentIndex === 3
        ? "100"
        : currentIndex === 4
        ? "133.33333333333334"
        : "0";
  }

  const nextSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % (testimonials?.length || 1)
    );
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + (testimonials?.length || 1)) %
        (testimonials?.length || 1)
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    setIsDesktop(window.innerWidth >= 1280);
    const fetchedCountries = [
      "Warsaw, Poland",
      "Shanxi, China",
      "Seoul, South Korea",
      "Santa Fe, Argentina",
      "Santiago, Chile",
    ];
    setCountries(fetchedCountries);
  }, []);

  const {
    result: testimonials,
    error,
    loading,
  } = useGetData<CustomCardTypes[]>({
    endpoint: "testimonial",
  });

  if (loading) {
    return <p>loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="flex flex-col pb-10">
      <div className="relative overflow-hidden">
        <div
          className={`flex transition-transform duration-300 -translate-x-[${transformValue}%]`}
          style={{
            width: `${
              testimonials?.length
                ? testimonials.length * (100 / cardPerSlide.tablet)
                : 0
            }%`,
          }}
        >
          {testimonials?.map((card, index) => (
            <div key={index} className={`w-full flex-none md:w-1/3 xl:w-1/6`}>
              <CustomCard
                avatar={card.avatar}
                fullName={card.fullName}
                country={countries[index]}
                testimonial={card.testimonial}
                isActive={index === currentIndex}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="relative pt-28">
        <div className="absolute bottom-4 ml-3 flex md:left-0 md:right-20">
          {testimonials?.map((_, index) => (
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
        <div className="absolute bottom-0 right-0 mt-10 flex space-x-4 pl-16 md:justify-end">
          <button
            onClick={prevSlide}
            className="rounded-full border-2 border-[#F53838] bg-[#FFFFFF] p-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#F53838"
              className="h-6 w-6"
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
            className="rounded-full border-2 border-[#F53838] bg-[#F53838] p-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#FFFFFF"
              className="h-6 w-6"
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
