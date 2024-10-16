import express, { NextFunction, Request, Response } from 'express'
import reservationRoutes from './routes/reservation.routes';
import { connect } from './db/mongodb.connect';
import cors from "cors"
const app = express();

// connect with DB
connect();
app.use(cors())
app.use(express.json());

app.use("/reservations",reservationRoutes);


app.use((error: Error, req: Request, res: Response, next: NextFunction)=>{
  res.status(500).json({message: error.message})
})



export default app;