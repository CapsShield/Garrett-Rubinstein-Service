import React, {useState, useEffect} from 'react';
import ReviewList from './Reviewlist.jsx';
import SummaryBar from './SummaryBar.jsx';


const App = (props) => {
  var [reviews, setReviews] = useState([]);
  var [overallSummary, setOverallSummary] = useState([0, 1]);
  var [recentSummary, setRecentSummary] = useState([0, 1]);
  useEffect(() => {
    //fetch page 0 of reviews
    fetch(`/api/games/${props.gameId || 1}/reviews/0`)
      .then(response => response.json())
      .then(parsed => setReviews(parsed.rows))
      .catch(err => console.error(err));

    fetch(`/api/games/${props.gameId || 1}/summary`)
      .then(response => response.json())
      .then(parsed => {
        setOverallSummary(parsed.overall);
        setRecentSummary(parsed.recent);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <SummaryBar />
      <ReviewList reviews={reviews}/>
    </div>
  );
};

export default App;