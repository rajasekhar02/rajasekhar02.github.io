import axios from "axios";
import CREDENTIALS from "./credentials.json";
// Set config defaults when creating the instance
export const unAuthAxios = axios.create({
  baseURL: `${CREDENTIALS.PROXY_URL}/https://secure.splitwise.com/`
});

export const authAxios = axios.create({
  baseURL: `${CREDENTIALS.PROXY_URL}/https://secure.splitwise.com/api/v3.0`
});
authAxios.interceptors.request.use(function (config) {
  const splitwiseAuthPayload = localStore.getData(
    SplitwiseAuthProvider.LOCAL_STORE_KEY
  );
  if (!splitwiseAuthPayload) {
    throw new Error("Missing Authentication Keys");
  }
  config.headers.Authorization = `${splitwiseAuthPayload.tokenType} ${splitwiseAuthPayload.accessToken}`;
  return config;
});

export default {
  unAuthAxios,
  authAxios
};
