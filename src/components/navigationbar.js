import React from "react";

function NavigationBar({ setComponent }) {
  function getComponent(componentString) {
    return componentString.split("#")[1];
  }

  const handleClick = (event) => {
    var selectedComponent = event.target.href;
    var component = getComponent(selectedComponent);
    setComponent(component);
  };
  return (
    <div className="navbar top-navigator" onClick={handleClick}>
      <a href="#home" className="active">
        Home
      </a>
      <a href="#register">Login/Register</a>
      <div className="dropdown">
        <button className="dropbtn">Customers</button>
        <div className="dropdown-content">
          <a href="#addCustomer">Enter Customer</a>
          <a href="#customerList">Customer List</a>
        </div>
      </div>
    </div>
  );
}

export { NavigationBar };
