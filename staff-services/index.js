import express from 'express';

const app = express();
const port = 3003;

const staff = [
  { id: 1, name: 'Alice Johnson', roleId: 1 },
  { id: 2, name: 'Bob Williams', roleId: 2 }
];

app.get('/staff', (req, res) => {
  res.json(staff);
});

app.listen(port, () => {
  console.log(`Staff service listening on port ${port}`);
});