//Customer Component - Lists All Customers
import React from "react";
import { withAuthenticator } from "@aws-amplify/ui-react";
// Helpeer API Calls
import {
  getAllCompanies,
  deleteOneCompany,
} from "../../Library/api-calls/customer-api-calls";

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

  deleteCompany = (deletedCompany) => {
    console.log(
      "Console log. deleteCompany React Component passed in variable: ",
      deletedCompany
    );
    deleteOneCompany(deletedCompany);
    this.setState((prevState) => {
      const indexOfCompany = prevState.customerList.findIndex(
        (customer) => customer.companyId === deletedCompany.companyId
      );
      const newCompanyList = [...prevState.customerList];
      if (indexOfCompany >= 0) newCompanyList.splice(indexOfCompany, 1);
      return { customerList: newCompanyList };
    });
  };

  renderCustomerTable = (customerRow) => {
    console.log(customerRow);
    return (
      <tr>
        <td>{customerRow.companyName}</td>
        <td>{customerRow.companyState}</td>
        <td>{customerRow.companyState}</td>
        <td>
          <button onClick={() => this.deleteCompany(customerRow)}>
            Delete
          </button>
        </td>
      </tr>
    );
  };

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
          {customerList.length > 0 ? (
            customerList.map(this.renderCustomerTable)
          ) : (
            <div>No table</div>
          )}
        </table>
      </div>
    );
  }
}

export default withAuthenticator(CustomerList);
