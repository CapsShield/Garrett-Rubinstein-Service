import React from 'react';

const ReviewEntry = (props) => {
  return (
    <div className="review-entry">
      <div className="gradient-top-border">
      </div>
      <div className="review-user-info">
        <div className="user-info-ctn">
          <div className="avatar">
            <img src="http://placecorgi.com/32/32" />
          </div>
          <div className="username">Dr Latency</div>
          <div className="num-owned-games">147 products in account</div>
          <div className="num-reviews">6 reviews</div>
        </div>
      </div>
      <div className="review-info">
        <div className="review-header">
          <div className="rec-thumb">
            <img src="assets/thumbUp.png" />
          </div>
          <div className="review-header-text">
            <div className="rec-text">Recommended</div>
            <div className="hours">19.8 hrs on record</div>
          </div>
          <div className="review-source">
            <img src="assets/icon_review_steam.png" />
          </div>
        </div>
        <div className="posted-date">posted: december 26, 2020</div>
        <div className="review-content">
          This game is extremely clever, I can't imagine how they came up with some of these puzzles, and you'll have to be clever to work it all out, which certainly took me a while. However, the time spent puzzling in this psychedelic world is very pleasant and relaxing, as the humming ambience makes you feel like you've been transported to another dimension.
        </div>
        <div className="review-content-end"></div>
        <div className="vote-controls">
          <div className="vote-prompt">Was this review helpful?</div>
          <div className="vote-btn-ctn">
            <div className="vote-btn vote-btn-helpful">
              <i className="icon-helpful"></i>
              <span className="vote-btn-text">Yes</span>
            </div>
            <div className="vote-btn vote-btn-unhelpful">
              <i className="icon-unhelpful"></i>
              <span className="vote-btn-text">No</span>
            </div>
            <div className="vote-btn vote-btn-funny">
              <i className="icon-funny"></i>
              <span className="vote-btn-text">Funny</span>
            </div>
            <div className="vote-btn vote-btn-award">
              <img className="icon-award" src="assets/award_icon.svg"></img>
              <span className="vote-btn-text">Award</span>
            </div>
          </div>
        </div>
        <div className="vote-info">
          <div className="helpful-count">6 people found this review helpful</div>
          <div className="funny-count">1 person found this review funny</div>
        </div>
      </div>
    </div>
  );
};

export default ReviewEntry;