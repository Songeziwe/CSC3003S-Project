import React             from 'react';
//import Search            from './Search';
import ListApplicants     from './ListApplicants';
import DetailsWrapper    from './DetailsWrapper';
import ApplicationStatus from './ApplicationStatus';

// root component for all components regarding the staff member
const StaffHome = () => {
    return (
        <div className="container">
            <h1 className="center-align heading">Admin</h1>
            <div className="row">
                <ListApplicants/>
                <DetailsWrapper/>
                <ApplicationStatus/>
            </div>
        </div >
    );
}
export default StaffHome;