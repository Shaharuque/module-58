import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='link-style'>
           <nav >
            <Link to='/'>Home</Link>
            <Link to='/login'>Products</Link>
            <Link to='/login'>Order</Link>
            <Link to='/login'>Review</Link>
            <Link to='/register'>Register</Link>
            <Link to='/login'>Login</Link>
           </nav>
        </div>
    );
};

export default Header;