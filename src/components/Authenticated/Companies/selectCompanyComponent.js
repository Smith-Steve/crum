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
                  <a href="#createCustomer" className="text-decoration">
                    CreateCustomer
                  </a>
                </button>
              </div>
              <div className="row">
                <button className="crum-color-secondary bold-text">
                  <a href="#customerList" className="text-decoration">
                    CustomerList
                  </a>
                </button>
              </div>
              <div className="row">
                <button className="crum-color-secondary bold-text">
                  <a href="#customerUnknownComponent">CustomerList2</a>
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
