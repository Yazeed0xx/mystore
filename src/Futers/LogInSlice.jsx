// LogInSlice.jsx
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoggedIn: false,
  username: "", // إضافة حالة لتخزين اسم المستخدم
};
const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.username = action.payload.username; // تحديث اسم المستخدم
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.username = localStorage.getItem("username"); // تفريغ اسم المستخدم عند تسجيل الخروج
    },
  },
});
export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
