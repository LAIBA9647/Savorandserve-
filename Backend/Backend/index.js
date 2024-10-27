const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
require('dotenv').config(); // To read .env file

const app = express();

// Middleware
app.use(express.json()); // Parse incoming JSON requests
app.use(cors({
    origin: 'http://localhost:3000', // Replace with your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify the allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Specify the allowed headers
    credentials: true // Allow credentials (cookies, authorization headers)
}));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

// User model (make sure to create this model in a separate file)
const UserSchema = new mongoose.Schema({
    username: String,
    email: { type: String, unique: true },
    mobile: String,
    gender: String,
    country: String,
    role: String,
    password: String,
});

const User = mongoose.model('User', UserSchema);

// Signup route
app.post('/api/signup', async (req, res) => {
    const { username, email, mobile, gender, country, role, password } = req.body;

    console.log('Received data:', req.body); // Check the data received

    // Validate incoming data
    if (!username || !email || !password) {
        return res.status(400).json({ message: 'All fields are required!' });
    }

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password and save the user
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            username,
            email,
            mobile,
            gender,
            country,
            role,
            password: hashedPassword,
        });

        await newUser.save();
        return res.status(201).json({ message: 'User registered successfully!' });
    } catch (error) {
        console.error('Error saving user:', error);
        return res.status(500).json({ message: 'Registration failed. Please try again later.' });
    }
});

// Basic route for testing
app.get('/', (req, res) => {
    res.send('Server is running...');
});

app.get("/getdata",(req, res) =>{
    res.send("its working");
})


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
