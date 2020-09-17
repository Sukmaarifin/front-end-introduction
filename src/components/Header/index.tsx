import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Typography } from 'antd';
import AppContext from '../../core/AppContext';
import './styled.scss'


const Header = () => {
  const { ContextAuth } = AppContext;
  const { auth, logoutAuth } = useContext(ContextAuth);
  const history = useHistory();
    
  const handleOnLogout = () => {
    logoutAuth();
    history.push('./login');
  }

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
