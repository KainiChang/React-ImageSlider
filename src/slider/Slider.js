import React from 'react';
import './Slider.css'
import dataSlider from './dataSlider'
import leftArrow from "./icons/left-arrow.svg";
import rightArrow from "./icons/right-arrow.svg";

export default function Slider() {

    const [slideIndex, setSlideIndex] = React.useState(1)

    function nextSlide() {
        if (slideIndex !== dataSlider.length) { setSlideIndex(slideIndex + 1) }
        else {
            setSlideIndex(1)
        }
    }
    function prevSlide() {
        if (slideIndex !== 1) { setSlideIndex(slideIndex - 1) } else {
            setSlideIndex(dataSlider.length)
        }
    }


    return (
        <div className="container-slider">

            {dataSlider.map((obj, index) => {

                return (
                    <div
                        key={obj.id}
                        className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img src={`./images/img${index + 1}.jpg`} alt="alt" />

                    </div>
                )
            })}
            <button className="btn-slide-prev" onClick={prevSlide} >
                <img src={leftArrow} alt="button" className='btn-slide-img' />
            </button>
            <button className="btn-slide-next" onClick={nextSlide} >
                <img src={rightArrow} alt="button" className='btn-slide-img' />
            </button>
        </div>

    )

}