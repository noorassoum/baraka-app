import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

const authHeader = () => ({
   Authorization: `Bearer ${localStorage.getItem("token")}`,
});

export const getVendorProfile = async () => {
  const res = await API.get("/vendors/me", { headers: authHeader() });
  return res.data;
};

export const updateVendorProfile = async (data) => {
  const res = await API.put("/vendors/me", data, {
    headers: authHeader(),
  });
  return res.data;
};
