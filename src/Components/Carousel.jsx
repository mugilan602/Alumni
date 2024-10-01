import React, { useRef } from "react";
import "./Carousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Carousel = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Disable default arrows
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000,
    pauseOnHover: false, // Slide change interval in milliseconds
  };

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="carousel-container">
      <Slider ref={sliderRef} {...settings}>
        <div>
          <img
            src="https://sairam.edu.in/wp-content/uploads/2024/04/veeramuthuvel-function-banner.png"
            alt="Slide 1"
          />
        </div>
        <div>
          <img
            src="https://sairam.edu.in/wp-content/uploads/2024/04/veeramuthuvel-function-banner-1.jpg"
            alt="Slide 2"
          />
        </div>
        <div>
          <img
            src="https://sairam.edu.in/wp-content/uploads/2024/05/Graduation-Day-1187-%C3%97-580.jpg"
            alt="Slide 3"
          />
        </div>
      </Slider>

      <div className="carousel-buttons">
        <button className="carousel-button prev" onClick={previous}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className="carousel-button next" onClick={next}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
