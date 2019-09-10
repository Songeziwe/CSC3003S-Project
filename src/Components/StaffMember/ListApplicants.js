import React                from 'react';
import { firestoreConnect } from 'react-redux-firebase';
import { connect }          from 'react-redux';
import { compose }          from 'redux';
import Search               from './Search';
import { NavLink }          from 'react-router-dom';
import { userLookUp }       from '../../Store/action/staff';

// recieve list of applicants as props
// create jsx elements of those applicants
// render those components

const ListApplicants = (props) => {
    //console.log(props.personalDetails);
    var details = "";
    if( typeof props.personalDetails !== "undefined" ){
        details = props.personalDetails.map(user => {
        return user.isApplicant ? (
            <div key={user.id} onClick={props.findUser} className="row row-info">
                <NavLink to="/home"
                    className="col s12"
                >
                    { user.name + " " + user.surname }
                </NavLink>
            </div>
            ): null;
        })
    }
    
    return (
        <div className="list-applicants col s4">
            <Search/>
            <h5 className="sub-heading">List of applicants</h5>
            { details }
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        personalDetails: state.firestore.ordered.personalDetails
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        findUser: (event) => dispatch(userLookUp(event))
    }
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: "personalDetails" }
    ])
)(ListApplicants);