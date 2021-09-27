import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Divider = () => {
  return <StyleDivider />;
};

// START = Default Props
Divider.defaultProps = {};

// START = Props Types
Divider.propTypes = {};

// START = STYLING
const StyleDivider = styled.div`
  border: 1px solid #979797;
`;

export default Divider;
