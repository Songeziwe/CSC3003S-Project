import React, { Component } from 'react';
import {connect} from 'react-redux';
import { auth } from '../Store/action/actions';

// Controlled compnent
class Login extends Component {
    state = {
        email: "",
        password: ""
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.signIn(this.state);
    }
    render() {
        return (
            <div className="login-section">
                <form onSubmit={this.handleSubmit}>
                    <div className="container">
                        <h2>LogIn</h2>
                        <h4 className="red-text text-bold">{this.props.authError}</h4>
                        <div className="row">
                            <div className="input-field col lg6">
                                <input 
                                    id="student-number" 
                                    className="validate"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.handleChange} 
                                    type="text"/>
                                <label>Student number</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col lg6">
                                <input 
                                    id="password" 
                                    className="validate"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleChange} 
                                    type="password"/>
                                <label>Password</label>
                            </div>
                        </div>
                        <button className="btn">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
    
}
const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signIn : (creds) => {dispatch(auth(creds))},
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);