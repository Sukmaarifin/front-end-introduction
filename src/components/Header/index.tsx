import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Typography } from 'antd';
import { checkAuthData } from '../../helpers/handleAuth';
import AppContext from '../../core/AppContext';
import './styled.scss'


const Header = () => {
  const { ContextAuth } = AppContext;
  const { auth, logoutAuth, loginAuth } = useContext(ContextAuth);
  const history = useHistory();
    
  const handleOnLogout = () => {
    logoutAuth();
    history.push('./login');
  }

  const checkAuth = () => {
    const authData = checkAuthData();

    //for automation redirect on movies page if user login
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
  }, [auth])

  return (
    <React.Fragment>
      {auth.isLogin && (
        <div className="header">
          <Typography.Text className="header-user">
              Hi {auth.username} !
          </Typography.Text>
          <Button type="primary" danger onClick={handleOnLogout}>Logout</Button>
       </div>
      ) }
    </React.Fragment>
  );
};

export default Header;
