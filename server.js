const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Middleware to parse JSON
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/fitnesswala', {  

  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error(' MongoDB error:', err));

// Route imports
const userRoutes = require('./routes/userRoutes');
const mealRoutes = require('./routes/mealRoutes');
const exerciseRoutes = require('./routes/exerciseRoutes');
const postRoutes = require('./routes/postRoutes');  // <-- Community route

// Route registration
app.use('/api/users', userRoutes);
app.use('/api/meals', mealRoutes);
app.use('/api/exercises', exerciseRoutes);
app.use('/api/community', postRoutes);  // <-- Community route registered

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
