import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';



export const signUp = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, userData);
    console.log('Signup successful:', response.data);
    return response.data;
  } catch (error) {
    console.error('Signup failed:', error.response ? error.response.data : error.message);
  }
};


export const login = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data; // Return the response data
  } catch (error) {
    console.error("Login error:", error);
    throw error; // Rethrow for handling in the component
  }
};


export const getUserProfile = async () => {
  try {
    const response = await axios.get('/api/user/profile');
    return response.data;
  } catch (error) {
    console.error('Error fetching user profile:', error.response ? error.response.data : error.message);
    throw error;
  }
};

