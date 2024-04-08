//Customer Component - Lists All Customers
import React from "react";
import { withAuthenticator } from "@aws-amplify/ui-react";
// Helpeer API Calls
import { getAllCompanies } from "../../Library/api-calls/customer-api-calls";

class CustomerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customerList: [],
    };
  }

  componentDidMount() {
    //We use this function to call in all the customers into one list that is to be stored in state.
    //Should initially be set up to display 10/20 customers at a time.
    this.getCompaniesList();
  }

  getCompaniesList = () => {
    getAllCompanies()
      .then(this.onGetCompaniesSuccess)
      .catch(this.onGetCompaniesFailure);
  };

  onGetCompaniesSuccess = (returnListSuccess) => {
    console.log(returnListSuccess);
    this.setState({ customerList: returnListSuccess });
  };

  onGetCompaniesFailure = (returnedError) => {
    console.log("Call Error");
    console.log(returnedError);
  };

  renderCustomerTable = (customer) => {};

  render() {
    const customerList = this.state.customerList;
    return (
      <div className="container customer-list-component">
        <table className="perfect-center customer-table">
          {/* Table Header */}
          <tr>
            <th colSpan="4">Customer Table</th>
          </tr>
          <tr className="table-head">
            <td>Company</td>
            <td>Company City</td>
            <td>Customer State</td>
            <td>Action</td>
          </tr>
          <tr>
            <td>Stephen</td>
            <td>Costa Mesa</td>
            <td>California</td>
            <td>
              <button>Hello</button>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default withAuthenticator(CustomerList);
