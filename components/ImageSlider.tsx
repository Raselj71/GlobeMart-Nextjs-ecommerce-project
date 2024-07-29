"use client";
import { useState } from "react";

const ImageSlider = ({ slides }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: any) => {
    setCurrentIndex(slideIndex);
  };

  const slideStylesWidthBackground = {
    backgroundImage: `url(${slides[currentIndex]})`,
  };

  return (
    <div className="relative h-full">
      <div>
        <div
          onClick={goToPrevious}
          className="absolute top-1/2 transform -translate-y-1/2 left-8 text-4xl text-white z-10 cursor-pointer hover:text-mainColoer"
        >
          ❰
        </div>
        <div
          onClick={goToNext}
          className="absolute top-1/2 transform -translate-y-1/2 right-8 text-4xl text-white z-10 cursor-pointer hover:text-mainColoer"
        >
          ❱
        </div>
      </div>
      <div
        className="w-full h-full rounded-lg bg-cover bg-center"
        style={slideStylesWidthBackground}
      ></div>
      <div className="flex justify-center">
        {slides.map((slide: any, slideIndex: any) => (
          <div
            className="mx-1 cursor-pointer text-2xl hover:text-mainColoer"
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
