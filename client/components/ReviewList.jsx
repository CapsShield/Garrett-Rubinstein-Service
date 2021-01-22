import React from 'react';
import ReviewEntry from './ReviewEntry.jsx';
import styled from 'styled-components';
import PageChanger from './PageChanger.jsx';

const ReviewList = (props) => {
  if (props.reviews.length === 0) {
    return <NoReviews className="no-reviews">
      <NoReviewsTitle>There are no more reviews that match the filters set above</NoReviewsTitle>
      <NoReviewsText>Adjust the filters above to see other reviews</NoReviewsText>
    </NoReviews>;
  }

  return <ReviewsContainer>
    {
      props.reviews.map((review) => (
        <ReviewEntry review={review} key={review.id} />
      ))
    }
    <PageChanger page={props.page} changePage={props.changePage} total={props.total} />
  </ReviewsContainer>;
};

const ReviewsContainer = styled.div`
  width: 616px;
`;
const NoReviews = styled.div`
  width: 616px;
  height: 124px;
  background-color: rgba( 0, 0, 0, 0.2 );
  background-image: url(assets/maincol_gradient_rule.png);
  background-repeat: no-repeat;
  background-position: top left;
`;
const NoReviewsTitle = styled.div`
  font-size: 16px;
  color: #67c1f5;
  text-align: center;
  padding-top: 30px;
  margin-bottom: 20px;
`;
const NoReviewsText = styled.div`
  font-size: 14px;
  color: #898A8C;
  text-align: center;
  padding-right: 16px;
  padding-left: 16px;
`;

export default ReviewList;