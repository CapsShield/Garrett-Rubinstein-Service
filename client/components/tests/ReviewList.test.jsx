import React from 'react';
import {shallow} from '../../enzyme';
import ReviewList from '../ReviewList';
import ReviewEntry from '../ReviewEntry';


describe('ReviewList tests', () => {
  it('should only render a no-reviews div when review array is empty', () => {
    const reviews = [];
    const wrapper = shallow(<ReviewList reviews={reviews}/>);
    expect(wrapper.find('.no-reviews')).toHaveLength(1);
    expect(wrapper.find(ReviewEntry)).toHaveLength(0);
  });
  it('should only render ReviewEntries equal to the length of the passed in review array', () => {
    const reviews = [{id: 0}, {id: 1}, {id: 2}, {id: 3}, {id: 4}];
    const wrapper = shallow(<ReviewList reviews={reviews}/>);
    expect(wrapper.find(ReviewEntry)).toHaveLength(5);
    expect(wrapper.find('.no-reviews')).toHaveLength(0);
  });
});