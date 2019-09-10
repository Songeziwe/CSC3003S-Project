import React from 'react';

/* Render application status and name of the applicant
 * Should display all pending, Complete, Incomplete applications
 */

 const ApplicationStatus = () => {
     return (
         <div className="application-status col s4">
             <h5 className="sub-heading">Application Status</h5>
             <div className="row row-info">
                <div className="status col s2"><p></p></div>
                <div className="applicant-name col s10"><p>zibondiwe</p></div>
            </div>
         </div>
     );
 }

 export default ApplicationStatus;