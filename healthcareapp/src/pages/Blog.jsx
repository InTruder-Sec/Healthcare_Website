import React from "react";
import "../styles/Blog.css";
import LatestBlogImg from "./../images/blog/exercise.jpeg";
import MpCards from "../components/Blog/Blog-Mp-Cards/Cards";
import FeatureCard from "../components/Blog/FeatureCards/FeatureCards";

const Blog = () => {
  return (
    <div className="blog">
      <div className="blog-heading blog-heading--main">
        <h1>A good laugh and a long sleep are the</h1>
        <h1>best cures in the doctor's book.</h1>
      </div>
      <div className="blog--main">
        <div className="blog--latest">
          <div className="blog--latest--category">Exercise & Fitness</div>
          <div className="blog--latest--head">Lorem ipsum dolor sit amet.</div>
          <div className="blog--latest--author">
            <div className="blog--author--name">Dr. Lorem Ipsum</div>
            <div className="blog--latest--date">2 Hours ago</div>
          </div>
          <div className="blog--latest--details">
            <div className="blog--latest--img">
              <img
                alt="latest-blog-img"
                className="blog--latest--img--plc"
                src={LatestBlogImg}
              ></img>
            </div>
            <div className="blog--latest--details--intro">
              Lorem ipsum dolor sit amet. Et voluptatum molestiae in delectus
              sapiente ad quas iusto aut accusantium molestiae. Est omnis
              eveniet sit illo molestiae quo temporibus repudiandae qui quasi
              officiis et impedit doloremque. Hic omnis dolores rem quae
              assumenda ab minus recusandae sed enim suscipit eum quae sequi ex
              saepe sunt et saepe internos. Nam sunt voluptatum aut recusandae
              saepe sit voluptas doloremque!
              <br />
              <br />
              Sit unde minima a delectus impedit sed error sunt id laudantium
              sunt cum consequatur consequatur et soluta soluta ut dolor quas!
              Aut minima sint ab aliquam corporis quo earum consequatur At
              dignissimos amet.
              <br />
              <br />
              Sit adipisci modi At tempore odio rem voluptates repudiandae! Qui
              autem galisum quo laboriosam saepe et aliquid obcaecati qui
              accusantium sint ut dolor nulla aut tempore consequuntur. Sed
              quidem tempore sed dolor natus qui libero atque cum quia quam.
            </div>
          </div>
        </div>
      </div>
      <div className="blog--mp">
        <div className="blog--mp--head">Most Popular</div>
        <div className="blog--mp--hr"></div>
        <div className="MpCards">
          <MpCards />
          <MpCards />
          <MpCards />
          <MpCards />
          <MpCards />
          <MpCards />
        </div>
      </div>
      <div className="blog--feature">
        <div className="blog-heading">
          <h1>Time and health are two precious assets.</h1>
        </div>
        <center>
          <div className="blog--card--container">
            <FeatureCard />
            <FeatureCard />
            <FeatureCard />
            <FeatureCard />
            <FeatureCard />
            <FeatureCard />
          </div>

          <div className="blog--load--more">
            <button className="blog--lm--btn">Load More {">"} </button>
          </div>
        </center>
      </div>
    </div>
  );
};

export default Blog;
