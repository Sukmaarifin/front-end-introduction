import React, { createContext, useState } from 'react';
import { handleLogin, handleLogout } from '../helpers/handleAuth';

type PropsType = {
  children: React.ReactNode,
}

type AuthDataType = {
  username: string,
  password: string,
  isLogin: boolean
}

const defaultAuthData = {
  username: '',
  password: '',
  isLogin: false
}

const AppContext = () => {
  const ContextAuth = createContext<any>({});

  const ProviderAuth = (props: PropsType) => {
    const [auth, setAuth] = useState<AuthDataType>(defaultAuthData);
    const logoutAuth = () => {
      setAuth(defaultAuthData);
      handleLogout();
    };

    const loginAuth = (data: AuthDataType) => {
      setAuth(data);
      handleLogin(data);
    };

    const authState = { auth, logoutAuth, loginAuth };

    return (
      <ContextAuth.Provider value={authState}>
        {props.children}
      </ContextAuth.Provider>
    )
  }

  return {
    ContextAuth,
    ProviderAuth
  } 
}

export default AppContext();