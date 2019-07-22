import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { className, onClick, children } = props;
  return (
    <button type="button" className={`btn ${className} mr-2`} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired
};

export default Button;
