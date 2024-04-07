import { post, get } from "aws-amplify/api";

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

export { postCustomer, getAllCompanies };
