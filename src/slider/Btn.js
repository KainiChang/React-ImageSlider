import React from "react";
import "./Slider.css";
import leftArrow from "./icons/left-arrow.svg";
import rightArrow from "./icons/right-arrow.svg";

export default function Btn(moveSlide,direction){

return(
    <button className={direction==="prev"?"btn-slide-prev":"btn-slide-next"} onClick={moveSlide}>
        <img  src= {direction==="prev"?leftArrow:rightArrow} alt="button"/>
    </button>
)
}