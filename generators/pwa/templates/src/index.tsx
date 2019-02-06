import React from 'react';
import { render } from 'react-dom';

import { App } from './app';

render(<App />, document.getElementById('app'));

if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js');
  });
}
