import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Loading from '../components/loading';
import PetRoutes from './pet-routes';

const RegisterForm = lazy(() => import('../features/auth/forms/register'));
const LoginForm = lazy(() => import('../features/auth/forms/login'));
const NotFound = lazy(() => import('../components/not-found'));

const AuthFormRoute = lazy(() => import('../hoc/AuthFormRoute'));

function AppRoutes() {
    return (
        <>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path="/" element={<Navigate to="/pets" />} />
                    <Route path="/pets/*" element={<PetRoutes />}></Route>
                    <Route
                        path="/register"
                        element={<AuthFormRoute children={<RegisterForm />} />}
                    />
                    <Route
                        path="/login"
                        element={<AuthFormRoute children={<LoginForm />} />}
                    />

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
        </>
    );
}

export default AppRoutes;
