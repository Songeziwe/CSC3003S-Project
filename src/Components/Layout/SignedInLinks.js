import React from 'react';
import {NavLink} from 'react-router-dom';

// functional component
const SingedInLinks = () => {
    return (
        <div className="signedInLinks">
            <ul className="right">
                <li><NavLink to="/" className="black-text">Logout</NavLink></li>
                <li><NavLink 
                        to="/" 
                        className="btn btn-floating blue darken-1"
                    >IS</NavLink></li>
            </ul>
        </div>
    );
}

export default SingedInLinks;