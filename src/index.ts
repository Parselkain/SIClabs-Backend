import express from "express";
import cors from "cors";
import 'dotenv/config';
import "./services/passport";
import {configureAuthRoutes} from "./routes/authRoutes";

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
