import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const defaultClickHandler = () => console.log('Default Button Function');

const DynamicButton = ({
  name = 'Click Me',
  size = 'default',
  type = 'primary-1',
  handleClick = defaultClickHandler
}) => {
  const buttonSize = {
    default: {},
    sm: { padding: '5px 15px' },
    lg: { padding: '15px 35px' },
  };

  return (
    <button
      className={type}
      style={buttonSize[size]}
      onClick={handleClick}
    >
      {name}
    </button>
  );
};

DynamicButton.propTypes = {
  name: PropTypes.string,
  size: PropTypes.oneOf(['default', 'sm', 'lg']),
  type: PropTypes.oneOf(['primary-1', 'primary-2', 'secondary-1', 'secondary-2']),
  handleClick: PropTypes.func
};

export default DynamicButton;
