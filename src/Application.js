import React from "react";
import logo from "./logo.svg";
// Components
// UnAthenticated Components
import Home from "./components/home";
import NavigationBar from "./components/navigationbar";
import Register from "./components/UnAuthenticated/register";
import ApplicationContext from "./library/application-context";

//Application component will be the component in which other component are rendered.

export default class Application extends React.Component {
  constructor(props) {
    super(props);
    // this.signOut = this.signOut.bind(this);
    this.state = {
      component: "",
      authenticated: false,
    };
  }

  renderApplicationSplit() {
    //The first two component branches are one for authenticated users, one for users that are not authenticated.
    if (this.state.authenticated === false) {
      //If ther user is not authenticated, we render the unathenticated user interface.
      return this.renderUnAuthenticatedComponents();
    } else {
      return this.renderAuthenticatedComponents();
    }
  }

  renderUnAuthenticatedComponents = () => {
    switch (this.state.component) {
      case "register":
        return <Register />;
      default:
        return <Home />;
    }
  };

  setComponent = (selectedComponent) => {
    this.setState({ component: selectedComponent });
  };

  renderAuthenticatedComponents = () => {
    return "Hello Authenticated User";
  };

  render() {
    return (
      <ApplicationContext.Provider companyName={"CRUM"}>
        <React.Fragment>
          <NavigationBar setComponent={this.setComponent} />
          {this.renderApplicationSplit()}
        </React.Fragment>
      </ApplicationContext.Provider>
    );
  }
}

Application.contextType = ApplicationContext;
