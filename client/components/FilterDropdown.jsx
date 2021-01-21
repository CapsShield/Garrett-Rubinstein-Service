import React, {useState} from 'react';
import styled from 'styled-components';

const FilterDropdown = (props) => {
  const [selected, setSelected] = useState(props.content ? props.content[props.default || 0].value : null);
  const changeHandler = (e) => setSelected(e.target.value);
  return (
    <DropdownMenu>
      <DropdownTitle>{props.title}</DropdownTitle>
      <DropdownContentContainer>
        <DropdownContent>
          {!props.content ? null : props.content.map(content => {
            return (
              <ContentLine key={content.id}>
                <input type="radio" id={content.id} value={content.value} checked={selected === content.value} onChange={changeHandler}/>
                <ContentLabel htmlFor={content.id}>
                  {content.label}
                  {content.data ? <ContentData>({content.data})</ContentData> : null}
                </ContentLabel>
                {!content.tooltip ? null : (
                  <TooltipContainer>
                    <TooltipText>{content.tooltip}</TooltipText>
                  </TooltipContainer>
                )}
              </ContentLine>
            );
          })}
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
  height: 35px;
  color: rgb(52, 52, 54);
  font-size: 12px;
  padding: 3px 5px;
  border: 1px #fff none;
  border-radius: 3px;
  background-color: rgb(194, 194, 194);
  visibility: hidden;
  box-shadow: 0 0 5px #000;
  text-shadow: none;
  font-weight: 300;
  line-height: initial;
  ${TooltipContainer}:hover & {
    visibility: visible;
  }
`;
export default FilterDropdown;