import React, { useEffect } from 'react';
import './config/firebase';

import { useDispatch, useSelector } from 'react-redux';
import {
    setUserInfo,
    selectUserState,
    resetUserInfo,
} from './features/auth/userSlice';

import { onStateChange, getUserById } from './services/userService';

import ErrorBoundary from './components/error-boundary';

import Header from './components/header';
import Notification from './features/notification';
import DeletePopUp from './features/modal/delete-pop-up';
import Content from './components/content';
import Footer from './components/footer';

import AppRoutes from './routes/routes';
import Loading from './components/loading';

function App() {
    const { loading } = useSelector(selectUserState);
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = onStateChange((u) => {
            if (u) {
                getUserById(u.uid).then((user) => {
                    dispatch(setUserInfo(user));
                });
            } else {
                dispatch(resetUserInfo());
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <>
            {loading ? (
                <Loading type="auth" />
            ) : (
                <>
                    <Header />
                    <Content>
                        <ErrorBoundary>
                            <AppRoutes />
                            <Notification />
                            <DeletePopUp />
                        </ErrorBoundary>
                    </Content>
                    <Footer />
                </>
            )}
        </>
    );
}

export default App;
