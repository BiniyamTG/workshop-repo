const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const machineRoutes = require('./routes/machine'); // Assuming you have this route

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
app.use(express.json());

// Define routes
app.use('/api/auth', authRoutes); // This will now handle both registration and login
app.use('/api/machines', machineRoutes); // Ensure this route is defined

const PORT = process.env.PORT || 7001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


const cors = require('cors');
app.use(cors()); // Allow requests from your React frontend
