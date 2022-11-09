import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import PetLayout from '../../components/layouts/pet-layout';

const Dashboard = lazy(() => import('../../components/dashboard'));
const CreatePet = lazy(() => import('../../components/forms/create-pet'));
const EditPet = lazy(() => import('../../components/pet-details/edit-pet'));
const OtherPetDetails = lazy(() =>
    import('../../components/pet-details/other-pet-details')
);
const AuthRoute = lazy(() => import('../../hoc/AuthRoute'));

const PetRoutes = () => {
    return (
        <Routes>
            <Route element={<PetLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="categories/:category" element={<Dashboard />} />
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
        </Routes>
    );
};

export default PetRoutes;
