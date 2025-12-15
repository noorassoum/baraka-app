import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// REGISTER CUSTOMER
export const registerCustomer = async (data) => {
  const res = await API.post("/customers/register", data);
  return res.data;
};

// LOGIN CUSTOMER
export const loginCustomer = async (data) => {
  const res = await API.post("/customers/login", data);
  return res.data;
};

// LOGIN VENDOR (optional)
export const loginVendor = async (data) => {
  const res = await API.post("/vendors/login", data);
  return res.data;
};
