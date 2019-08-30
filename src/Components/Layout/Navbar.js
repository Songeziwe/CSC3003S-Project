import React          from 'react';
import { NavLink }    from 'react-router-dom';
import SignedOutLinks from './SignedOutLinks';
import SignedInLinks  from './SignedInLinks';
import { connect }    from 'react-redux';

const Navbar = (props) => {
    const { isEmpty } = props.auth;  // destructuring
    return (
        <nav className="navbar transparent">
            <div className="nav-wrapper container">
                <NavLink to={isEmpty ? "/":"/applicant"} className="brand-logo black-text">Postgrad'Application</NavLink>
                {
                    isEmpty ? <SignedOutLinks /> : <SignedInLinks /> // conditional randering
                }  
            </div>
        </nav>
    );
}
// State from the redux store
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}
export default connect(mapStateToProps)(Navbar);