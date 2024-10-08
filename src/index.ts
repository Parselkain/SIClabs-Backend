import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: 'https://your-frontend-url.vercel.app',  // Sostituisci con il tuo URL frontend
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));
app.use(express.json());

app.get('/api/data', (req, res) => {
  res.json([{ titolo: "gino" }]);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
