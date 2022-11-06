import { Route, Routes, Navigate } from 'react-router-dom';

import PetLayout from './components/layouts/pet-layout';
import Dashboard from './components/dashboard';
import CreatePet from './components/forms/create-pet';
import EditPet from './components/pet-details/edit-pet';
import RegisterForm from './components/forms/auth/register';
import LoginForm from './components/forms/auth/login';
import OtherPetDetails from './components/pet-details/other-pet-details';

import AuthRoute from './hoc/AuthRoute';
import AuthFormRoute from './hoc/AuthFormRoute';

function AppRoutes() {
    return (
        <>
            <Routes>
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

                <Route path="*" element={<Navigate to="/pets" />} />
            </Routes>
        </>
    );
}

export default AppRoutes;
