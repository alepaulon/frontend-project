"use client";

import React, { useState, useEffect } from "react";
import { BASE_URL } from "@/app/page";
import { CustomCard, CustomCardTypes } from "./customcard";

const Carousel = () => {
  const [testimonial, setTestimonial] = useState<CustomCardTypes[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonial.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonial.length) % testimonial.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    setLoading(true);
    fetch(`${BASE_URL}/api/testimonial`)
      .then((response) => {
        response.json().then((result) => {
          setTestimonial(result);
        });
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="flex flex-col pb-10">
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            width: `${testimonial.length * 100}%`,
          }}
        >
          {testimonial.map((card, index) => (
            <div
              key={index}
              className="w-full flex-none"
              style={{ width: "100%" }}
            >
              <CustomCard
                avatar={card.avatar}
                fullName={card.fullName}
                country={card.country}
                testimonial={card.testimonial}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="relative pt-28">
        <div className="absolute bottom-4 ml-3 flex md:left-0 md:right-20">
          {testimonial.map((_, index) => (
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
