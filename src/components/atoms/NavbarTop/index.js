import React from 'react';
// import PropTypes from 'prop-types';
import { ICArrowDown, ICEmail, ICPhone, ICUKFlag } from '../../../assets';
import { Divider } from '..';
import styled from 'styled-components';

const NavbarTop = () => {
  return (
    <StyleNavbarTop className="gray-bg">
      <div className="container">
        <div className="nav-left">
          <div className="item">
            <img src={ICPhone} alt="phone" />
            <p className="text-md">+62 875 458 910</p>
          </div>
          <Divider />
          <div className="item">
            <img src={ICEmail} alt="phone" />
            <p className="text-md">Contact us today !</p>
          </div>
          <Divider />
          <div className="item">
            <p className="text-md">USD</p>
            <img src={ICArrowDown} alt="arrow down" />
          </div>
          <Divider />
          <div className="item">
            <img src={ICUKFlag} alt="phone" />
            <p className="text-md">English</p>
            <img src={ICArrowDown} alt="arrow down" />
          </div>
        </div>
        <div className="nav-right">
          <div className="item">
            <p className="text-md">My Account</p>
          </div>
          <Divider />
          <div className="item">
            <p className="text-md">Support</p>
            <img src={ICArrowDown} alt="arrow down" />
          </div>
          <Divider />
          <div className="item">
            <p className="text-md">Services</p>
          </div>
        </div>
      </div>
    </StyleNavbarTop>
  );
};

// START = Default Props
NavbarTop.defaultProps = {};

// START = Props Types
NavbarTop.propTypes = {};

// START = STYLING
const StyleNavbarTop = styled.div`
  padding: 10px 0;
  .container {
    display: flex;
    justify-content: space-between;
    .nav-left {
      gap: 10px;
      display: flex;
    }
    .nav-right {
      gap: 10px;
      display: flex;
    }
    .item {
      display: flex;
      gap: 16px;
    }
  }
`;

export default NavbarTop;
