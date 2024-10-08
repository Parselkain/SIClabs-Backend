import express from "express";
import cors from "cors";

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// API endpoint
app.get("/api/data", (req, res) => {
  res.json([{ titolo: "gino" }]);
});

// Avvia il server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
