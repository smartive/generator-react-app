import { storiesOf } from '@storybook/react';
import React from 'react';

import { ColorPalette, ColorSwatch, IconPinboard } from '../storybook-utils';
import { neutral, primary, signals } from './colors/palettes';
import { allIconNames, IconName } from './icon';

storiesOf('01 — Identity', module)
  .add('Colors', () => (
    <div>
      <ColorSwatch title="Primary Colors" colors={primary} />

      <ColorSwatch title="Signal Colors" colors={signals} />

      <ColorPalette title="Neutral" colors={neutral} />
    </div>
  ))
  .add('Icons', () => <IconPinboard icons={allIconNames as IconName[]} />);
