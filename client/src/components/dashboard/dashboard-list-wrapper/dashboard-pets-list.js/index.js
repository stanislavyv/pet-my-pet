import { useState, useEffect, lazy } from 'react';

import { useNotification } from '../../../../contexts/NotificationContext';
import { useSearchParams } from 'react-router-dom';
import { trackPromise, usePromiseTracker } from 'react-promise-tracker';

import { getAllPets } from '../../../../utils/petService';

import PetsList from '../../../pets-list';
import PagesList from '../../../pages-list';
import Spinner from '../../../loading/spinner';
import DashboardPetsListHeader from './dashboard-pets-list-header';
const DashboardPetsListBlank = lazy(() =>
    import('./dashboard-pets-list-blank')
);

const DashboardPetsList = () => {
    // current page items
    const [pets, setPets] = useState([]);
    // the count of all items that satisfy the query condition
    const [count, setCount] = useState(0);

    const [searchParams] = useSearchParams();
    const promiseInProgress = usePromiseTracker({ delay: 500 });
    const { notification } = useNotification();

    // use notification.message so useEffect() doesn't get called twice on notification state change
    useEffect(() => {
        try {
            trackPromise(getAllPets()).then(({ count, result }) => {
                setPets(result);
                setCount(count);

                window.scrollTo(0, 0);
            });
        } catch (e) {
            console.log(e);
        }

        return () => {};
    }, [notification.message, searchParams]);

    return (
        <>
            {/* {promiseInProgress ? (
                <Spinner />
            ) : 
            ( */}
                <>
                    <DashboardPetsListHeader />
                    {pets.length > 0 ? (
                        <>
                            <PetsList pets={pets} />
                            <PagesList count={count} />
                        </>
                    ) : (
                        <DashboardPetsListBlank />
                    )}
                </>
            {/* )} */}
        </>
    );
};

export default DashboardPetsList;
