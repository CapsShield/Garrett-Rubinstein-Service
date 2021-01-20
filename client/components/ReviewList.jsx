import React from 'react';
import ReviewEntry from './ReviewEntry.jsx';

const ReviewList = (props) => {
  if (props.reviews.length === 0) {
    return <div className="no-reviews">
      <div>There are no more reviews that match the filters set above</div>
      <div>Adjust the filters above to see other reviews</div>
    </div>;
  }

  return props.reviews.map((review) => (
    <ReviewEntry review={review} key={review.id}/>
  ));
};

export default ReviewList;