import React from "react";
import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/7789192/pexels-photo-7789192.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem Ipsum</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
        voluptatum eligendi temporibus veritatis reiciendis hic tenetur,
        perferendis sit quod dolores nihil ab earum, quam et, nemo molestias
        facere! Odit, reiciendis? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quidem illum placeat voluptatem consequatur
        praesentium eos quisquam eveniet, amet incidunt assumenda temporibus
        totam ea doloribus voluptate ipsa molestiae vero aliquam possimus.
      </p>
    </div>
  );
}
