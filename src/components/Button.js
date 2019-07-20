import React from 'react';

const Button = props => {
  return (
    <button
      type="button"
      className={`btn ${props.className} mr-2`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
