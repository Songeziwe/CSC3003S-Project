import React from 'react';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';

/* Render degree details
 * Previous degree:
 * Name of degree
 * University name
 * Country name
 * NQF equivalent
 * Minimum number of years
 * 
 * Current degree:
 * Name of applied degree
 */

 const Degree = (props) => {
    const { data, applicant } = props;
    var object = {
        degreeName:"",
        university:"",
        country: "",
        NQfequivalent: "",
        numberOfYears: "",
        degreeAppliedFor: ""
    }
    // retrieve the user from the database
    if(typeof data != "undefined"){
        data.some((user) => {
            if( applicant.name === user.name && applicant.surname === user.surname ){
                object = user;
                return true;
            }
            return false;
        });
    }
     return (
         <div className="degree">
            <h5 className="sub-heading">Current Degree</h5>
            
            <div className="row info-row">
                <p className="col s4">Applied degree:</p><p className="col s8">{object.degreeAppliedFor}</p> 
            </div>

            <h5 className="sub-heading">Previous Degree</h5>
            
            <div className="row info-row">
                <p className="col s3">Name:</p><p className="col s9">{object.degreeName}</p>
            </div>

            <div className="row info-row">
                <p className="col s3">University:</p><p className="col s9">{object.university}</p>
            </div>

            <div className="row info-row">
                <p className="col s3">Country:</p><p className="col s9">{object.country}</p>
            </div>

            <div className="row info-row">
                <p className="col s3">NQF equivalent:</p><p className="col s9">{object.NQfequivalent}</p>
            </div>
            
            <div className="row info-row">
                <p className="col s3">Duration in years:</p><p className="col s9">{object.numberOfYears}</p>
            </div>
         </div>
     );
 }

 const mapStateToProps = (state) => {
    return {
        applicant: state.staff.user,
        data: state.firestore.ordered.DegreeDetails
    }
}
 export default compose(
     connect(mapStateToProps),
     firestoreConnect([
         { collection:"DegreeDetails"}
     ])
 )(Degree);