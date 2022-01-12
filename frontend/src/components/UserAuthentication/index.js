import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import LoginForm from "../LoginFormModal/LoginForm";
import DemoLogin from "../DemoLogin";

import "./UserAuthentication.css";

function UserAuthentication() {
    const history = useHistory();

    let sessionUser = useSelector(state => state.session.user);
    const [userId, setUserId] = useState(sessionUser ? sessionUser.id : "");

    useEffect(() => {
        if (sessionUser) {
            console.log("We are logged in!")
            history.push('/');
            return null;
        }
    })

    return (
        <>
            <p className="error-message">You must be signed in to access this page!</p>
            <LoginForm />
            <DemoLogin />
        </>
    )
};

export default UserAuthentication;
