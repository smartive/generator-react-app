import { withKnobs } from '@storybook/addon-knobs';
import { withOptions } from '@storybook/addon-options';
import { addDecorator, configure } from '@storybook/react';
import React, { Fragment } from 'react';

addDecorator(withOptions({ name: '<%= app_name %> Design Library', sortStoriesByKind: true }));

addDecorator(withKnobs);

const req = require.context('../../src', true, /\.stories\.ts(x)?$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
