import express from 'express';

const app = express();
const port = 3001;

const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' }
];

app.get('/users', (req, res) => {
  res.json(users);
});

app.listen(port, () => {
  console.log(`User service listening on port ${port}`);
});