import React , { Component } from 'react';
import { NavLink} from 'react-router-dom';

// functional component
class SignedOutLinks extends Component {
    render() {
        return (
            <div className="signedOutLinks">
                <ul className="right">
                    <li><NavLink 
                        to="/login" 
                        className="black-text">Applicant</NavLink>
                    </li>
                    <li><NavLink 
                        to="/login" 
                        className="black-text" >Staff</NavLink>
                    </li>
                </ul>
            </div>
        );
    }
    
}
export default SignedOutLinks;