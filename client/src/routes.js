import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Loading from './components/loading';

const PetLayout = lazy(() => import('./components/layouts/pet-layout'));
const Dashboard = lazy(() => import('./components/dashboard'));
const CreatePet = lazy(() => import('./components/forms/create-pet'));
const EditPet = lazy(() => import('./components/pet-details/edit-pet'));
const RegisterForm = lazy(() => import('./components/forms/auth/register'));
const LoginForm = lazy(() => import('./components/forms/auth/login'));
const OtherPetDetails = lazy(() =>
    import('./components/pet-details/other-pet-details')
);
const NotFound = lazy(() => import('./components/not-found'));

const AuthRoute = lazy(() => import('./hoc/AuthRoute'));
const AuthFormRoute = lazy(() => import('./hoc/AuthFormRoute'));

function AppRoutes() {
    return (
        <>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path="/" element={<Navigate to="/pets" />} />
                    <Route path="/pets/*" element={<PetLayout />}>
                        <Route index element={<Dashboard />} />
                        <Route
                            path="categories/:category"
                            element={<Dashboard />}
                        />
                        <Route path=":id" element={<OtherPetDetails />} />
                        <Route
                            path="create"
                            element={<AuthRoute children={<CreatePet />} />}
                        />
                        <Route
                            path=":id/edit"
                            element={<AuthRoute children={<EditPet />} />}
                        />
                    </Route>
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
