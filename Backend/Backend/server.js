const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth'); // Adjust the path as needed
const router = express.Router();
require('dotenv').config();


const bcrypt = require('bcrypt');

router.post('/signup', async (req, res) => {
  const { password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Save the hashed password to the database
    const user = new User({ ...req.body, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error });
  }
});


const app = express();
app.use(cors());
app.use(express.json()); // To parse JSON bodies

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/savor_serve', {

});

// Use the auth routes
app.use('/api/auth', authRoutes);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});

app.get('/api/user', (req, res) => {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com'
  };
  res.json(user);
});
