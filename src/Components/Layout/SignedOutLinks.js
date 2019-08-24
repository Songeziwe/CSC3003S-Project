import React from 'react';
import {NavLink} from 'react-router-dom';

// functional component
const SignedOutLinks = () => {
    return (
        <div className="signedOutLinks">
            <ul className="right">
                <li><NavLink to="/login" className="black-text">Applicant</NavLink></li>
                <li><NavLink to="/" className="black-text">Staff</NavLink></li>
            </ul>
        </div>
    );
}

export default SignedOutLinks;