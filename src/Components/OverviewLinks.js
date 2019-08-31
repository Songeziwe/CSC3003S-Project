import React        from 'react';
import { connect }  from 'react-redux';
import { Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const OverviewLinks = (props) => {
    if ( props.auth.isEmpty )
        return <Redirect to="/" />
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

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}
export default connect(mapStateToProps)(OverviewLinks);