import React from 'react';

const ReviewEntry = ({ review }) => {
  return (
    <div className="review-entry">
      <div className="gradient-top-border">
      </div>
      <div className="review-user-info">
        <div className="user-info-ctn">
          <div className="avatar">
            <img className="avatar-img" src={review.user.avatarUrl} />
          </div>
          <div className="username">{review.user.username}</div>
          <div className="num-owned-games">{`${review.user.productsOwned} product${review.user.productsOwned !== 1 ? 's' : null} in account`}</div>
          <div className="num-reviews">{`${review.user.reviewsWritten} review${review.user.reviewsWritten !== 1 ? 's' : null}`}</div>
        </div>
      </div>
      <div className="review-info">
        <div className="review-header">
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
        </div>
        <div className="posted-date">{`posted: ${review.createdAt}`}</div>
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
      </div>
    </div>
  );
};

export default ReviewEntry;