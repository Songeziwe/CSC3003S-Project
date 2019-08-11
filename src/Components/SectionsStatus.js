import React from 'react';

const Sectionstatus = () => {
    return (
        <span id="sub-status" className="col lg6 right">
            <form>
                <label>
                    <input type="checkbox"/>
                    <span className="black-text">Personal Details</span>
                </label>
                <br/>
                <label>
                    <input type="checkbox"/>
                    <span className="black-text">Residence Details</span>
                </label>
                <br/>
                <label>
                    <input type="checkbox"/>
                    <span className="black-text">Degree Details</span>
                </label>
                <br/>
                <label>
                    <input type="checkbox"/>
                    <span className="black-text">Upload Document</span>
                </label>
                <br/>
                <label>
                    <input type="checkbox"/>
                    <span className="black-text">MIT Details</span>
                </label>

            </form>
        </span>
    );
}

export default Sectionstatus;