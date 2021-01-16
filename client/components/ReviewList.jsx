import React from 'react';
import ReviewEntry from './ReviewEntry.jsx';

const ReviewList = (props) => {
  console.log(props);
  return props.reviews.map((review) => (
    <ReviewEntry review={review} key={review.id}/>
  ));
};

export default ReviewList;