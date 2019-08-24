import React from 'react';
import {NavLink} from 'react-router-dom';
import SignedOutLinks from './SignedOutLinks';
import SignedInLinks from './SignedInLinks';

// functional component
const Navbar = () => {
    return (
        <nav className="navbar transparent">
            <div className="nav-wrapper container">
                <NavLink to="/" className="brand-logo black-text">Postgrad'Application</NavLink>
                <SignedOutLinks /> 
                <SignedInLinks />
            </div>
        </nav>
    );
}

export default Navbar;