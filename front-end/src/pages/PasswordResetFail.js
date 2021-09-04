import React from 'react';
import { useHistory } from 'react-router-dom';

export const PasswordResetFail = () => {
    const history = useHistory();

    return (
        <div className="content-container">
            <h1>Oops!</h1>
            <p>Something went wrong while trying reset your email</p>
            <button onClick={() => history.push('/login')}>Back to login</button>
        </div>
    );
};