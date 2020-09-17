import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Switch, Router, Route } from "react-router";
import LoginPage from './routes/Login';
import RegisterPage from './routes/Register';
import MoviesPage from './routes/Movies';
import Layout from './components/Layout';
import 'antd/dist/antd.css';

import './App.css';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route
              exact
              path="/"
              component={LoginPage}
            />
             <Route
              exact
              path="/login"
              component={LoginPage}
            />
            <Route
              exact
              path="/register"
              component={RegisterPage}
            />
            <Route
              exact
              path="/movies"
              component={MoviesPage}
            />
          </Switch>
        </Layout>
      </BrowserRouter>
    </Router>

  );
}

export default App;
