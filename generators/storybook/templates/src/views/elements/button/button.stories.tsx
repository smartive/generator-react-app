import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Button } from '.';

storiesOf('02 — Elements / Button', module).add('Basic', () => <Button onClick={action('Click')}>Button</Button>);
