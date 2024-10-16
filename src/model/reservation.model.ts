import { model, Schema } from "mongoose";
import { IReservations } from "../interface/reservation";

const ReservationSchema = new Schema<IReservations>({
    guestName: { type: String, required: true },
    guestEmail: { type: String, required: true },
    checkInDate: {type: Date, required: true},
    checkOutDate: {type: Date, required: true},
    roomNumber: {type: Number, required: true}
});
  
export const ReservationModel = model<IReservations>('Reservation', ReservationSchema);