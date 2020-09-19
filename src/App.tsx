import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import AppContext from './core/AppContext';
import routes from './routes';
import 'antd/dist/antd.css';

import './App.css';

function App() {
  const { ProviderAuth } = AppContext;

  return (
    <BrowserRouter>
      <ProviderAuth>
        {renderRoutes(routes)}
      </ProviderAuth>
    </BrowserRouter>
  );
}

export default App;
