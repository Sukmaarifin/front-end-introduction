import React, { useEffect, useContext } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import AppContext from '../../core/AppContext';

type PropsTypes = {
  children: React.ReactNode,
}

const Layout = (props: PropsTypes) => {
  const { ProviderAuth } = AppContext;
  return (
    <React.Fragment>
        <ProviderAuth>
          <Header/>
            {props.children}
          <Footer/>
        </ProviderAuth>
    </React.Fragment>
  );
};

export default Layout;