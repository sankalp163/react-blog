import React from "react";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="https://images.pexels.com/photos/7675860/pexels-photo-7675860.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum qui iste
          labore aliquid amet nihil distinctio, odit deserunt unde laboriosam in
          facilis vitae autem pariatur. Atque qui mollitia error perspiciatis?
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Programming</li>
          <li className="sidebarListItem">Cinema</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Investing</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className=" sidebarIcon fab fa-instagram-square"></i>
          <i className=" sidebarIcon fab fa-linkedin"></i>
        </div>
      </div>
    </div>
  );
}
