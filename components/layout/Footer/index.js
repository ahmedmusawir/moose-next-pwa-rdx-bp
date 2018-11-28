import React from 'react';
import styled from 'styled-components';

import { Navbar } from 'reactstrap';
import { A } from 'components/general/A';

const FooterBar = styled(Navbar)`
  background: gray;
  color: white;
`;
function Footer({ children }) {
  return (
    <FooterBar color="dark" dark expand="md" className="fixed-bottom footer">
      {children}
    </FooterBar>
  );
}

export default Footer;
