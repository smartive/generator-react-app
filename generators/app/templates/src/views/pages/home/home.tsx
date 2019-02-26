import React, { FC } from 'react';
import i18n from 'i18next';

export const Home: FC = () => (
  <div>
    <aside>{i18n.t('home:sidebar.title')}</aside>
    <main>
      <p>{i18n.t('home:main.text', { date: new Date()})}</p>
    </main>
  </div>
);
