import localStore from "../../../utils/localStore";
import { getAccessToken } from "./services";
const SplitwiseAuthProvider = {
  LOCAL_STORE_KEY: "splitwiseAuthPayload",
  isAuthenticated: false,
  accessToken: undefined,
  apiAccessToken: undefined,
  authStatus: function () {
    const splitwiseAuthPayload = localStore.getData(
      SplitwiseAuthProvider.LOCAL_STORE_KEY
    );
    return Boolean(splitwiseAuthPayload);
  },
  signIn: async function (code) {
    const splitwiseAuthPayload = localStore.getData(
      SplitwiseAuthProvider.LOCAL_STORE_KEY
    );
    try {
      if (!splitwiseAuthPayload) {
        const response = await getAccessToken(code);
        localStore.setData(SplitwiseAuthProvider.LOCAL_STORE_KEY, {
          code: code,
          accessToken: response.data.access_token,
          tokenType: response.data.token_type
        });
      }
      SplitwiseAuthProvider.isAuthenticated = true;
      SplitwiseAuthProvider.accessToken = splitwiseAuthPayload.accessToken;
      SplitwiseAuthProvider.apiAccessToken = `${splitwiseAuthPayload.tokenType} ${splitwiseAuthPayload.accessToken}`;
      return true;
    } catch (err) {
      return false;
    }
  },
  signOut: function () {
    SplitwiseAuthProvider.isAuthenticated = false;
    SplitwiseAuthProvider.accessToken = undefined;
    SplitwiseAuthProvider.apiAccessToken = undefined;
    localStore.deleteDataWith(SplitwiseAuthProvider.LOCAL_STORE_KEY);
  }
};

export default SplitwiseAuthProvider;
