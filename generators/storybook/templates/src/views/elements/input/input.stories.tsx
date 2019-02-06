import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Input } from '.';

storiesOf('02 — Elements / Input', module).add('Basic', () => <Input type="text" onChange={action('Change')} />);
