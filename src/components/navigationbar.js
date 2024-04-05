import React from "react";

export default function NavigationBar({ setComponent }) {
  const handleClick = (event) => {
    //will have to determine a way to make this dynamic. Right now the link is hard coded.
    const targetedComponent = event.target.href.replace(
      "http://localhost:3000/#",
      ""
    );
    setComponent(targetedComponent);
  };
  return (
    <div className="top-navigator" onClick={handleClick}>
      <a className="active" href="#home">
        Home
      </a>
      <a href="#login">Login</a>
      <a href="#register">Register</a>
      <a href="#about">About</a>
    </div>
  );
}
