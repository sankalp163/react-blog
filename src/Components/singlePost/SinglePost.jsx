import React from "react";
import "./singlepost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/9875567/pexels-photo-9875567.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet
          <div className="singlePostEdit">
            <i className=" singlePostIcon fas fa-edit"></i>
            <i className="singlePostIcon fas fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Sankalp</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
          obcaecati inventore eius eligendi dolore aliquam, distinctio similique
          ipsa esse iure officiis a voluptates harum dolores suscipit sit.
          Inventore, quisquam vero. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Animi obcaecati inventore eius eligendi dolore
          aliquam, distinctio similique ipsa esse iure officiis a voluptates
          harum dolores suscipit sit. Inventore, quisquam vero. Lorem ipsum,
          dolor sit amet consectetur adipisicing elit. Animi obcaecati inventore
          eius eligendi dolore aliquam, distinctio similique ipsa esse iure
          officiis a voluptates harum dolores suscipit sit. Inventore, quisquam
          vero. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
          obcaecati inventore eius eligendi dolore aliquam, distinctio similique
          ipsa esse iure officiis a voluptates harum dolores suscipit sit.
          Inventore, quisquam vero.
        </p>
      </div>
    </div>
  );
}
