import React, { useState, useEffect, useContext, useMemo } from 'react';

import { useFirebaseAuthState, onStateChange } from '../../utils/authService';

const AuthContext = React.createContext({});
AuthContext.displayName = 'AuthContext';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [, loading] = useFirebaseAuthState();

    useEffect(() => {
        onStateChange(setUser);
    }, []);

    const authValue = useMemo(
        () => ({
            loading,
            isLoggedIn: Boolean(user),
            username: user?.email,
        }),
        [user, loading]
    );

    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
