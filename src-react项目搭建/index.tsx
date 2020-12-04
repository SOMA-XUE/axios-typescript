import * as React from 'react';
import * as ReactDOM from 'react-dom';
import RouterApp from './route';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <RouterApp />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
