import React from 'react';

const OverviewLinks = () => {
    return (
            <span id="links" className="col lg6">
                <ol>
                    <li><a href="/personal">Personal Details</a></li>
                    <li><a href="/residence">Residence Details</a></li>
                    <li><a href="/degree">Degree Details</a></li>
                    <li><a href="/document">Upload Document</a></li>
                    <li><a href="/mit">MIT Details</a></li>
                </ol>
            </span>
    );
}

export default OverviewLinks