import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { UserInfoPage } from './pages/UserInfoPage';
import { LogInPage } from './pages/LoginPage';
import { SignUpPage } from './pages/SignUpPage';
import { PrivateRoute } from './auth/PrivateRoute';
import { PleaseVerifyEmailPage } from './pages/PleaseVerifyEmailPage';
import { EmailVerificationLandingPage  } from './pages/EmailVerificationLandingPage';

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <PrivateRoute path="/" exact>
                    <UserInfoPage />
                </PrivateRoute>
                <Route path="/verify-email/:verificationString">
                    <EmailVerificationLandingPage />
                </Route>
                <Route path="/please-verify">
                    <PleaseVerifyEmailPage />
                </Route>
                <Route path="/login" exact>
                    <LogInPage />
                </Route>
                <Route path="/signup" exact>
                    <SignUpPage />
                </Route>
            </Switch>
        </Router>
    );
};