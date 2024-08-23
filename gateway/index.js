import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3000;

// Endpoint to fetch user data
app.get('/users', async (req, res) => {
  try {
    const response = await axios.get(process.env.USER_SERVICE_URL);
    res.json(response.data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to fetch user data' });
  }
});

// Endpoint to fetch role data
app.get('/roles', async (req, res) => {
  try {
    const response = await axios.get(process.env.ROLES_SERVICE_URL);
    res.json(response.data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to fetch role data' });
  }
});

// Endpoint to fetch staff data
app.get('/staff', async (req, res) => {
  try {
    const response = await axios.get(process.env.STAFF_SERVICE_URL);
    res.json(response.data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to fetch staff data' });
  }
});

// Endpoint to fetch staff data
app.get('/', async (req, res) => {
  try {
    res.json('testing');
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.listen(port, () => {
  console.log(`Gateway service listening on port ${port}`);
});