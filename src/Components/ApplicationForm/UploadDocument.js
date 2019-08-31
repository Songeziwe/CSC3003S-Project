import React        from 'react';
import { connect }  from 'react-redux';
import { Redirect } from 'react-router-dom';

const Document = (props) => {
    if ( props.auth.isEmpty )
        return <Redirect to = "/" />
    return (
        <div className="upload-section container">
            <form>
                <div className="file-field input-field">
                    <div className="btn">
                        <span>Upload</span>
                        <input type="file"/>
                    </div>

                    <div className="file-path-wrapper">
                        <input type="text" placeholder="Upload file" className="file-path validate"/>
                    </div>
                </div>
                <a href="/degree" className="btn-large">Previous</a>
                <a href="/applicant" className="btn-large">Submit<i className="material-icons right">send</i></a>
                <a href="/mit" className="btn-large">Next</a>
            </form>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}
export default connect(mapStateToProps)(Document);