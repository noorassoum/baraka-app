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

/* GET /reservations/my */
export const getUserReservations = async (params = {}) => {
  const { data } = await API.get("/reservations/my", { params });
  return data;
};

/**
 * Upcoming reservations
 * status = reserved
 */
export const getUpcomingReservations = () =>
  getUserReservations({ status: "reserved" });

/**
 * Past reservations
 * status = completed + cancelled
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
