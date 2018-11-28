import React from 'react';

import { MainNav } from '../../navigation/MainNav';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    return (
      <div>
        <MainNav />
      </div>
    );
  }
}

export default Header;
