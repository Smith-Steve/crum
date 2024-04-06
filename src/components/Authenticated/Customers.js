import React from "react";
import { withAuthenticator } from "@aws-amplify/ui-react";

class Customers extends React.Component {
  constructor(props) {
    super(props);
    this.state = null;
  }

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="container customers-component">
        <div className="row">
          <div className="col">
            <p className="large-text bold-text">Add Customer</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <form onSubmit={this.handleSubmit}>
              <div className="input-row">
                <label> Company Name</label>
                <input
                  type="text"
                  name="firstName"
                  //   value={this.state.firstName}
                  //   onChange={this.handleChange}
                  required
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuthenticator(Customers);
