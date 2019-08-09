import React from 'react';

// functional component
const Navbar = () => {
    return (
        <nav className="navbar transparent">
            <div className="nav-wrapper container">
                <a href="/" className="brand-logo black-text">Postgrad'Application</a>
                <ul className="right">
                    <li><a href="/applicant" className="black-text">Applicant</a></li>
                    <li><a href="/" className="black-text">Staff</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;