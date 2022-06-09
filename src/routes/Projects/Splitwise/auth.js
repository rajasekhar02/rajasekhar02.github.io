import localStore from "../../../utils/localStore";
import { getAccessToken } from "./services";
const SplitwiseAuthProvider = {
  LOCAL_STORE_KEY: "splitwiseAuthPayload",
  authStatus: function () {
    const splitwiseAuthPayload = localStore.getData(
      SplitwiseAuthProvider.LOCAL_STORE_KEY
    );
    return Boolean(splitwiseAuthPayload?.accessToken);
  },
  signIn: async function (code) {
    const splitwiseAuthPayload = localStore.getData(
      SplitwiseAuthProvider.LOCAL_STORE_KEY
    );
    try {
      if (!splitwiseAuthPayload?.accessToken) {
        const response = await getAccessToken(code);
        localStore.setData(SplitwiseAuthProvider.LOCAL_STORE_KEY, {
          code: code,
          accessToken: response.data.access_token,
          tokenType: response.data.token_type
        });
      }
      return true;
    } catch (err) {
      return false;
    }
  },
  signOut: function () {
    localStore.deleteDataWith(SplitwiseAuthProvider.LOCAL_STORE_KEY);
  }
};

export default SplitwiseAuthProvider;
