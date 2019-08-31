import React        from 'react';
import { connect }  from 'react-redux';
import { Redirect } from 'react-router-dom';

const Residence = (props) => {
    if ( props.auth.isEmpty )
        return <Redirect to = "/" />
    return (
        <div className="residence-details container">
            <h4 className="align-center">Residence Details</h4>
            <hr/>
            <form>
                <div className="row">
                    <div className="input-field col">
                        <input type="text" className="validate"/>
                        <label>City</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col">
                        <input type="text" className="validate"/>
                        <label>Country</label>
                    </div>
                </div>
                <a href="/personal" className="btn-large">Previous</a>
                <a href="/applicant" className="btn-large">Submit<i className="material-icons right">send</i></a>
                <a href="/degree" className="btn-large">Next</a>
            </form>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}
export default connect(mapStateToProps)(Residence);