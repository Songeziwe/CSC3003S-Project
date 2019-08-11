import React from 'react';

const Degree = () => {
    return (
        <div className="degree-details container">
            <h4 className="align-center">Degree Details</h4>
            
            <h5 className="align-center">Previous Degree</h5>
            <hr/>
            <form>
                <div className="row">
                    <div className="input-field col">
                        <input type="text" className="validate"/>
                        <label>Name of Degree</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col">
                        <input type="text" className="validate"/>
                        <label>University name</label>
                    </div>
                    <div className="input-field col">
                        <input type="text" className="validate"/>
                        <label>Country name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col">
                        <input type="text" className="validate"/>
                        <label>NQF equivalent</label>
                    </div>
                    <div className="input-field col">
                        <input type="text" className="validate"/>
                        <label>Minimum number of years</label>
                    </div>
                </div>
                <div className="row">
                    <h5 className="align-center">Current Degree</h5>
                    <hr/>
                    <div className="input-field col">
                        <input type="text" className="validate"/>
                        <label>Name of applied degree</label>
                    </div>
                </div>
                <a href="/residence" className="btn-large">Previous</a>
                <a href="/applicant" className="btn-large">Submit<i className="material-icons right">send</i></a>
                <a href="/document" className="btn-large">Next</a>
            </form>
        </div>
    );
}

export default Degree;