import { useState, useEffect, useRef, lazy } from 'react';

import { useNotification } from '../../../../contexts/NotificationContext';
import usePageData from '../../../../hooks/usePageData';

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
    const [pets, setPets] = useState([]);

    const { notification } = useNotification();
    const [{ currentPage, totalItemsCount }, dispatchPageData] = usePageData();

    const [searchParams] = useSearchParams();
    const { promiseInProgress } = usePromiseTracker({ delay: 500 });

    const isMounted = useRef(false);

    // use notification.message so useEffect() doesn't get called twice on notification state change
    useEffect(() => {
        try {
            isMounted.current = true;
            if (isMounted) {
                trackPromise(getAllPets()).then(({ count, result }) => {
                    setPets(result);

                    dispatchPageData({ type: 'setCount', payload: count });

                    if (!searchParams.get('page')) {
                        dispatchPageData({ type: 'reset' });
                    }

                    window.scrollTo(0, 0);
                });
            }

            return () => (isMounted.current = false);
        } catch (e) {
            console.log(e);
        }
    }, [notification.message, searchParams]);

    return (
        <>
            {promiseInProgress ? (
                <Spinner />
            ) : (
                <>
                    <DashboardPetsListHeader />
                    {pets.length > 0 ? (
                        <>
                            <PetsList pets={pets} />
                            <PagesList
                                currentPage={currentPage}
                                totalItemsCount={totalItemsCount}
                                dispatchCallback={dispatchPageData}
                            />
                        </>
                    ) : (
                        <DashboardPetsListBlank />
                    )}
                </>
            )}
        </>
    );
};

export default DashboardPetsList;
