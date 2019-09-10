import React from 'react';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';

/* Render MIT details:
 * Title
 * Name
 * Surname
 * Citizenship
 * Current city
 */

 const MIT = (props) => {
    const { data, applicant } = props;
    var object = {
        title: "",
        name:"",
        surname:"",
        citizenship: "",
        city: "",
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
         <div className="mit">
            <h5 className="sub-heading">MIT Details</h5>
            <div className="row row-info">
                <p className="col s3">Title:</p><p className="col s9">{object.title}</p>
            </div>
            <div className="row row-info">
                <p className="col s3">Name:</p><p className="col s9">{object.name}</p>
            </div>
            <div className="row row-info">
                <p className="col s3">Surname:</p><p className="col s9">{object.surname}</p>
            </div>
            <div className="row row-info">
                <p className="col s3">Citizenship:</p><p className="col s9">{object.citizenship}</p>
            </div>
            <div className="row row-info">
                <p className="col s3">Current city:</p><p className="col s9">{object.city}</p>
            </div>
            
            
            
            
            
         </div>
     );
 }

const mapStateToProps = (state) => {
    return {
        applicant: state.staff.user,
        data: state.firestore.ordered.MITDetails
    }
}
 export default compose(
     connect(mapStateToProps),
     firestoreConnect([
         { collection:"MITDetails"}
     ])
 )(MIT);