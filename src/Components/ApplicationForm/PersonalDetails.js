import React from 'react';

const Personal = () => {
    return (
        <div className="personal-details container">
            <h4 className="align-center">Personal Details</h4>
            <hr/>
            <form>
                <div className="row">
                    <div className="input-field col">
                        <input type="text" className="validate"/>
                        <label>Title</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col">
                        <input type="text" className="validate"/>
                        <label>Name</label>
                    </div>
                    <div className="input-field col">
                        <input type="text" className="validate"/>
                        <label>Surname</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col">
                        <input type="text" className="validate"/>
                        <label>Citizenship</label>
                    </div>
                    <div className="input-field col">
                        <input type="text" className="validate"/>
                        <label>Current city</label>
                    </div>
                </div>
                <a href="/applicant" className="btn-large">Submit<i className="material-icons right">send</i></a>
                <a href="/residence" className="btn-large">Next</a>
            </form>
        </div>
    );
}
export default Personal;