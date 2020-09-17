import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

type PropsTypes = {
  children: React.ReactNode,
}

const Layout = (props: PropsTypes) => {
 
  return (
    <React.Fragment>
      <Header/>
        {props.children}
      <Footer/>
    </React.Fragment>
  );
};

export default Layout;