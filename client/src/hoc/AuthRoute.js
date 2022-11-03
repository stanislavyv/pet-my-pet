import { Navigate } from 'react-router-dom';

const AuthRoute = ({ children }) => {
    const isLoggedIn = Boolean(localStorage.getItem('uid'));

    return isLoggedIn ? children : <Navigate to="/login" />;
};

export default AuthRoute;
