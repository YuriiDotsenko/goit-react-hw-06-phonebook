import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

const Input = ({
  type,
  name,
  pattern,
  title,
  value,
  handleInputChange,
  label,
}) => (
  <label className="Label">
    {label}:
    <input
      className="Input"
      type={type}
      name={name}
      pattern={pattern}
      title={title}
      required
      value={value}
      onChange={handleInputChange}
      autoComplete="off"
    />
  </label>
);

Input.defaultProps = {
  type: 'text',
  label: '',
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  pattern: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
};

export default Input;
