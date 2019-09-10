import React            from 'react';
import ApplicantDetails from './DetailsComponents/ApplicantDetails';
import Residence        from './DetailsComponents/Residence';
import MIT              from './DetailsComponents/MIT';
import Degree           from './DetailsComponents/Degree';

/* Render the following components:
 * ApplicantDetails
 * Residence
 * Degree
 * Documnent
 * MIT
 */

 const DetailsWrapper = () => {
     return (
         <div className="details-wrapper col s4">
            <ApplicantDetails/>
            <Residence/>
            <Degree/>
            <MIT/>
         </div>
     );
 }

 export default DetailsWrapper;