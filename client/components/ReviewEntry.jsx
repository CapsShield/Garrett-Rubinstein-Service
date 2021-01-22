import React from 'react';
import styled from 'styled-components';
const moment = require('moment');

const ReviewEntry = ({ review }) => {
  return (
    <ReviewEntryContainer className="review-entry">
      <GradientTopBorder className="gradient-top-border" />
      <ReviewUserInfo className="review-user-info">
        <UserInfoContainer className="user-info-ctn">
          <Avatar className="avatar">
            <AvatarImg className="avatar-img" src={review.user.avatarUrl} />
          </Avatar>
          <Username className="username">{review.user.username}</Username>
          <NumOwnedGames className="num-owned-games">{`${review.user.productsOwned} product${review.user.productsOwned !== 1 ? 's' : null} in account`}</NumOwnedGames>
          <NumReviews className="num-reviews">{`${review.user.reviewsWritten} review${review.user.reviewsWritten !== 1 ? 's' : null}`}</NumReviews>
        </UserInfoContainer>
      </ReviewUserInfo>
      <ReviewInfo className="review-info">
        <ReviewHeader className="review-header">
          <div className="rec-thumb">
            <img src={`assets/${review.positive ? 'thumbUp' : 'thumbDown'}.png`} />
          </div>
          <div className="review-header-text">
            <div className="rec-text">{review.positive ? 'Recommended' : 'Not Recommended'}</div>
            <div className="rec-hours">
              {`${review.user.games[0].usersgame.hoursPlayed} hrs on record
              ${review.user.games[0].usersgame.hoursPlayed === review.hoursWhenReviewed ? '' : ` (${review.hoursWhenReviewed} hrs at review time)`}`}
            </div>
          </div>
          <div className="review-source">
            <img src={`assets/${review.user.games[0].usersgame.purchasedOnSteam ? 'icon_review_steam' : 'icon_review_key'}.png`} />
          </div>
        </ReviewHeader>
        <div className="posted-date">{`posted: ${moment(new Date(review.createdAt)).format('MMMM D, YYYY')}`}</div>
        <div className="review-content">
          {review.reviewText}
        </div>
        <div className="review-content-end"></div>
        <div className="vote-controls">
          <div className="vote-prompt">Was this review helpful?</div>
          <div className="vote-btn-ctn">
            <div className="vote-btn vote-btn-helpful">
              <i className="icon-16 icon-helpful"></i>
              <span className="vote-btn-text">Yes</span>
            </div>
            <div className="vote-btn vote-btn-unhelpful">
              <i className="icon-16 icon-unhelpful"></i>
              <span className="vote-btn-text">No</span>
            </div>
            <div className="vote-btn vote-btn-funny">
              <i className="icon-16 icon-funny"></i>
              <span className="vote-btn-text">Funny</span>
            </div>
            <div className="vote-btn vote-btn-award">
              <img className="icon-award" src="assets/award_icon.svg"></img>
              <span className="vote-btn-text">Award</span>
            </div>
          </div>
        </div>
        <div className="vote-info">
          <div className="helpful-count">{`${review.helpfulVotes} ${review.helpfulVotes === 1 ? 'person' : 'people'} found this review helpful`}</div>
          <div className="funny-count">{`${review.funnyVotes} ${review.funnyVotes === 1 ? 'person' : 'people'} found this review funny`}</div>
        </div>
      </ReviewInfo>
    </ReviewEntryContainer>
  );
};

const ReviewEntryContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  display: grid;
  width: 616px;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 1px 1fr;
  margin-bottom: 24px;
`;
const GradientTopBorder = styled.div`
  height: 1px;
  grid-row: 1;
  grid-column: 1 / span 2;
  background-image: url("assets/maincol_gradient_rule.png");
`;
const ReviewUserInfo = styled.div`
  grid-column: 1;
  grid-row: 2;
  display: flex;
  flex-direction: column;
  padding: 8px;
  width: 200px;
`;
const UserInfoContainer = styled.div`
  display: grid;
  grid-template-columns: 44px 1fr;
  grid-template-rows: 19px 17px 12px;
  color: #7b8ea3;
  ${ReviewEntryContainer}:hover & {
    color: #C1DBF4;
  }
`;
const Avatar = styled.div`
  grid-row: 1 / span 2;
  grid-column: 1;
  padding: 2px;
  height: 36px;
  width: 36px;
  background-image: linear-gradient(rgb(83, 164, 196) 5%, rgb(69, 128, 151) 95%);
  background-clip: border-box;
`;
const AvatarImg = styled.img`
  height: 32px;
  width: 32px;
`;
const Username = styled.div`
  grid-row: 1;
  grid-column: 2;
  font-size: 13px;
  font-weight: bold;
  max-width: 140px;
  overflow: hidden;
  text-overflow: ellipsis;
  &:hover {
    cursor: pointer;
  }
`;
const NumOwnedGames = styled.div`
  grid-row: 2;
  grid-column: 2;
  font-size: 11px;
  width: fit-content;
  &:hover {
    cursor: pointer;
    color: #67c1f5;
  }
`;
const NumReviews = styled.div`
  grid-row: 3;
  grid-column: 1 / span 2;
  font-size: 11px;
  width: fit-content;
  &:hover {
    cursor: pointer;
    color: #67c1f5;
  }
`;
const ReviewInfo = styled.div`
  grid-column: 2;
  grid-row: 2;
  display: flex;
  flex-direction: column;
  margin-left: 14px;
  justify-content: center;
`;
const ReviewHeader = styled.div`
  display: flex;
  background-color: rgba(0, 0, 0, 0.2);
  margin-top: 8px;
  margin-bottom: 13px;
  height: 40px;
  &:hover {
    background-color: rgba( 255, 255, 255, 0.1 );
    cursor: pointer;
  }
`;
export default ReviewEntry;