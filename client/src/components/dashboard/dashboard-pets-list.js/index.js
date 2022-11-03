import { useState, useEffect } from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import { useNotification } from '../../../contexts/NotificationContext';

import { getAllPets } from '../../../utils/petService';

import PetsList from '../../pets-list';
import OtherPetCard from '../../pet-card/other-pet-card';
import MyPetCard from '../../pet-card/my-pet-card';

const DashboardPetsList = ({ category }) => {
    const [pets, setPets] = useState([]);
    const { email, isLoggedIn } = useAuth();
    const { notification } = useNotification();

    // use notification.message so useEffect() doesn't get called twice on notification state change
    useEffect(() => {
        getAllPets(category).then(setPets);
    }, [category, notification.message]);

    return (
        <>
            {pets.length > 0 ? (
                <PetsList>
                    {pets.map((pet) => {
                        if (isLoggedIn) {
                            return pet.creator.email.toLowerCase() ===
                                email.toLowerCase() ? (
                                <MyPetCard key={pet._id} {...pet} />
                            ) : (
                                <OtherPetCard key={pet._id} {...pet} />
                            );
                        }

                        return <OtherPetCard key={pet._id} {...pet} />;
                    })}
                </PetsList>
            ) : (
                <h1>Nothing to see here...</h1>
            )}
        </>
    );
};

export default DashboardPetsList;
