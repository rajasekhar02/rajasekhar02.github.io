import axios from 'axios';
const CONSTANTS = {
  SPACE_ID: import.meta.env.VITE_SPACE_ID,
  ENVIRONMENT: import.meta.env.VITE_ENVIRONMENT,
  CONTENT_DELIVERY_SECRET: import.meta.env.VITE_CONTENT_DELIVERY_SECRET
}
// import localStore from 'src/utils/localStore.js';
// Set config defaults when creating the instance
export const authAxios = axios.create({
  baseURL: `https://graphql.contentful.com/content/v1/spaces/${CONSTANTS.SPACE_ID}/environments/${CONSTANTS.ENVIRONMENT}`,
});
authAxios.interceptors.request.use(function (config) {
  // const contentfulCreds = CONSTANTS.CONTENT_DELIVERY_SECRET;
  config.headers.Authorization = `Bearer ${CONSTANTS.CONTENT_DELIVERY_SECRET}`;
  return config;
});
authAxios.interceptors.response.use(function ({ data, status, statusText }) {
  return { data, status, statusText };
});
export default {
  authAxios,
};
