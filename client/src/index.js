import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { ContextProvider } from './Context';

import './styles.css';

ReactDOM.render(
  <ContextProvider>
    <div className="footer-basic">
      <header>
        <p className="copyright">© Developed by Yoginder</p>
      </header>
    </div>
    <App />
  </ContextProvider>,
  document.getElementById('root'),
);
