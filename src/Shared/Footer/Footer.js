import React from 'react';
const today = new Date();
const year = today.getFullYear();

const Footer = () => {
    return (
        <footer className='text-center mt-5'>
            <p><small>copyright @ {year}</small></p>
        </footer>
    );
};

export default Footer;