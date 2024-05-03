import './carousel.css';
import React, { useState } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Carousel = () => {
    //const CaptionedSlider = withCaption(AwesomeSlider);
    const [currentSlide, setCurrentSlide] = useState(0);
    const handlePrevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : currentSlide - 1);
    };
    const handleNextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : currentSlide + 1);
    };

    return (
        <div className="carousel-container">

            {/* <div className="carousel">
                <div className="carousel-slides">
                    <div className={`slide ${currentSlide === 0 ? 'active' : ''}`}>
                        <img src="https://wowslider.com/sliders/demo-93/data1/images/lake.jpg" alt="Slide 1" />
                    </div>
                    <div className={`slide ${currentSlide === 1 ? 'active' : ''}`}>
                        <img src="https://wowslider.com/sliders/demo-93/data1/images/lake.jpg" alt="Slide 2" />
                    </div>
                    <div className={`slide ${currentSlide === 2 ? 'active' : ''}`}>
                        <img src="https://wowslider.com/sliders/demo-93/data1/images/lake.jpg" alt="Slide 3" />
                    </div>
                </div>
                <div className="carousel-controls">
                    <button className="prev-btn" onClick={handlePrevSlide}>&#8249;</button>
                    <div className="navigation">
                        <span className={`nav-dot ${currentSlide === 0 ? 'active' : ''}`}></span>
                        <span className={`nav-dot ${currentSlide === 1 ? 'active' : ''}`}></span>
                        <span className={`nav-dot ${currentSlide === 2 ? 'active' : ''}`}></span>
                    </div>
                    <button className="next-btn" onClick={handleNextSlide}>&#8250;</button>
                </div>
            </div> */}

            <AwesomeSlider
                media={[
                    {
                        source: 'https://wowslider.com/sliders/demo-93/data1/images/lake.jpg',
                    },
                    {
                        source: 'https://wowslider.com/sliders/demo-93/data1/images/lake.jpg',
                    },
                    {
                        source: 'https://wowslider.com/sliders/demo-93/data1/images/lake.jpg',
                    },
                ]}
            />
        </div>
    );
}

export default Carousel