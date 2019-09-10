import React from 'react';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';
/* Render residence details
 * City
 * Current city
 */

 const Residence = (props) => {
    const { data, applicant } = props;
    var object = {
        city:"",
        country:""
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
         <div className="residence">
            <h5 className="sub-heading">Residence Details</h5>
            <div className="row info-row">
                <p className="col s3">Home city:</p><p  className="col s9">{object.city}</p>
            </div>
            <div className="row info-row">
                <p className="col s3">Current city:</p><p className="col s9">{object.country}</p>
            </div>  
         </div>
     );
 }
 const mapStateToProps = (state) => {
    return {
        applicant: state.staff.user,
        data: state.firestore.ordered.ResidenceDetails
    }
}
 export default compose(
     connect(mapStateToProps),
     firestoreConnect([
         { collection:"ResidenceDetails"}
     ])
 )(Residence);