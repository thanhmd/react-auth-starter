import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export const ForgotPasswordPage = () => {
    const [emailValue, setEmailValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState('');
    const history = useHistory();

    const onSubmitClicked = async () => {
        try {
            await axios.put(`http://localhost:4000/api/forgot-password/${emailValue}`);
            setSuccess(true);
            setTimeout(() => {
                history.push('/login');
            }, 3000);
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    return success ? (
        <div className="content-container">
            <h1>Success</h1>
            <p>Check for email for a reset link</p>
        </div>
    ) : (
        <div className="content-container">
            <h1>{'Forgot Password'}</h1>
            <p>{'Enter your email and we\'ll send you a reset link'}</p>
            {errorMessage && <div className="fail">{errorMessage}</div>}
            <input
                value={emailValue}
                onChange={e => setEmailValue(e.target.value)}
                placeholder='example@abc.com'
            ></input>
            <button
                disabled={!emailValue}
                onClick={onSubmitClicked}
            >
            Send reset link
            </button>
        </div>
    );
};