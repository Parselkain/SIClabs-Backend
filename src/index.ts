import express from "express";
import cors from "cors";
import 'dotenv/config';
import "./models/User";
import "./services/passport";
import {configureAuthRoutes} from "./routes/authRoutes";
import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URI!);

const app = express();
configureAuthRoutes(app);

const PORT = process.env.PORT;

// Middleware
app.use(cors({
  origin: process.env.FE_DOMAIN, 
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));
app.use(express.json());

app.listen(PORT);
