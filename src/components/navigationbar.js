import React from "react";

export default function NavigationBar({ setComponent }) {
  const handleClick = (event) => {
    //will have to determine a way to make this dynamic. Right now the link is hard coded.
    var targetedComponent = event.target.href.replace(
      "http://localhost:3000/#",
      ""
    );
    if (targetedComponent === "register") {
      setComponent(targetedComponent);
    } else {
      targetedComponent = event.target.href.replace(
        "https://main.d2qowro5jlfsxv.amplifyapp.com/",
        ""
      );
      setComponent(targetedComponent);
    }
  };
  return (
    <div className="top-navigator" onClick={handleClick}>
      <a className="active" href="#home">
        Home
      </a>
      <a href="#register">Login/Register</a>
      <a href="#null">Placeholder</a>
      <a href="#about">About</a>
    </div>
  );
}
