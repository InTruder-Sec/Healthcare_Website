import React from "react";
import "./FeatureCard.css";
import Exercise from "./../../../images/blog/exercise.jpeg"

function FeatureCard() {
    return (
        <div className="blog--feature--card">
            <div className="blog--feature--img"><img className="blog--feature--img" alt="blog-feature" src={Exercise} ></img> </div>
            <div className="blog--feature--details">
                <div className="blog--feature--cate">Exercise & Fitness</div>
                <div className="blog--feature--title">Lorem ipsum dolor sit amet. Et voluptatum molestiae in</div>
                <div className="blog--feature--date">06 March</div>
            </div>
        </div>
    )
}

export default FeatureCard;