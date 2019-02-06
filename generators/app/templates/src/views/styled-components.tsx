import React, { FC, ReactChild } from 'react';
import * as styledComponents from 'styled-components';

import { neutral, primary, signals } from './identity/colors/palettes';

export type Theme = {
  colors: {
    primary: {
      highlight: string;
      dark: string;
      light: string;
    };

    signal: {
      success: string;
      warning: string;
      alarm: string;
    };

    neutral: {
      '0': string;
      '10': string;
      '20': string;
      '30': string;
      '40': string;
      '50': string;
      '60': string;
      '70': string;
      '80': string;
      '90': string;
    };
  };

  spacing: {
    xs: string;
    md: string;
    lg: string;
    xl: string;
  };
};

export const theme: Theme = {
  colors: {
    primary: {
      highlight: primary.highlight.hex,
      dark: primary.dark.hex,
      light: primary.light.hex,
    },

    signal: {
      alarm: signals.alarm.hex,
      success: signals.success.hex,
      warning: signals.warning.hex,
    },

    neutral: {
      '0': neutral[0].hex,
      '10': neutral[1].hex,
      '20': neutral[2].hex,
      '30': neutral[3].hex,
      '40': neutral[4].hex,
      '50': neutral[5].hex,
      '60': neutral[6].hex,
      '70': neutral[7].hex,
      '80': neutral[8].hex,
      '90': neutral[9].hex,
    },
  },

  spacing: {
    xs: '4px',
    md: '8px',
    lg: '16px',
    xl: '32px',
  },
};

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider: Provider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<Theme>;
const ThemeProvider: FC<{ children: ReactChild }> = ({ children }) => <Provider theme={theme}>{children}</Provider>;

export { css, createGlobalStyle, keyframes, ThemeProvider };
export default styled;
