import React, {useState} from 'react';
import styled from 'styled-components';

const FilterDropdown = (props) => {
  const changeHandler = (e) => {
    const filterType = e.target.getAttribute('data-type');
    const filter = props.content[e.target.getAttribute('data-index')];
    props.setFilters((filters) => {
      filters[filterType] = filter;
      return Object.assign({}, filters); //ensure it's a new object reference to force a re-render with  state update
    });
  };
  return (
    <DropdownMenu>
      <DropdownTitle>{props.title}</DropdownTitle>
      <DropdownContentContainer>
        <DropdownContent>
          {!props.content ? null : props.content.map((content, i) => {
            if (content.hideDropdown) {
              return null;
            }
            return (
              <ContentLine key={content.id}>
                <input type="radio" id={content.id} value={content.value} checked={props.filters[props.type].value === content.value} onChange={changeHandler} data-index={i} data-type={props.type} disabled={content.disabled}/>
                <ContentLabel htmlFor={content.id}>
                  {content.label}
                  {!content.dataFromProps ? null :
                    <ContentData>({
                      !Array.isArray(content.dataFromProps) ? props[content.dataFromProps] :
                        content.dataFunction(...(
                          content.dataFromProps.map(prop => props[prop])
                        ))
                    })</ContentData>
                  }
                </ContentLabel>
                {!content.tooltip ? null : (
                  <TooltipContainer>
                    <TooltipText>{content.tooltip}</TooltipText>
                  </TooltipContainer>
                )}
              </ContentLine>
            );
          })}
          {props.postContent ? props.postContent : null}
        </DropdownContent>
      </DropdownContentContainer>
    </DropdownMenu>
  );
};

const DropdownMenu = styled.div`
  position: relative;
  text-transform: uppercase;
  font-size: 10px;
  color: #4582a5;
  padding-right: 10px;
  border-left: 1px solid #2a475e;
  &:hover {
    background-color: #c6d4df;
  }
`;
const DropdownTitle = styled.div`
  background-image: url(assets/btn_arrow_down_padded.png);
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: right;
  cursor: pointer;
  padding: 10px 20px 10px 10px;
  ${DropdownMenu}:hover & {
    background-image: url(assets/btn_arrow_down_padded_black.png);
  }
`;
const DropdownContentContainer = styled.div`
  position: absolute;
  visibility: hidden;
  background-color: #c6d4df;
  padding: 10px;
  color: #556772;
  line-height: 20px;
  z-index: 10;
  width: auto;
  ${DropdownMenu}:hover & {
    visibility: visible;
  }
`;
const DropdownContent = styled.div`
  text-transform: none;
`;
const ContentLine = styled.div`
  display: flex;
  font-size: 12px;
`;
const ContentLabel = styled.label`
  white-space: nowrap;
`;
const ContentData = styled.span`
  margin-left: 2px;
  color: #7193a6;
`;
const TooltipContainer = styled.div`
  height: 14px;
  width: 12px;
  margin-left: 2px;
  margin-top: 1px;
  background-image: url('assets/icon_questionmark_dark.png');
  background-repeat: no-repeat;
  position: relative;
`;
const TooltipText = styled.div`
  position: absolute;
  bottom: 160%;
  width: 285px;
  color: rgb(52, 52, 54);
  font-size: 11px;
  padding: 3px 5px;
  border: 1px #fff none;
  border-radius: 3px;
  background-color: rgb(194, 194, 194);
  visibility: hidden;
  box-shadow: 0 0 5px #000;
  text-shadow: none;
  font-weight: 300;
  line-height: initial;
  white-space: pre-line;
  ${TooltipContainer}:hover & {
    visibility: visible;
  }
`;
export default FilterDropdown;