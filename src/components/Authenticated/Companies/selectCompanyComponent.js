import React from "react";
import { withAuthenticator } from "@aws-amplify/ui-react";
class SelectCompanyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accessToken: null,
      idToken: null,
    };
  }

  render() {
    return (
      <div className="container">
        <form className="center">
          <div className="row">
            <div className="form-column">
              <div className="row">
                <button className="crum-color-secondary bold-text">
                  Create Customer
                </button>
              </div>
              <div className="row">
                <button className="crum-color-secondary bold-text">
                  Button
                </button>
              </div>
              <div className="row">
                <button className="crum-color-secondary bold-text">
                  Button
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withAuthenticator(SelectCompanyComponent);
