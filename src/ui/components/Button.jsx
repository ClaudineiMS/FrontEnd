import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ButtonStyle.css';

export const SearchButton = ({ onClick, val, typeButton, styleType}) => {
    return(
        <button  className={styleType} onClick={onClick} type={typeButton} >
            {val}
        </button>
    )
}

SearchButton.propTypes = {
    onClick: PropTypes.func.isRequired
};