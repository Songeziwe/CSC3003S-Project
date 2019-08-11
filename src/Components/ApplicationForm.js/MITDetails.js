import React from 'react';

const MIT = () => {
    return (
        <div className="mit-details container">
            { true ? (
                <React.Fragment>
                    <h5 className="align-center">MIT Details</h5>
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
                        <a href="/document" className="btn-large">Previous</a>
                        <a href="/applicant" className="btn-large">Submit<i className="material-icons right">send</i></a>
                    </form>
                </React.Fragment>
            ):(
                
                <React.Fragment>
                    <h5 className="align-center">Are you applying for MIT?</h5>
                    <form>
                        <label>
                            <input name="yes" type="radio"/>
                            <span>Yes</span>
                        </label>
                        <label>
                            <input name="yes" type="radio"/>
                            <span>Yes</span>
                        </label>
                    </form>
                </React.Fragment>
            )}
        </div>
    );
}

export default MIT;