import React from 'react';
import {NavLink} from 'react-router-dom';

const OverviewLinks = () => {
    return (
            <span id="links" className="col lg6">
                <ol>
                    <li><NavLink to="/personal">Personal Details</NavLink></li>
                    <li><NavLink to="/residence">Residence Details</NavLink></li>
                    <li><NavLink to="/degree">Degree Details</NavLink></li>
                    <li><NavLink to="/document">Upload Document</NavLink></li>
                    <li><NavLink to="/mit">MIT Details</NavLink></li>
                </ol>
            </span>
    );
}

export default OverviewLinks