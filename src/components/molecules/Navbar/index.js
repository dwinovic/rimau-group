import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavbarTop } from '../../atoms';

const Navbar = () => {
  return (
    <StyleNavbar>
      <NavbarTop />
      <div className="main white-bg"></div>
    </StyleNavbar>
  );
};

// START = Default Props
Navbar.defaultProps = {};

// START = Props Types
Navbar.propTypes = {};

// START = STYLING
const StyleNavbar = styled.nav``;

export default Navbar;
