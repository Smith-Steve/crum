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

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = null;
  }

  handleSignout = () => {
    signOut();
  };

  render() {
    return (
      <View className="App">
        <Card>
          <Image src={logo} className="App-logo" alt="logo" />
          <Heading level={1}>We now have Auth!</Heading>
        </Card>
        <Button onClick={this.handleSignout}>Sign Out</Button>
      </View>
    );
  }
}

export default withAuthenticator(Register);

// function Application({ signOut }) {
//   return (
//     <View className="App">
//       <Card>
//         <Image src={logo} className="App-logo" alt="logo" />
//         <Heading level={1}>We now have Auth!</Heading>
//       </Card>
//       <Button onClick={signOut}>Sign Out</Button>
//     </View>
//   );
// }
