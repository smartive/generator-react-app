import { shallow } from 'enzyme';
import React from 'react';

import { Input } from './input';

describe('Elements', () => {
  describe('Input', () => {
    it('renders correctly.', () => {
      expect(shallow(<Input />)).toMatchSnapshot();
    });
  });
});
