import { shallow } from 'enzyme';
import React from 'react';

import { TabNavigation } from './tab-navigation';

describe('Components', () => {
  describe('TabNavigation', () => {
    it('renders correctly.', () => {
      expect(shallow(<TabNavigation />)).toMatchSnapshot();
    });
  });
});
