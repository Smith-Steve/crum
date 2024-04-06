import { getCurrentUser, fetchAuthSession } from "aws-amplify/auth";

async function currentAuthenticatedUser() {
  try {
    const { username, userId, signInDetails } = await getCurrentUser();
    return { username, userId, signInDetails };
  } catch (err) {
    console.log(err);
  }
}

async function getUserSessionInfo() {
  try {
    const { accessToken, idToken } = (await fetchAuthSession()).tokens ?? {};
    return { accessToken, idToken };
  } catch (error) {
    console.log(error);
  }
}

export { currentAuthenticatedUser, getUserSessionInfo };
