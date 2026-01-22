import axios from "axios";

const API = axios.create({
  baseURL: "/api",
});

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
   CUSTOMER
====================================================== */

/**
 * Reserve a box
 * POST /reservations
 */
export const reserveBox = async (boxId) => {
  const { data } = await API.post("/reservations", { boxId });
  return data;
};

/**
 * Get my reservations (with filters)
 */
export const getUserReservations = async (params = {}) => {
  const { data } = await API.get("/reservations/my", { params });
  return data;
};

/**
 * Upcoming reservations
 */
export const getUpcomingReservations = async () =>
  getUserReservations({ status: "reserved" });

/**
 * Past reservations
 */
export const getPastReservations = async () => {
  const [completed, cancelled] = await Promise.all([
    getUserReservations({ status: "completed" }),
    getUserReservations({ status: "cancelled" }),
  ]);

  return {
    ...completed,
    reservations: [
      ...(completed.reservations || []),
      ...(cancelled.reservations || []),
    ],
  };
};

/**
 * Cancel reservation
 */
export const cancelReservation = async (id) => {
  const { data } = await API.patch(`/reservations/${id}/cancel`);
  return data;
};

/**
 * Get latest reservation (for success screen)
 */
export const getLatestReservation = async () => {
  const res = await API.get("/reservations/my", {
    params: { status: "reserved", limit: 1 },
  });
  return res.data.reservations?.[0];
};

/* ======================================================
   VENDOR
====================================================== */

/**
 * Vendor – get all reservations
 */
export const getVendorReservations = async () => {
  const res = await API.get("/reservations/vendor");
  return res.data.reservations;
};

/**
 * Vendor – confirm pickup
 */
export const completeReservation = async (id) => {
  const res = await API.patch(`/reservations/${id}/complete`);
  return res.data;
};
