"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3001;
// Middleware
app.use((0, cors_1.default)({
    origin: 'https://your-frontend-url.vercel.app', // Sostituisci con il tuo URL frontend
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));
app.use(express_1.default.json());
app.get('/api/data', (req, res) => {
    res.json([{ titolo: "gino" }]);
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
