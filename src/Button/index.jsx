import React from 'react';
import PropTypes from 'prop-types';

import '../index.css';
import './Button.css';

const Button = ({ children, alpha = false, beta = false, gamma = false }) => (
  <button
    type="button"
    {...(alpha && { className: 'alpha' })}
    {...(beta && { className: 'beta' })}
    {...(gamma && { className: 'gamma' })}
  >
    {children}
  </button>
);

Button.defaultProps = {
  alpha: false,
  beta: false,
  gamma: false,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  alpha: PropTypes.bool,
  beta: PropTypes.bool,
  gamma: PropTypes.bool,
};

export default Button;
