const express = require('express');
const path = require('path');
const {getGameRecentReviews} = require('../database/queries.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/api/games/:id/reviews/:page', (req, res) => {
  getGameRecentReviews(req.params.id, req.params.page, (err, reviews) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(reviews);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});