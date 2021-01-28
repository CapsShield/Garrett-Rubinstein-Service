require('dotenv').config();
const express = require('express');
const path = require('path');
const {getGameReviews, getCounts, getFilterTotal} = require('../database/queries.js');
const parseOptions = require('./utils/parseOptions.js');
const compression = require('compression');

const app = express();
const PORT = process.env.PORT || 3002;
app.use(compression());

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/api/games/:id/reviews/:page', (req, res) => {
  if (!req.query.sort) {
    req.query.sort = 'recent';
  }
  var {filters, sort} = parseOptions(req.query);
  getGameReviews(req.params.id, req.params.page, filters, sort, (err, reviews) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(reviews);
    }
  });
});

app.get('/api/games/:id/summary', (req, res) => {
  var summaries = {};
  var {filters} = parseOptions(req.query);
  getCounts(req.params.id, false, {}, (err, counts) => {
    if (err) {
      res.status(500).send(err);
    } else {
      summaries.overall = counts;
      getCounts(req.params.id, true, {}, (err, recentCounts) => {
        if (err) {
          res.status(500).send(err);
        } else {
          summaries.recent = recentCounts;
          getCounts(req.params.id, false, filters, (err, filteredCounts) => {
            if (err) {
              res.status(500).send(err);
            } else {
              summaries.filtered = filteredCounts;
              res.send(summaries);
            }
          });
        }
      });
    }
  });
});

app.get('/api/games/:id/summary/filterOnly', (req, res) => {
  var summaries = {};
  var {filters} = parseOptions(req.query);
  getCounts(req.params.id, false, filters, (err, counts) => {
    if (err) {
      res.status(500).send(err);
    } else {
      summaries.filtered = counts;
      res.send(summaries);
    }
  });
});

app.get('/api/games/:id/filterCounts', (req, res) => {
  const counts = {};
  getFilterTotal(req.params.id, {positive: true})
    .then((total) => counts.positive = total)
    .then(() => getFilterTotal(req.params.id, {purchasedOnVapor: true}))
    .then((total) => counts.vapor = total)
    .then(() => getFilterTotal(req.params.id, {languageId: 1}))
    .then((total) => counts.language = total)
    .then(() => res.send(counts))
    .catch(err => res.status(500).send(err));
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});