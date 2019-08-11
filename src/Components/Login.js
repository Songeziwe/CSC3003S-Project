import React from 'react';

const Login = () => {
    return (
        <div className="login-section">
            <form>
                <div className="container">
                    <div className="row">
                        <div className="input-field col lg6">
                            <input id="student-number" className="validate" type="text"/>
                            <label>Student number</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col lg6">
                            <input id="password" className="validate" type="text"/>
                            <label>Password</label>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Login;