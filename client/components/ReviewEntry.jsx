import React, {useState} from 'react';
import styled from 'styled-components';
const moment = require('moment');

import thumbUp from '../assets/thumbUp.png';
import thumbDown from '../assets/thumbDown.png';
import vaporPurchase from '../assets/icon_review_steam.png';
import otherPurchase from '../assets/icon_review_key.png';
import gradientBorder from '../assets/maincol_gradient_rule.png';
import icons from '../assets/icons_16.png';
import awardIcon from '../assets/award_icon.svg';


const ReviewEntry = ({ review }) => {
  const [collapsed, setCollapsed] = useState(review.reviewText.length > 660);

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
          <RecThumb className="rec-thumb">
            <img src={review.positive ? thumbUp : thumbDown} />
          </RecThumb>
          <ReviewHeaderText className="review-header-text">
            <RecText className="rec-text">{review.positive ? 'Recommended' : 'Not Recommended'}</RecText>
            <RecHours className="rec-hours">
              {`${review.hoursPlayed} hrs on record
              ${review.hoursPlayed === review.hoursWhenReviewed ? '' : ` (${review.hoursWhenReviewed} hrs at review time)`}`}
            </RecHours>
          </ReviewHeaderText>
          <ReviewSource className="review-source">
            <img src={review.purchasedOnVapor ? vaporPurchase : otherPurchase} />
          </ReviewSource>
        </ReviewHeader>
        <PostedDate className="posted-date">{`posted: ${moment(new Date(review.createdAt)).format('MMMM D, YYYY')}`}</PostedDate>
        <ReviewContent className="review-content" collapsed={collapsed}>
          {review.reviewText}
          {collapsed ? <CollapsedGradient/> : null}
        </ReviewContent>
        {collapsed ? <Expander><ExpanderText onClick={() => setCollapsed(false)}>read more</ExpanderText></Expander> : <ReviewContentEnd className="review-content-end"></ReviewContentEnd>}
        <VoteControls className="vote-controls">
          <VotePrompt className="vote-prompt">Was this review helpful?</VotePrompt>
          <VoteButtonContainer className="vote-btn-ctn">
            <VoteButton className="vote-btn vote-btn-helpful">
              <IconHelpful className="icon-16 icon-helpful"></IconHelpful>
              <VoteButtonText className="vote-btn-text">Yes</VoteButtonText>
            </VoteButton>
            <VoteButton className="vote-btn vote-btn-unhelpful">
              <IconUnhelpful className="icon-16 icon-unhelpful"></IconUnhelpful>
              <VoteButtonText className="vote-btn-text">No</VoteButtonText>
            </VoteButton>
            <VoteButton className="vote-btn vote-btn-funny">
              <IconFunny className="icon-16 icon-funny"></IconFunny>
              <VoteButtonText className="vote-btn-text">Funny</VoteButtonText>
            </VoteButton>
            <VoteButton className="vote-btn vote-btn-award">
              <IconAward className="icon-award" src={awardIcon}></IconAward>
              <VoteButtonText className="vote-btn-text">Award</VoteButtonText>
            </VoteButton>
          </VoteButtonContainer>
        </VoteControls>
        <VoteInfo className="vote-info">
          <div className="helpful-count">{`${review.helpfulVotes} ${review.helpfulVotes === 1 ? 'person' : 'people'} found this review helpful`}</div>
          <div className="funny-count">{`${review.funnyVotes} ${review.funnyVotes === 1 ? 'person' : 'people'} found this review funny`}</div>
        </VoteInfo>
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
  background-image: url(${gradientBorder});
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
const RecThumb = styled.div`
  margin-right: 10px;
`;
const ReviewHeaderText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const RecText = styled.div`
  font-size: 16px;
  line-height: 19px;
  padding-top: 3px;
`;
const RecHours = styled.div`
  font-size: 11px;
  color: #8091a2;
  opacity: 0.6;
  font-weight: 300;
  line-height: 15px;
`;
const ReviewSource = styled.div`
  justify-self: flex-end;
  margin-right: 5px;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
`;
const PostedDate = styled.div`
  text-transform: uppercase;
  color: #8091a2;
  opacity: 0.6;
  font-size: 10px;
  margin-bottom: 8px;
`;
const ReviewContent = styled.div`
  font-size: 13px;
  margin-right: 8px;
  line-height: 17px;
  color: #acb2b8;
  overflow-wrap: break-word;
  white-space: pre-line;
  overflow-y: hidden;
  height: ${props => props.collapsed ? '225px;' : 'auto;'}
  position: relative;
`;
const CollapsedGradient = styled.div`
  height: 30px;
  width: 100%;
  position: absolute;
  bottom: 0;
  background: linear-gradient( to bottom, rgba( 22,32,45,0) 5%, rgba( 22,32,45,.95) 95%);
  z-index: 5;
`;
const Expander = styled.div`
  border-bottom: 1px #363f4c solid;
  height: 30px;
  padding-top: 10px;
  padding-bottom: 8px;
  color: #67c1f5;
  text-transform: uppercase;
  display: flex;
  justify-content: flex-end;
  margin-right: 1px;
`;
const ExpanderText = styled.div`
  font-size: 10px;
  margin-right: 18px;
  cursor: pointer;
`;
const ReviewContentEnd = styled.div`
  height: 12px;
  border-bottom: 1px #363f4c solid;
  margin-right: 1px;
`;
const VoteControls = styled.div`
  margin: 8px 0px;
`;
const VotePrompt = styled.div`
  color: #8091a2;
  font-size: 12px;
  opacity: 0.6;
`;
const VoteButtonContainer = styled.div`
  display: flex;
  padding-top: 10px;
  padding-bottom: 5px;
`;
const VoteButton = styled.div`
  height: 22px;
  background-color: #212c3d;
  color: #66c0f4;
  font-size: 12px;
  padding: 0px 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 1px;
  border: 2px #212c3d none;
  border-radius: 2px;
  cursor: pointer;
  &:hover {
    color: #fff;
    background: #66c0f4;
  }
`;
const VoteButtonText = styled.span`
  text-align: center;
  vertical-align: center;
  margin-left: 2px;
`;
const Icon16 = styled.i`
  height: 16px;
  width: 16px;
  background-image: url(${icons});
  background-clip: border-box;
`;
const IconHelpful = styled(Icon16)`
  background-position: -112px -16px;
  ${VoteButton}:hover & {
    background-position: -144px -16px;
  }
`;
const IconUnhelpful = styled(Icon16)`
  background-position: -64px -16px;
  ${VoteButton}:hover & {
    background-position: -80px -16px;
  }
`;
const IconFunny = styled(Icon16)`
  background-position: -208px -16px;
  ${VoteButton}:hover & {
    background-position: -224px -16px;
  }
`;
const IconAward = styled.img`
  height: 16px;
`;
const VoteInfo = styled.div`
  color: #647580;
  font-size: 12px;
  margin-bottom: 8px;
`;

export default ReviewEntry;