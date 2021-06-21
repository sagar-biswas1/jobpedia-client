export const setUser = (payload) => {
  return { type: "USER_LOGIN_INFO", payload };
};

export const removeUser = (payload) => {
  return { type: "USER_LOGOUT", payload };
};
