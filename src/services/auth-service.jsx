import http from "../utils/http-client";

const login = (data) => {
  return http.post("/api/auth/login", data, {
    transformResponse: [
      (result) => {
        const parsed = JSON.parse(result);
        localStorage.setItem("authUser", JSON.stringify(parsed.data));
        return parsed;
      },
    ],
  });
};

const register = (data) => {
  return http.post("/api/auth/register", data);
};

const profile = () => {
  return http.post("/api/me");
};

const logout = () => {
  return http.get("/logout", null, {
    transformResponse: [
      (result) => {
        localStorage.removeItem("authUser");
        return JSON.parse(result);
      },
    ],
  });
};

const getAuthUser = () => {
  return JSON.parse(localStorage.getItem("authUser"));
};

const methods = {
  login,
  register,
  profile,
  logout,
  getAuthUser,
};

export default methods;
