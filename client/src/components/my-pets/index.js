import { useAuth } from '../../contexts/AuthContext';

import MyPetsList from './my-pets-list';

const MyPets = () => {
    const { email } = useAuth();

    return (
        <section className="my-pets">
            <h1>My Pets</h1>
            <MyPetsList email={email} />
        </section>
    );
};

export default MyPets;
