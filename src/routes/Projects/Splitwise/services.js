import { unAuthAxios, authAxios } from "./axiosConfig";
import CREDENTIALS from "./credentials.json";
// unauth apis
export const getAccessToken = function (code) {
  const params = new URLSearchParams();
  [
    ["client_id", CREDENTIALS.CLIENT_ID],
    ["client_secret", CREDENTIALS.CLIENT_SECRET],
    ["grant_type", "authorization_code"],
    ["code", code],
    ["redirect_uri", CREDENTIALS.REDIRECT_URI]
  ].forEach(([item, value]) => {
    params.append(item, value);
  });
  console.log(JSON.stringify(params));
  return unAuthAxios.post("/oauth/token", params);
};

// authentication needed apis
export const getCurrentUser = function () {
  return authAxios.get("/get_current_user");
};
export const getCurrentUserGroups = function () {
  return authAxios.get("/get_groups");
};
export const getExpensesWithFriendId = function (friendId, params) {
  return authAxios.get("/get_expenses", {
    params: { friend_id: friendId, ...params }
  });
};
export default {
  getAccessToken,
  getCurrentUser,
  getCurrentUserGroups,
  getExpensesWithFriendId
};
