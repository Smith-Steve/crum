import logo from "./logo.svg";
import NavigationBar from "./components/navigationbar";
import { get } from "aws-amplify/api";
import React from "react";

//Application component will be the component in which other component are rendered.

class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      component: null,
    };
  }

  renderComponent() {}

  render() {
    return <NavigationBar />;
  }
}

export default Application;
