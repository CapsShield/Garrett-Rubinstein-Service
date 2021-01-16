import React from 'react';

const ReviewEntry = (props) => {
  return (
    <div className="review-entry">
      <div className="gradient-top-border"></div>
      <div className="review-user-info">
        <div className="avatar"></div>
        <div className="username"></div>
        <div className="num-owned-games"></div>
        <div className="num-reviews"></div>
      </div>
      <div className="review-info">
        <div className="review-header">
          <div className="rec-thumb"></div>
          <div className="review-header-text">
            <div className="rec-text"></div>
            <div className="hours"></div>
          </div>
          <div className="review-source"></div>
        </div>
        <div className="posted-date"></div>
        <div className="review-content"></div>
        <div className="review-content-end"></div>
        <div className="vote-controls">
          <div className="vote-prompt"></div>
          <div className="vote-btn-ctn">
            <div className="vote-btn vote-btn-helpful"></div>
            <div className="vote-btn vote-btn-unhelpful"></div>
            <div className="vote-btn vote-btn-funny"></div>
            <div className="vote-btn vote-btn-award"></div>
          </div>
        </div>
        <div className="vote-info">
          <div className="helpful-count"></div>
          <div className="funny-count"></div>
        </div>
      </div>
    </div>
  );
};

export default ReviewEntry;