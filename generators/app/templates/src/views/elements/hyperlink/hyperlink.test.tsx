import { shallow } from 'enzyme';
import React from 'react';

import { Hyperlink } from './hyperlink';

describe('Elements', () => {
  describe('Hyperlink', () => {
    it('renders correctly.', () => {
      expect(shallow(<Hyperlink>Click me</Hyperlink>)).toMatchSnapshot();
    });
  });
});
