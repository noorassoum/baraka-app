import { useState } from "react";
import {
  getUpcomingReservations,
  getPastReservations,
} from "./reservations.api";

export const useReservations = () => {
  const [upcoming, setUpcoming] = useState([]);
  const [past, setPast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUpcoming = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await getUpcomingReservations();
      setUpcoming(data.reservations || []);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchPast = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await getPastReservations();
      setPast(data.reservations || []);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    upcoming,
    past,
    loading,
    error,
    fetchUpcoming,
    fetchPast,
  };
};
