import React, { Component } from 'react';
import { connect } from 'react-redux';
import {personalDetails} from '../../Store/action/addUserData';

class Personal extends Component {
    state = {
        title: "",
        name: "",
        surname: "",
        citizenship: "",
        currentCity: "",
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
        const {title, name, surname, citizenship, currentCity} = this.state; // destructuring
        return title.length && name.length && surname.length && citizenship.length && currentCity.length;
    }
    handleSubmit = (event) => {
        event.preventDefault();
        if( this.allFieldsComplete() ){
            this.props.createPersonal(this.state);
            this.setState({
                title: "",
                name: "",
                surname: "",
                citizenship: "",
                currentCity: "",
                isComplete: false
            });
        }
        else
            console.log("Fields not complete");
    }
    render() {
        return (
            <div className="personal-details container">
                <h4 className="align-center">Personal Details</h4>
                <hr/>
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="input-field col">
                            <input 
                                type="text" 
                                name="title"
                                value={this.state.title}
                                onChange={this.handleChange}
                                className="validate"/>
                            <label>Title</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col">
                            <input 
                                type="text"
                                name="name"
                                value={this.state.name}
                                onChange={this.handleChange} 
                                className="validate"/>
                            <label>Name</label>
                        </div>
                        <div className="input-field col">
                            <input 
                                type="text" 
                                name="surname"
                                value={this.state.surname}
                                onChange={this.handleChange}
                                className="validate"/>
                            <label>Surname</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col">
                            <input 
                                type="text" 
                                name="citizenship"
                                value={this.state.citizenship}
                                onChange={this.handleChange}
                                className="validate"/>
                            <label>Citizenship</label>
                        </div>
                        <div className="input-field col">
                            <input 
                                type="text" 
                                name="currentCity"
                                value={this.state.currentCity}
                                onChange={this.handleChange}
                                className="validate"/>
                            <label>Current city</label>
                        </div>
                    </div>
                    <button href="/applicant" className="btn-large">Submit<i className="material-icons right">send</i></button>
                    <a href="/residence" className="btn-large">Next</a>
                </form>
            </div>
        );
    }
    
}
const MapDispatchToProps = ( dispatch ) => {
    return {
        createPersonal: (details) => dispatch(personalDetails(details))
    }
}
export default connect(null, MapDispatchToProps)(Personal);