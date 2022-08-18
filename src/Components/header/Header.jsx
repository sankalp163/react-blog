import React from "react";
import './header.css';

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React and Node</span>
        <span className="headerTitleLg"><i>Blog</i></span>
      </div>
      <img className="headerImg" src="https://images.pexels.com/photos/7034504/pexels-photo-7034504.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
    </div>
  );
}
