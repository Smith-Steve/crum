import React from "react";

function NavigationBar({ setComponent }) {
  function getComponent(componentString) {
    return componentString.split("#")[1];
  }
  const handleClick = (event) => {
    //will have to determine a way to make this dynamic. Right now the link is hard coded.
    var selectedComponent = event.target.href;
    var component = getComponent(selectedComponent);
    setComponent(component);
  };
  return (
    <div className="top-navigator" onClick={handleClick}>
      <a className="active" href="#home">
        Home
      </a>
      <a href="#register">Login/Register</a>
      <a href="#customers">Customers</a>
      <a href="#contacts">Contacts</a>
      <a href="#flights">Flights</a>
    </div>
  );
}

export { NavigationBar };
