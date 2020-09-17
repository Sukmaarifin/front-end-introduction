import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Header from '../Header';
import Footer from '../Footer';
import AppContext from '../../core/AppContext';
import { checkAuthData } from '../../helpers/handleAuth';

type PropsTypes = {
  route: any,
}

const Layout = (props: PropsTypes) => {
  const history = useHistory();
  const { ContextAuth } = AppContext;
  const { auth, loginAuth } = useContext(ContextAuth);

  const checkAuth = () => {
    const authData = checkAuthData();

    //for automation redirect if user login
    if (authData?.isLogin) {
      loginAuth(authData);
      history.push('./movies');
    }
    else {
      history.push('./login');
    }
  }

  useEffect(() => {
    checkAuth();
  }, [auth.isLogin])

  return (
    <React.Fragment>
      <Header/>
        {renderRoutes(props.route.routes)}
      <Footer/>
    </React.Fragment>
  );
};

export default Layout;