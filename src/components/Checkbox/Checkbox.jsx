import React from 'react';
import './Checkbox.css';

const Checkbox = ({ label, checked, onChange }) => {
  return (
    <div className="checkbox-container">
      <label className="checkbox-label">
        <input 
          type="checkbox" 
          checked={checked} 
          onChange={onChange} 
          className="checkbox-input"
        />
        <span className="checkbox-custom"></span>
        <span className="checkbox-text">{label}</span>
      </label>
    </div>
  );
};

export default Checkbox;