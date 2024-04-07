import { post } from "aws-amplify/api";

async function postCustomer(newCustomer) {
  try {
    const restOperation = post({
      apiName: "apibe906b66",
      path: "/customer/",
      options: {
        body: {
          customer: newCustomer,
        },
      },
    });

    const { body } = await restOperation.response;
    const response = await body.json();
    console.log("POST APPEARS TO HAVE SUCCEEDED: ", response);
  } catch (error) {
    console.log("Error Block");
    console.log("Post call failed: ", error.response);
  }
}

export { postCustomer };
