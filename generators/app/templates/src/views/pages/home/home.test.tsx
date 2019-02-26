import { shallow } from 'enzyme';
import React from 'react';

import { Home } from './home';

describe('Pages', () => {
  describe('Home', () => {
    it('renders correctly.', () => {
      expect(shallow(<Home />)).toMatchSnapshot();
    });
  });
});
