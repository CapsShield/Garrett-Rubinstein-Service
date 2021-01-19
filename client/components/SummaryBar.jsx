import React from 'react';

const SummaryBar = (props) => {
  return (
    <div className="summary-bar">
      <div className="overall-summary">
        <div className="summary-title">Overall Reviews:</div>
        <div className="summary-details">
          <div className="summary-score">Overwhelmingly Positive</div>
          <div className="summary-review-count">{`(${props.overallSummary[1]} review${props.overallSummary !== 1 ? 's' : null})`}</div>
          <div className="tooltip summary-tooltip"></div>
        </div>
      </div>
      <div className="recent-summary">
        <div className="summary-title">Recent Reviews:</div>
        <div className="summary-details">
          <div className="summary-score">Overwhelmingly Positive</div>
          <div className="summary-review-count">{`(${props.recentSummary[1]} review${props.recentSummary !== 1 ? 's' : null})`}</div>
          <div className="tooltip summary-tooltip"></div>
        </div>
      </div>
    </div>
  );
};

export default SummaryBar;