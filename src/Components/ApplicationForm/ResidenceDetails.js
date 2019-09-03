import React        from 'react';
import { connect }  from 'react-redux';
import { Redirect } from 'react-router-dom';
import {residenceDetails}    from '../../Store/action/addUserData';

// Controlled component
class Residence extends React.Component {
    state = {
         city: "", 
         country: "", 
         isComplete: false 
    }
    handleChange = (event) => {
        if( this.allFieldsComplete() ){
            this.setState({
                ...this.state,
                [event.target.name]: event.target.value,
                isComplete: true
            });
        }else{
            this.setState({
                ...this.state,
                [event.target.name]: event.target.value,
                isComplete: false
            });
        }
        
    }
    // If all fields are not empty it's complete
    // setState() will call render() method to update the DOM
    allFieldsComplete = () => {
        const { city, country} = this.state; // destructuring
        return city && country;
    }
    handleSubmit = (event) => {
        event.preventDefault();
        if( this.allFieldsComplete() ){
            this.props.createResDetails(this.state);
            this.setState({
                city      : "",
                country   : "",
                isComplete: false
            });
        }
        else
            console.log("Fields not complete");
    } 
    render() {
        if ( this.props.auth.isEmpty )
            return <Redirect to = "/" />
        return (
            <div className="residence-details container">
                <h4 className="align-center">Residence Details</h4>
                <hr/>
                <form onSubmit = { this.handleSubmit }>
                    <div className="row">
                        <div className="input-field col">
                            <input 
                                type="text"
                                name="city"
                                value={this.state.city}
                                onChange={this.handleChange} 
                                className="validate"/>
                            <label>City</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col">
                            <input 
                                type="text"
                                name="country"
                                value={this.state.country}
                                onChange={this.handleChange}  
                                className="validate"/>
                            <label>Country</label>
                        </div>
                    </div>
                    <a href="/personal" className="btn-large">Previous</a>
                    <button className="btn-large">Submit<i className="material-icons right">send</i></button>
                    <a href="/degree" className="btn-large">Next</a>
                </form>
            </div>
        );
    }
    
}
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        createResDetails: (resDetails) => dispatch(residenceDetails(resDetails))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Residence);