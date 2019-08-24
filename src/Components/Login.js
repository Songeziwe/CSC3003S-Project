import React from 'react';
import {connect} from 'react-redux';
import {auth, handleChange} from '../action/actions';

const Login = (props) => {
    if(props.users[0].isLogged){
        console.log(props);
        props.history.push('/applicant');
    }
    return (
        <div className="login-section">
            <form onSubmit={props.theAuth}>
                <div className="container">
                    <h4>LogIn</h4>
                    <div className="row">
                        <div className="input-field col lg6">
                            <input 
                                id="student-number" 
                                className="validate"
                                name="username"
                                value={props.username}
                                onChange={props.handleChange} 
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
                                value={props.password}
                                onChange={props.handleChange} 
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
const mapStateToProps = (state) => {
    const {username, password, users} = state;
    return {
        username,
        password,
        users
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        theAuth     : (event) => {dispatch(auth(event))},
        handleChange: (event) => {dispatch(handleChange(event))}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);