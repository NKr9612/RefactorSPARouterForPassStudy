const express = require('express');
const cors = require('cors');

const app = express();

app.get('/api/customers', cors(), (req, res) => {
  const products = [
    {id: 1, nazwa: 'Czapka |', cena: '25zl'},
    {id: 2, nazwa: 'Rekawiczki |', cena: ' 30zl'},
    {id: 3, nazwa: 'Spodnie |', cena: '80zl'},
    {id: 4, nazwa: 'Dresy |', cena: '50zl'},
    {id: 5, nazwa: 'Buty |', cena: '200zl'},
  ];

  res.json(products);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);