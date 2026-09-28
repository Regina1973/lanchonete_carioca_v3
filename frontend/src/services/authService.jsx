import api from "./api";

export const authService = {
  login: async (email, password) => {
    const response = await api.post("/auth/login", {
      email,
      password,
    });

    return response.data;
  },

  logout: () => {
    localStorage.removeItem("lc_user");
    localStorage.removeItem("lc_token");
  },
};

export default authService;