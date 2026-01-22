import axios from "axios";

/* ======================================================
   AXIOS INSTANCE
====================================================== */

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

/* ======================================================
   AUTH HEADER (AUTO)
====================================================== */

API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

/* ======================================================
   CUSTOMER – BOXES
====================================================== */

/**
 * Get available boxes (Home)
 * PUBLIC
 */
export const getAvailableBoxes = async () => {
  const res = await API.get("/boxes/available");
  return res.data.boxes;
};

/**
 * Get box details (Customer Box Details)
 * PUBLIC
 */
export const getBoxById = async (id) => {
  const res = await API.get(`/boxes/${id}`);
  return res.data.box;
};

/* ======================================================
   CUSTOMER – RESERVATIONS
====================================================== */

/**
 * Reserve a box
 * CUSTOMER AUTH
 */
export const reserveBox = async (boxId) => {
  const res = await API.post("/reservations", { boxId });
  return res.data;
};

/**
 * Get my reservations
 */
export const getMyReservations = async (params = {}) => {
  const res = await API.get("/reservations/my", { params });
  return res.data;
};

/**
 * Cancel reservation
 */
export const cancelReservation = async (id) => {
  const res = await API.patch(`/reservations/${id}/cancel`);
  return res.data;
};

/* ======================================================
   VENDOR – BOXES
====================================================== */

/**
 * Vendor – Get my boxes
 */
export const getMyBoxes = async () => {
  const res = await API.get("/boxes/my-boxes");
  return res.data.boxes;
};

/**
 * Vendor – Create box
 */
export const createBox = async (data) => {
  const res = await API.post("/boxes", data);
  return res.data.box;
};

/**
 * Vendor – Update box
 */
export const updateBox = async (id, data) => {
  const res = await API.put(`/boxes/${id}`, data);
  return res.data.box;
};

/**
 * Vendor – Delete box
 */
export const deleteBox = async (id) => {
  await API.delete(`/boxes/${id}`);
};

/**
 * Vendor – Toggle availability
 */
export const toggleBoxAvailability = async (id) => {
  const res = await API.patch(`/boxes/${id}/toggle`);
  return res.data.box;
};

/* ======================================================
   VENDOR – RESERVATIONS
====================================================== */

/**
 * Vendor – Get reservations
 */
export const getVendorReservations = async () => {
  const res = await API.get("/reservations/vendor");
  return res.data.reservations;
};

/**
 * Vendor – Complete reservation
 */
export const completeReservation = async (id) => {
  const res = await API.patch(`/reservations/${id}/complete`);
  return res.data;
};
