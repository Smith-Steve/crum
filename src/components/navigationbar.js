import React from "react";

export default function NavigationBar() {
  return (
    <div className="top-navigator crum-color-secondary">
      <a className="active" href="#home">
        Home
      </a>
      <a href="#customers">Customers</a>
      <a href="#item2">Item2</a>
      <a href="#item3">Item3</a>
    </div>
  );
}
