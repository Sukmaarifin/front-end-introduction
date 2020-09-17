import React from 'react';
import { Typography } from 'antd';

const Footer = () => {
 
  return (
    <React.Fragment>
     <div style={{ textAlign: 'center', top: '50px'}}>
        <Typography.Text disabled>
          Made with Love, Sukma
        </Typography.Text>
       </div>
    </React.Fragment>
  );
};

export default Footer;