import React, { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./Carousel.css";

const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);
  const [showArrows,setShowArrows] = useState(true);

  // Function to go to the next slide
  const nextSlide = () => {
    setSlide((slide + 1) % data.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setSlide((slide + data.length - 1) % data.length);
  };

  // Auto-slide functionality
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    // Cleanup function to clear interval on component unmount
    return () => clearInterval(intervalId);
  }, [slide, data.length]); // Re-run effect when slide or data length changes

  return (
    <div className="carousel-container">
      <div className="arrow-container left">
        <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
      </div>
      <div className="carousel">
        {data.map((item, idx) => (
          <Single item={item} key={item.id} isActive={slide === idx} />
        ))}
        <span className="indicators">
          {data.map((_, idx) => (
            <button
              key={idx}
              className={slide === idx ? "indicator" : "indicator indicator-inactive"}
              onClick={() => setSlide(idx)}
            ></button>
          ))}
        </span>
      </div>
      <div className="arrow-container right">
        <BsArrowRightCircleFill onClick={nextSlide} className="arrow arrow-right" />
      </div>
    </div>
  );
};

const Single = ({ item, isActive }) => {
  return (
    <div className={isActive ? "slide" : "slide slide-hidden"}>
      <div className="imageContainer">
        <img src={item.img} alt={item.title} />
      </div>
      <div className="partition"></div>
      <div className="textContainer">
        <h1>{item.title}</h1>
        <p>{item.desc}</p>
        <button>View Report</button>
      </div>
    </div>
  );
};

export default Carousel;
