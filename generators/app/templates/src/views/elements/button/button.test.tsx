import { shallow } from 'enzyme';
import React from 'react';

import { Button } from './button';

describe('Elements', () => {
  describe('Button', () => {
    it('renders correctly.', () => {
      expect(shallow(<Button>Click me</Button>)).toMatchSnapshot();
    });
  });
});
