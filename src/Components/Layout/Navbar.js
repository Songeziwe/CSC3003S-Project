import React          from 'react';
import { NavLink }    from 'react-router-dom';
import SignedOutLinks from './SignedOutLinks';
import SignedInLinks  from './SignedInLinks';
import { connect }    from 'react-redux';

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
// State from the redux store
const mapStateToProps = (state) => {
    return {
        
    }
}
export default connect(mapStateToProps)(Navbar);