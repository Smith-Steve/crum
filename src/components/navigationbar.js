import React from "react";

export default function NavigationBar() {
  return (
    <div className="top-navigator">
      <a className="active" href="#home">
        Home
      </a>
      <a href="#login">Login</a>
      <a href="#services">Services</a>
      <a href="#about">About</a>
    </div>
  );
}
