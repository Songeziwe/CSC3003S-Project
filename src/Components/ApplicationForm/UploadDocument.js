import React from 'react';

const Document = () => {
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

export default Document;