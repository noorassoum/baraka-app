import Reservation from "../models/Reservation.js";

export const createReservation = async (req, res) => {
  try {
    const { boxId, vendorId } = req.body;

    const reservation = await Reservation.create({
      boxId,
      vendorId,
      customerId: req.user.id
    });

    res.json(reservation);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getMyReservations = async (req, res) => {
  try {
    const list = await Reservation.find({ customerId: req.user.id })
      .populate("boxId");

    res.json(list);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
