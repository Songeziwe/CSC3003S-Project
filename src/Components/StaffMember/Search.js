import React, { Component } from 'react';

// Create a controlled component that will act as a filter
class Search extends Component {
    render() {
        return (
            <div className="search-wrapper">
                <input type="text" placeholder="Search applicants"/>
            </div>
    )   ;
        
    }
}
export default Search;