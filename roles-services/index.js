import express from 'express';

const app = express();
const port = 3002;

const roles = [
  { id: 1, name: 'Admin' },
  { id: 2, name: 'User' }
];

app.get('/roles', (req, res) => {
  res.json(roles);
});

app.listen(port, () => {
  console.log(`Role service listening on port ${port}`);
});