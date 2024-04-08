import { post, get, del } from "aws-amplify/api";

/*  API Resource Name: 'CrumCompany'
        path: /CrumCompany
        Lambda Name: CrumCompanyLambda
        DynamoDB: CrumCompanyDynamoDB
    */

async function postCustomer(newCustomer) {
  try {
    const restOperation = post({
      apiName: "CrumCompany",
      path: "/CrumCompany",
      options: {
        body: {
          companyId: newCustomer.companyId,
          companyName: newCustomer.companyName,
          companyStreetName1: newCustomer.companyStreetName1,
          companyStreetName2: newCustomer.companyStreetName2,
          companyCity: newCustomer.companyCity,
          companyState: newCustomer.companyState,
          companyZip: newCustomer.companyZip,
        },
      },
    });

    const { body } = await restOperation.response;
    const response = await body.json();
    return response;
  } catch (error) {
    console.log("Post call failed: ", error.response.body);
  }
}

async function getAllCompanies() {
  try {
    const restOperation = get({
      apiName: "CrumCompany",
      path: "/CrumCompany",
    });
    const { body } = await restOperation.response;
    const response = await body.json();
    return response;
  } catch (error) {
    console.log("Get Call Failed: ");
    console.log(error.response.body);
  }
}

async function deleteOneCompany(company) {
  console.log("Company variable passed into API call: ", company);
  try {
    const restOperation = del({
      apiName: "CrumCompany",
      path: `/CrumCompany/${company.companyId}`,
    });
    await restOperation.response;
    console.log("Delete Achieved: ");
    console.log(restOperation.response);
  } catch (error) {
    if (typeof company.companyId !== "number") {
      console.log("Not a number data type.");
      console.log(company.companyId);
    } else {
      console.log("Delete customer failed: ", error);
    }
  }
}

export { postCustomer, getAllCompanies, deleteOneCompany };
