import { NextFunction, Request, Response } from "express";
import { ReservationModel } from "../model/reservation.model";
import mongoose from "mongoose";

export const createReservation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const reservation = await ReservationModel.create(req.body);
    res.status(201).json(reservation);
  } catch (error) {
    next(error);
  }
};

export const getReservation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { skip, limit } = req.query;
    const reservations = await ReservationModel.find({ skip, limit });
    res.status(200).json(reservations);
  } catch (error) {
    next(error);
  }
};

export const getReservationById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { reservationId } = req.params;
    const _id = new mongoose.Types.ObjectId(reservationId);
    const reservation = await ReservationModel.findById(_id);
    if (!reservation) {
       res.status(404).json("document not found");
    }else{
        res.status(200).json(reservation);
    }
  } catch (error) {
    next(error);
  }
};
export const deleteReservation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { reservationId } = req.params;
    const _id = new mongoose.Types.ObjectId(reservationId);
    const reservation = await ReservationModel.findByIdAndDelete(_id);
    if(!reservation){
        res.status(404).send();
    }else{
        res.status(200).json(reservation)
    }
    res.status(200).json(reservation);
  } catch (error) {
    next(error);
  }
};

export const updateReservation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { reservationId } = req.params;
    const newReservation = req.body;
    const reservation = await ReservationModel.findByIdAndUpdate(
      reservationId,
      newReservation,
      {
        new: true,
        useFindAndModify: false,
      }
    );
    if(!reservation){
        res.status(404).json("document not found")
    }else{
        res.status(200).json(reservation);
    }
  } catch (error) {
    next(error);
  }
};
