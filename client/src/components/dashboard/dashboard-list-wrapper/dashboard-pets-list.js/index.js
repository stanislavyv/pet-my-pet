import { useState, useEffect } from 'react';

import { useAuth } from '../../../../contexts/AuthContext';
import { useNotification } from '../../../../contexts/NotificationContext';
import usePageData from '../../../../hooks/usePageData';
import { useSearchParams } from 'react-router-dom';

import { trackPromise } from 'react-promise-tracker';
import { getAllPets } from '../../../../utils/petService';

import PetsList from '../../../pets-list';
import PagesList from '../../../pages-list';
import BlankPage from '../../../shared/blank-page';

const DashboardPetsList = () => {
    const [pets, setPets] = useState([]);
    const { email, isLoggedIn } = useAuth();
    const { notification } = useNotification();
    const [{ currentPage, totalItemsCount }, dispatchPageData] = usePageData();
    const [searchParams] = useSearchParams();

    // use notification.message so useEffect() doesn't get called twice on notification state change
    useEffect(() => {
        trackPromise(getAllPets()).then(({ count, result }) => {
            setPets(result);
            dispatchPageData({ type: 'setCount', payload: count });
        });

        return () => {};
    }, [notification.message, searchParams]);

    return (
        <>
            {searchParams.get('ownerid') ? <h1>{email}'s pets</h1> : ''}
            {pets.length > 0 ? (
                <>
                    <PetsList
                        pets={pets}
                        isLoggedIn={isLoggedIn}
                        email={email}
                    />
                    <PagesList
                        currentPage={currentPage}
                        totalCount={totalItemsCount}
                        dispatchCallback={dispatchPageData}
                    />
                </>
            ) : (
                <>
                    {searchParams.has('ownerid') ? (
                        <BlankPage>You haven't added any pets yet...</BlankPage>
                    ) : (
                        <BlankPage>Nothing to see here...</BlankPage>
                    )}
                </>
            )}
        </>
    );
};

export default DashboardPetsList;
