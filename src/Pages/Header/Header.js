import React from 'react';
import './Header.css';
// import logo from '../../img/icon.webp';

const Header = () => {
    return (
        <nav className='header  d-md-flex align-items-center justify-content-md-between '>
            <div className='d-flex align-items-center justify-content-center text-white header-name '>
            <p className='h1 me-3 icon '><i class="fa-solid fa-dumbbell"></i></p>
            <h1 className='fw-bold'><span className='text-info'>POWER-</span><span className='text-danger'>ACTIVE-</span><span className='text-warning'>ORG</span></h1>
            </div>
            <div className="d-none d-md-flex header-link">
                <a href="/home">Home</a>
                <a href="/login">Login</a>
                <a href="/blog">Blog</a>
            </div>
        </nav>
    );
};

export default Header;