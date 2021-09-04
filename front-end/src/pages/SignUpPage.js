import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useToken } from '../auth/useToken';
import axios from 'axios';

export const SignUpPage = () => {
    const [, setToken] = useToken();
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [confirmPasswordValue, setConfirmPasswordValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const history = useHistory();

    const onSignUpClicked = async () => {
        try {
            const response = await axios.post('http://localhost:4000/api/signup', {
                email: emailValue,
                password: passwordValue
            });

            const { token } = response.data;
            setToken(token);
            history.push('/please-verify');
        } catch (error) {
            setErrorMessage('Can not sign you up now, please try again!');
        }
    };

    return (
        <div className="content-container">
            <h1>Sign Up</h1>
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
            <input
                value={confirmPasswordValue}
                type="password"
                placeholder="password"
                onChange={(e) => {
                    setConfirmPasswordValue(e.target.value);
                }}
            />
            <button
                disabled={
                    !emailValue ||
          !passwordValue ||
          passwordValue !== confirmPasswordValue
                }
                onClick={onSignUpClicked}
            >
        Sign Up
            </button>
            <button onClick={() => history.push('/login')}>
        Already have an account? Log In
            </button>
        </div>
    );
};
