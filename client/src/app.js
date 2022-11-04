import React from 'react';
import './config/firebase';

import GlobalStyles from './GlobalStyles';

import AuthProvider from './contexts/AuthContext';
import NotificationProvider from './contexts/NotificationContext';

import CustomErrorBoundary from './components/custom-error-boundary';

import Header from './components/header';
import Footer from './components/footer';
import Notification from './components/notification';

import AppRoutes from './routes';

function App() {
    return (
        <>
            <GlobalStyles />
            <AuthProvider>
                <Header />
                <CustomErrorBoundary>
                    <NotificationProvider>
                        <AppRoutes />
                        <Notification />
                    </NotificationProvider>
                </CustomErrorBoundary>
            </AuthProvider>
            <Footer />
        </>
    );
}

export default App;
