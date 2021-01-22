const express = require('express');
const path = require('path');
const {getGameRecentReviews, getCounts} = require('../database/queries.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/api/games/:id/reviews/:page/:filters', (req, res) => {
  getGameRecentReviews(req.params.id, req.params.page, (err, reviews) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(reviews);
    }
  });
});

app.get('/api/games/:id/summary/:filters', (req, res) => {
  var summaries = {};
  getCounts(req.params.id, false, (err, counts) => {
    if (err) {
      res.status(500).send(err);
    } else {
      summaries.overall = counts;
      getCounts(req.params.id, true, (err, recentCounts) => {
        if (err) {
          res.status(500).send(err);
        } else {
          summaries.recent = recentCounts;
          res.send(summaries);
        }
      });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});