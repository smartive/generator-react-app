import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Hyperlink } from '.';

storiesOf('02 — Elements / Hyperlink', module).add('Basic', () => (
  <Hyperlink href={text('Link', '#')}>{text('Link Text', 'Example Link')}</Hyperlink>
));
