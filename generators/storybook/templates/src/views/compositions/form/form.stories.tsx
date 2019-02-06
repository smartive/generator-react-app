import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Form } from '.';

storiesOf('04 — Compositions / Form', module).add('Basic', () => (
  <Form onSubmit={action('Submit')}>
    <input type="text" placeholder="Text" />
  </Form>
));
