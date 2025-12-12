import Notification from "../models/Notification.js";

export const sendNotification = async (userId, title, message, type = "system") => {
  await Notification.create({
    userId,
    title,
    message,
    type
  });
};
// Integrate notifications in your existing controllers
// Example:
// when a customer reserves a box:
// sendNotification(vendorId, "New Reservation", "A customer reserved one of your boxes", "reservation");
