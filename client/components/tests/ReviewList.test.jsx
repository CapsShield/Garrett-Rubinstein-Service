import React from 'react';
import renderer from 'react-test-renderer';
import ReviewList from '../ReviewList';

test('this test works', () => {
  const component = renderer.create(
    <ReviewList reviews={[]} />
  );
  expect(component).toBeDefined();
});