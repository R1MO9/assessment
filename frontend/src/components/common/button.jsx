import React from 'react';

const Button = ({
    children,
    type = 'button',
    onClick,
    className = '',
}) => {
    // Base styles
    const baseStyles = `px-4 py-2 rounded-md font-medium transition duration-200 ease-in-out`;

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${baseStyles} ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
