
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useToken } from '../auth/useToken';
import { useParams } from 'react-router-dom';

import { EmailVerificationSuccess} from './EmailVerificationSuccess';          
import { EmailVerificationFail} from './EmailVerificationFail';

export const EmailVerificationLandingPage = () => {
    console.log('okok');
    const [ isLoading, setIsLoading ] = useState(true);
    const [ isSuccess, setIsSuccess ] = useState(false);
    const { verificationString } = useParams();
    const [, setToken] = useToken();

    useEffect(() => {
        const loadVerification = async () => {
            try {
                const response = await axios.put('http://localhost:4000/api/verify-email', { verificationString });
                console.log(response);

                const { token } = response.data;
                console.log(response);
                setToken(token);
                setIsSuccess(true);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
                setIsSuccess(false);
                setIsLoading(false);
            }
        };
        loadVerification();
    }, [setToken, verificationString]);


    if (isLoading) return <p>Loading...</p>;
    if (!isSuccess) return <EmailVerificationFail />;
    if (isSuccess) return <EmailVerificationSuccess />;
};