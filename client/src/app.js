import React from 'react';
import './config/firebase';

import GlobalStyles from './GlobalStyles';

import AuthProvider from './contexts/AuthContext';
import NotificationProvider from './contexts/NotificationContext';

import CustomErrorBoundary from './components/custom-error-boundary';

import Header from './components/header';
import Content from './components/content';
import Notification from './components/notification';
import Footer from './components/footer';

import AppRoutes from './routes/routes';

function App() {
    return (
        <>
            <GlobalStyles />
            <AuthProvider>
                <Header />
                <NotificationProvider>
                    <Content>
                        <CustomErrorBoundary>
                            <AppRoutes />
                            <Notification />
                        </CustomErrorBoundary>
                    </Content>
                </NotificationProvider>
            </AuthProvider>
            <Footer />
        </>
    );
}

export default App;
