import { useState, useEffect } from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import { useNotification } from '../../../contexts/NotificationContext';
import usePageData from '../../../hooks/usePageData';
import { useSearchParams } from 'react-router-dom';

import { getAllPets } from '../../../utils/petService';

import PetsList from '../../pets-list';
import OtherPetCard from '../../pet-card/other-pet-card';
import MyPetCard from '../../pet-card/my-pet-card';
import PagesList from '../../pages-list';

const DashboardPetsList = ({ category }) => {
    const [pets, setPets] = useState([]);
    const { email, isLoggedIn } = useAuth();
    const { notification } = useNotification();
    const [{ currentPage, totalItemsCount }, dispatchPageData] = usePageData();
    const [searchParams, setSearchParams] = useSearchParams();

    // use notification.message so useEffect() doesn't get called twice on notification state change
    useEffect(() => {
        const searchObj = category
            ? { type: 'category', data: category }
            : null;

        getAllPets(searchObj).then((pets) => {
            setPets(pets);
            dispatchPageData({ type: 'setCount', payload: pets.length });
        });
    }, [category, notification.message, currentPage]);

    return (
        <>
            {pets.length > 0 ? (
                <>
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
                    <PagesList
                        currentPage={currentPage}
                        totalCount={totalItemsCount}
                        dispatchCallback={dispatchPageData}
                    />
                </>
            ) : (
                <h1>Nothing to see here...</h1>
            )}
        </>
    );
};

export default DashboardPetsList;
