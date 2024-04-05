import { getCurrentUser, fetchAuthSession } from "aws-amplify/auth";

async function currentAuthenticatedUser() {
  try {
    const { username, userId, signInDetails } = await getCurrentUser();
    console.log(`The username: ${username}`);
    console.log(`The userId: ${userId}`);
    console.log(`The signInDetails: ${signInDetails}`);
  } catch (err) {
    console.log(err);
  }
}

async function getUserSessionInfo() {
  try {
    const { accessToken, idToken } = (await fetchAuthSession()).tokens ?? {};
    console.log(
      `Inside Function - Access Token ${accessToken} - idToken - ${idToken}`
    );
    return { accessToken, idToken };
  } catch (error) {
    console.log(error);
  }
}

export { currentAuthenticatedUser, getUserSessionInfo };
