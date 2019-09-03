import React        from 'react';
import { connect }  from 'react-redux';
import { Redirect } from 'react-router-dom';
import {degreeDetails}    from '../../Store/action/addUserData';

class Degree extends React.Component {
    state = {
        degreeName      : "",
        degreeAppliedFor: "", 
        university      : "",
        numberOfYears   : "",
        country         : "",
        NQfequivalent   : "", 
        isComplete      : false 
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
       const { degreeName, degreeAppliedFor, university, numberOfYears, country, NQfequivalent } = this.state; // destructuring
       return degreeName && degreeAppliedFor && university && numberOfYears && country && NQfequivalent ;
   }
   handleSubmit = (event) => {
       event.preventDefault();
       if( this.allFieldsComplete() ){
           this.props.createDegree(this.state);
           this.setState({
                degreeName      : "",
                degreeAppliedFor: "", 
                university      : "",
                numberOfYears   : "",
                country         : "",
                NQfequivalent   : "", 
                isComplete      : false 
           });
       }
       else
           console.log("Fields not complete");
   }
    render() {
        if ( this.props.auth.isEmpty )
        return <Redirect to = "/" />
        return (
            <div className="degree-details container">
                <h4 className="align-center">Degree Details</h4>
                
                <h5 className="align-center">Previous Degree</h5>
                <hr/>
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="input-field col">
                            <input 
                                type="text"
                                name="degreeName"
                                value={this.state.degreeName}
                                onChange={this.handleChange}
                                className="validate"/>
                            <label>Name of Degree</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col">
                            <input 
                                type="text"
                                name="university"
                                value={this.state.university}
                                onChange={this.handleChange} 
                                className="validate"/>
                            <label>University name</label>
                        </div>
                        <div className="input-field col">
                            <input 
                                type="text"
                                name="country"
                                value={this.state.country}
                                onChange={this.handleChange}
                                className="validate"/>
                            <label>Country name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col">
                            <input 
                                type="text"
                                name="NQfequivalent"
                                value={this.state.NQfequivalent}
                                onChange={this.handleChange}
                                className="validate"/>
                            <label>NQF equivalent</label>
                        </div>
                        <div className="input-field col">
                            <input 
                                type="text" 
                                name="numberOfYears"
                                value={this.state.numberOfYears}
                                onChange={this.handleChange}
                                className="validate"/>
                            <label>Minimum number of years</label>
                        </div>
                    </div>
                    <div className="row">
                        <h5 className="align-center">Current Degree</h5>
                        <hr/>
                        <div className="input-field col">
                            <input 
                                type="text" 
                                name="degreeAppliedFor"
                                value={this.state.degreeAppliedFor}
                                onChange={this.handleChange}
                                className="validate"/>
                            <label>Name of applied degree</label>
                        </div>
                    </div>
                    <a href="/residence" className="btn-large">Previous</a>
                    <button className="btn-large">Submit<i className="material-icons right">send</i></button>
                    <a href="/document" className="btn-large">Next</a>
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
        createDegree: (dDetails) => dispatch(degreeDetails(dDetails))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Degree);