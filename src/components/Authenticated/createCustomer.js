import React from "react";
import Customer from "../Library/data-classes/customers";
import { postCustomer } from "../Library/api-calls/customer-api-calls";
import { withAuthenticator } from "@aws-amplify/ui-react";

class CreateCustomer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: null,
      companyStreetName1: null,
      companyCity: null,
      companyZip: null,
      companyStreetName2: null,
      companyState: null,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      companyName,
      companyStreetName1,
      companyCity,
      companyZip,
      companyStreetName2,
      companyState,
    } = this.state;
    const newCustomer = new Customer(
      companyName,
      companyStreetName1,
      companyCity,
      companyZip,
      companyStreetName2,
      companyState
    );

    postCustomer(newCustomer);
  };

  clearForm = () => {
    this.setState({
      companyName: null,
      companyCountry: null,
      companyStreetName1: null,
      companyCity: null,
      companyZip: null,
      companyStreetName2: null,
      companyState: null,
    });
  };

  handleFormChange = (event) => {
    const name = event.target.name;
    this.setState({ [name]: event.target.value });
  };

  render() {
    return (
      <div className="container customers-component">
        <form className="center" onSubmit={this.handleSubmit}>
          <div className="form-title bold-text large-text">Add Company</div>
          <div className="row">
            {/* First Column*/}
            <div className="form-column col1">
              <div className="input-row">
                <label>Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  value={this.state.companyName}
                  onChange={this.handleFormChange}
                  required
                />
              </div>
              <div className="input-row">
                <label>Company Street #1</label>
                <input
                  type="text"
                  name="companyStreetName1"
                  value={this.state.companyStreetName1}
                  onChange={this.handleFormChange}
                  required
                />
              </div>
              <div className="input-row">
                <label>Company City</label>
                <input
                  type="text"
                  name="companyCity"
                  value={this.state.companyCity}
                  onChange={this.handleFormChange}
                  required
                />
              </div>
              <div className="input-row">
                <label>Company Zip</label>
                <input
                  type="text"
                  name="companyZip"
                  value={this.state.companyZip}
                  onChange={this.handleFormChange}
                  required
                />
              </div>
            </div>
            {/* Second Column*/}
            <div className="form-column col2">
              <div className="input-row">
                <label>Company Country</label>
                <input
                  type="text"
                  name="companyCountry"
                  value={this.state.companyCountry}
                  onChange={this.handleFormChange}
                  required
                />
              </div>
              <div className="input-row">
                <label>Company Street #2</label>
                <input
                  type="text"
                  name="companyStreetName2"
                  value={this.state.companyStreetName2}
                  onChange={this.handleFormChange}
                  required
                />
              </div>
              <div className="input-row">
                <label>Company State</label>
                <input
                  type="text"
                  name="companyState"
                  value={this.state.companyState}
                  onChange={this.handleFormChange}
                  required
                />
              </div>
            </div>
          </div>
          <div className="align-right">
            <button
              className="crum-color-secondary bold-text"
              onSubmit={this.handleSubmit}
            >
              Enter Contact
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withAuthenticator(CreateCustomer);
