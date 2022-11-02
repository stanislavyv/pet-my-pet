import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import { getAccessToken } from '../utils/authService';
import { useAuth } from '../contexts/AuthContext';

const AuthRoute = ({ children }) => {
    const isLoggedIn = Boolean(localStorage.getItem('accessToken'));

    return isLoggedIn ? children : <Navigate to="/login" />;
};

export default AuthRoute;
