import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ButtonStyle.css';

export const Button = ({onClick, val, typeButton, styleType}) => {
    return(
        <button  className={styleType} onClick={onClick} type={typeButton} >
            {val}
        </button>
    )
}

Button.propTypes = {
    val: PropTypes.string.isRequired,
    styleType: PropTypes.string,
  };