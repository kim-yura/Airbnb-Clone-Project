import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { useHistory, UseHistory } from "react-router-dom";

import './LoginForm.css';

function LoginForm() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password })).catch(
            async (res) => {
                const data = await res.json();
                if (data && data.errors) {
                    setErrors(data.errors)
                } else {
                    history.push('/');
                    return null;
                };
            }
        );
    };

    return (
        <form onSubmit={handleSubmit}>
            <ul>
                {errors.map((error, idx) => (
                    <li className="error" key={idx}>{error}</li>
                ))}
            </ul>
            <img id="form-logo" src="../../logo_rectangle.png" />
            <input
                className="form-item"
                type="text"
                value={credential}
                onChange={(e) => setCredential(e.target.value)}
                required
                placeholder="Username or Email"
            />
            <input
                className="form-item"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
            />
            <button
                className="form-item form-button"
                type="submit">Log In</button>
        </form>
    );
}

export default LoginForm;
