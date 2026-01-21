import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

const authHeader = () => ({
  Authorization: `Bearer ${localStorage.getItem("token")}`,
});

/* ============================
   CUSTOMER (PUBLIC)
============================ */

// Customer home / search
export const getAvailableBoxes = async () => {
  const res = await API.get("/boxes/available");
  return res.data.boxes;
};

/* ============================
   VENDOR (PRIVATE)
============================ */

// Vendor – My Boxes
export const getMyBoxes = async () => {
  const res = await API.get("/boxes/my-boxes", {
    headers: authHeader(),
  });
  return res.data.boxes;
};

// Vendor – Create box
export const createBox = async (data) => {
  const res = await API.post("/boxes", data, {
    headers: authHeader(),
  });
  return res.data.box;
};

// Vendor – Update box
export const updateBox = async (id, data) => {
  const res = await API.put(`/boxes/${id}`, data, {
    headers: authHeader(),
  });
  return res.data.box;
};

export const getBoxById = async (id) => {
  const res = await API.get(`/boxes/${id}`, {
    headers: authHeader(),
  });
  return res.data.box;
};

// Vendor – Delete box
export const deleteBox = async (id) => {
  await API.delete(`/boxes/${id}`, {
    headers: authHeader(),
  });
};

// Vendor – Toggle availability
export const toggleBoxAvailability = async (id) => {
  const res = await API.patch(
    `/boxes/${id}/toggle`,
    {},
    { headers: authHeader() }
  );
  return res.data.box;
};
