import React from "react";
import BlogCardsImg from "./../../images/blog/exercise.jpeg";
import "./Cards.css";


function MpCards() {
    return (
        <div className="blog--MpCards">
            <div className="blog--MpCards--main">
                <div className="blog--MpCards--cat">Exercise</div>
                <div className="blog--MpCards--date">January 6</div>
                <div className="blog--MpCards--title">Lorem ipsum dolor sit amet.</div>
            </div>
            <div className="blog--MpCards--img">
                <img className="blog--img--main" alt="CardImg" src={BlogCardsImg} ></img>
            </div>
        </div>
    )
}

export default MpCards;