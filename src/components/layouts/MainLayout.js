import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Navbar } from '../molecules';

const MainLayout = ({ children }) => {
  return (
    <StyleMainLayout>
      <Navbar />
      {children}
    </StyleMainLayout>
  );
};

// START = Default Props
MainLayout.defaultProps = {};

// START = Props Types
MainLayout.propTypes = {
  children: PropTypes.object,
};

// START = STYLING
const StyleMainLayout = styled.div`
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
`;

export default MainLayout;
