import React from 'react';
import './styles/Button.css';

const Button = ({ href, label }) => {

    return (
        <a className='btn' href={href} >{label}</a>
    );
}

export default Button;