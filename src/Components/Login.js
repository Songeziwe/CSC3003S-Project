import React from 'react';

const Login = () => {
    return (
        <div className="login-section">
            <form>
                <div className="input-field">
                    <input id="student-number" class="validate" type="text"/>
                    <label For="student-number">Student number</label>
                </div>
                <div className="input-field">
                    <input id="password" class="validate" type="text"/>
                    <label For="password">Password</label>
                </div>
            </form>
        </div>
    );
}

export default Login;