import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../hooks/useAuth';



const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return (
            <div class="spinner d-flex align-items-center justify-content-center">
                <div class="rect1"></div>
                <div class="rect2"></div>
                <div class="rect3"></div>
                <div class="rect4"></div>
                <div class="rect5"></div>
            </div>
        );
    }

    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children :
                <Redirect
                    to={{
                        pathname: "/",
                        state: { from: location },
                        modalCount: 1
                    }}
                ></Redirect>}
        >

        </Route>
    );
};

export default PrivateRoute;