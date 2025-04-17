import React from 'react';
import './Button.css';

const Button = ({ text, onClick, variant = 'primary' }) => {
  return (
    <button className={`button ${variant}`} onClick={onClick}>
      <span className="button-text">{text}</span>
    </button>
  );
};

export default Button;