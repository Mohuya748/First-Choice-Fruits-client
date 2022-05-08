import React from 'react';

const Footer = () => {
    const getCurrentYear = () => {
        return new Date().getFullYear();
    };
    return (
        <footer className='text-center p-5 mt-5 bg-secondary text-white'>
            <p>First Choice Fruits©{getCurrentYear()}</p>
        </footer>
    );
};

export default Footer;