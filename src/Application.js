import React from "react";
// Components
import Home from "./components/home";
import NavigationBar from "./components/navigationbar";
import logo from "./logo.svg";
import { get } from "aws-amplify/api";

//Application component will be the component in which other component are rendered.

class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      component: "Customers",
    };
  }

  renderComponent() {
    const { component } = this.state.component;
    switch (component) {
      case "Customers":
        console.log("Customer Component Rendering");
        break;
      default:
        return <Home />;
    }
  }

  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        {this.renderComponent()}
      </React.Fragment>
    );
  }
}

export default Application;
