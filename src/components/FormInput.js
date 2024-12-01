import React from 'react';
import PropTypes from 'prop-types';

const FormInput = ({ name, type, title, value, onChange }) => {
  return (
    <div className='input-groups'>
      <span className='label'>{title}</span>
      <div className='range-container'>
        <input
          type={type}
          name={name}
          className='input-range'
          value={value}
          onChange={onChange}
          autoComplete='off'
        />
      </div>
    </div>
  );
};

FormInput.propTypes = {
  name: PropTypes.string.isRequired, // Ajouté pour préciser que "name" est requis
  title: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired, // Doit être une fonction
  type: PropTypes.oneOf(['text', 'password', 'number']),
};

export default FormInput;
