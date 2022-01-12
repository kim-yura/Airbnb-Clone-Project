import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import "./DemoLogin.css";

function DemoLogin() {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        const credential = "DemoDami";
        const password = "password";

        dispatch(sessionActions.login({ credential, password }));
        history.push("/");
    };

    return (
        <form onSubmit={handleSubmit}>
            <button
                className="demo-button form-item form-button"
                type="submit">
                Demo User
            </button>
        </form>
    )
};

export default DemoLogin;
