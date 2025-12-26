import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

const authHeader = () => {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export const getMyProfile = async () => {
  const res = await API.get("/customers/me", {
    headers: authHeader(),
  });
  return res.data;
};

export const updateMyProfile = async (data) => {
  const res = await API.put("/customers/me", data, {
    headers: authHeader(),
  });
  return res.data;
};
