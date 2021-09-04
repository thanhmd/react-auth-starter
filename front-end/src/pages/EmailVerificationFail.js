import React from 'react';
import { useHistory } from 'react-router-dom';

export const EmailVerificationFail = () => {
    const history = useHistory();

    return (
        <div className="content-container">
            <h1>Oops!</h1>
            <p>Something went wrong while trying verifying your email</p>
            <button onClick={() => history.push('/signup')}>Back to sign up</button>
        </div>
    );
};