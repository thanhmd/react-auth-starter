import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useToken } from '../auth/useToken';

export const LogInPage = () => {
    const [, setToken] = useToken();
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const history = useHistory();

    const onLogInClick = async () => {
        try {
            const response = await axios.post('http://localhost:4000/api/login', {
                email: emailValue,
                password: passwordValue,
            });
            const { token } = response.data;
            setToken(token);
            history.push('/');
        } catch (error) {
            setErrorMessage('Invalid credentials, please try again');
        }
    };

    return (
        <div className="content-container">
            <h1>Log In</h1>
            {errorMessage && <div className="fail">{errorMessage}</div>}
            <input
                value={emailValue}
                type="text"
                placeholder="soneone@gmail.com"
                onChange={(e) => {
                    setEmailValue(e.target.value);
                }}
            />
            <input
                value={passwordValue}
                type="password"
                placeholder="password"
                onChange={(e) => {
                    setPasswordValue(e.target.value);
                }}
            />
            <button disabled={!emailValue || !passwordValue} onClick={onLogInClick}>
        Log In
            </button>
            <button onClick={() => history.push('/forgot-password')}>
        Forgot your password
            </button>
            <button onClick={() => history.push('/signup')}>
        Don't have an account, Sign Up
            </button>
        </div>
    );
};
