import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { authOut } from '../../Store/action/actions';

// functional component
const SingedInLinks = (props) => {
    console.log(props);
    return (
        <div className="signedInLinks">
            <ul className="right">
                <li><NavLink 
                        to="/"
                        onClick={props.signOut} 
                        className="black-text">Logout</NavLink></li>
                <li><NavLink 
                        to="/applicant" 
                        className="btn btn-floating blue darken-1">IS</NavLink></li>
            </ul>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(authOut())
    }
}
export default connect(null, mapDispatchToProps)(SingedInLinks);