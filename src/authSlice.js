import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("access_token", action.payload); // Simpan token di localStorage
    },
    clearToken: (state) => {
      state.token = null;
      localStorage.removeItem("access_token"); // Hapus token dari localStorage saat logout
    },
  },
});

export const { setToken, clearToken } = authSlice.actions;
export default authSlice.reducer;
