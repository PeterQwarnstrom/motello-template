import { Provider } from 'motello-client';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import App from './app';

ReactDOM.render(
  <StrictMode>
    <Provider appName="in-the-game" socketConfig={{ serverUrl: 'http://localhost:61100' }}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);
