import { shallow } from 'enzyme';
import React from 'react';

import { Form } from './form';

describe('Compositions', () => {
  describe('TabNavigation', () => {
    it('renders correctly.', () => {
      const spy = jest.fn();

      expect(
        shallow(
          <Form onSubmit={spy}>
            <input type="text" />
          </Form>,
        ),
      ).toMatchSnapshot();
    });
  });
});
