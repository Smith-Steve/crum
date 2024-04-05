import React from "react";

export default function NavigationBar() {
  return (
    <div className="top-navigator">
      <a className="active" href="#home">
        Home
      </a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
    </div>
  );
}
