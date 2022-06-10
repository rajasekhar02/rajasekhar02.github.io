import localStore from "../../../utils/localStore";
import CONSTANTS from "./constants.json";
import { getAccessToken } from "./services";
const SplitwiseAuthProvider = {
  LOCAL_STORE_KEY: CONSTANTS.LOCAL_STORE_KEYS.splitwiseAuthPayload,
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
    Object.values(CONSTANTS.LOCAL_STORE_KEYS).forEach((localStoreKey) => {
      localStore.deleteDataWith(localStoreKey);
    });
  }
};

export default SplitwiseAuthProvider;
