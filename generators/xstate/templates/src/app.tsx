import i18n from 'i18next';
import React, { FC } from 'react';

import { I18nProvider } from './providers/i18n/i18n-provider';
import { StateMachine } from './providers/state-machine';
import { MatchOnly, Switch } from './routing';

const locales = require('i18n-locales');

export const App: FC = () => (
  <I18nProvider i18n={i18n} locale={navigator.language} locales={locales}>
    <StateMachine>
      {({ current: { value }, transition }) => (
        <>
          <Switch current={value}>
            <MatchOnly state="inactive">
              <p>Inactive</p>
            </MatchOnly>
            <MatchOnly state="active">
              <p>Active</p>
            </MatchOnly>
          </Switch>

          <button onClick={() => transition({ type: 'TOGGLE' })}>Toggle</button>
        </>
      )}
    </StateMachine>
  </I18nProvider>
);
