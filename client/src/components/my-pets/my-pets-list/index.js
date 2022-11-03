import { useEffect, useState } from 'react';
import { useAuth } from '../../../contexts/AuthContext';

import { getAllPets } from '../../../utils/petService';

import PetsList from '../../pets-list';
import MyPetCard from '../../pet-card/my-pet-card';

const MyPetsList = () => {
    const [pets, setPets] = useState([]);
    const { userId } = useAuth();

    useEffect(() => {
        const searchObj = { type: 'ownerId', data: userId };

        getAllPets(searchObj).then((pets) => {
            setPets(pets);
        });
    }, [userId]);

    return (
        <>
            {pets.length > 0 ? (
                <PetsList>
                    {pets.map((p) => {
                        return <MyPetCard key={p._id} {...p} />;
                    })}
                </PetsList>
            ) : (
                <div>You haven't added pets yet!</div>
            )}
        </>
    );
};

export default MyPetsList;
