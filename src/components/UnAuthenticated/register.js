import React from "react";
import logo from "../../logo.svg";
import "@aws-amplify/ui-react/styles.css";
import { signOut } from "aws-amplify/auth";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";
import {
  currentAuthenticatedUser,
  getUserSessionInfo,
} from "../AuthenticationHelpers/authenticationFunctions";
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accessToken: null,
      idToken: null,
    };
  }

  handleSignout = () => {
    signOut();
  };

  userInfo = () => {
    currentAuthenticatedUser();
  };

  getAuthenticationDetails = () => {
    getUserSessionInfo()
      .then(this.onAuthenticationSuccess)
      .catch(this.onAuthenticationFailure);
  };

  onAuthenticationSuccess = (response) => {
    console.log(`Authentication Success: ${response}`);
    this.setState((prevState) => {
      return {
        ...prevState,
        accessToken: response.accessToken,
        idToken: response.idToken,
      };
    });
  };

  onAuthenticationFailure = (errorMessage) => {
    console.log(`Error Message: ${errorMessage}`);
  };

  render() {
    return (
      <View className="App">
        <Card>
          <Image src={logo} className="App-logo" alt="logo" />
          <Heading level={1}>We now have Auth!</Heading>
        </Card>
        <Button onClick={this.handleSignout}>Sign Out</Button>
        <Button onClick={this.userInfo}>Print User Info</Button>
        <Button onClick={this.getAuthenticationDetails}>Print User Info</Button>
      </View>
    );
  }
}

export default withAuthenticator(Register);
