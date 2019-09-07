import React , { Component } from 'react';
import { NavLink} from 'react-router-dom';
import { connect }           from 'react-redux';
import { determineUser }     from '../../Store/action/staff';

// functional component
class SignedOutLinks extends Component {

    state = {
        user: ""
    }
    handleButton = (event) => {
        event.preventDefault();
        if(this.state !== "")
            this.props.checkUser({ user: "staff"});
    }

    handleApplicant = (event) => {
        event.preventDefault();
        console.log(event);
        if(this.state.user !== "")
            this.props.checkUser({ user: "applicant"});
    }
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
const mapDispatchToProps = (dispatch) => {
    return {
        checkUser: (user) => dispatch(determineUser(user))
    }
}
export default connect(null,mapDispatchToProps)(SignedOutLinks);