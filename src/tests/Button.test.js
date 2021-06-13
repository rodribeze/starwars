import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../components/layouts/Button'
import { BrowserRouter as Router } from 'react-router-dom'

test('Button is render', () => {

  const component = renderer.create(
    <Router>
    <Button to="/films/1">Ver mais filmes</Button>
    </Router>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});