import i18n from 'i18next';
import React, { FC } from 'react';

import { Home } from './views/pages/home';
import { I18nProvider } from './views/providers/i18n/i18n-provider';

const locales = require('i18n-locales');

export const App: FC = () => (
  <I18nProvider i18n={i18n} locale={navigator.language} locales={locales}>
    <Home />
  </I18nProvider>
);
