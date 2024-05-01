// eslint-disable-next-line no-unused-vars
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return (
        <>
            <nav className='navBar'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/products">Products</NavLink>
            </nav>
            
        </>
    );
};

export default Nav;