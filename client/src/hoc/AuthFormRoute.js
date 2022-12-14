import { Navigate } from 'react-router-dom';

const AuthFormRoute = ({ children }) => {
    const isLoggedIn = Boolean(localStorage.getItem('uid'));
    return !isLoggedIn ? children : <Navigate to="/pets" />;
};

export default AuthFormRoute;
