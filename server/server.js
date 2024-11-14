import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import roomsRoutes from './routes/rooms.js';
import usersRoutes from './routes/users.js';
import bookingsRouter from './routes/bookings.js';
import loginRoutes from './routes/login.js';
import { authRequired } from './middleware/auth.js';

const app = express();
dotenv.config();
const port = process.env.PORT;

// Configure CORS with options
const corsOptions = {
	origin: process.env.FRONTEND_URL, // Allow requests from your frontend's URL or all if not specified
	methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed HTTP methods
	credentials: true, // Allow credentials (cookies, authorization headers, etc.)
	allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
};

app.use(cors(corsOptions));
app.use(express.static('public'));
app.use(cookieParser());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

// app.get('*', authRequired);
app.use(loginRoutes);
app.use(roomsRoutes);
app.use(usersRoutes);
app.use(bookingsRouter);

try {
	await mongoose.connect(process.env.MONGODB_URI);
	app.listen(port, () => console.log(`Server is running on port: ${port}`));
} catch (error) {
	console.log(error);
}
