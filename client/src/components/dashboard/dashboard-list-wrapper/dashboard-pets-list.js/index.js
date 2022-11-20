import { useState, useEffect, lazy } from 'react';

import { useAuth } from '../../../../contexts/AuthContext';
import { useNotification } from '../../../../contexts/NotificationContext';
import usePageData from '../../../../hooks/usePageData';
import { useSearchParams } from 'react-router-dom';

import { trackPromise } from 'react-promise-tracker';
import { getAllPets } from '../../../../utils/petService';
import { getUsernameById } from '../../../../utils/userService';

import PetsList from '../../../pets-list';
import PagesList from '../../../pages-list';
const BlankPage = lazy(() => import('../../../shared/blank-page'));

const DashboardPetsList = () => {
    const [pets, setPets] = useState([]);
    const [loading, setLoading] = useState(true);
    const { email, isLoggedIn, userId } = useAuth();
    const { notification } = useNotification();
    const [{ currentPage, totalItemsCount }, dispatchPageData] = usePageData();
    const [searchParams] = useSearchParams();

    const [ownerUsername, setOwnerUsername] = useState('');

    // use notification.message so useEffect() doesn't get called twice on notification state change
    useEffect(() => {
        setLoading(true);
        try {
            trackPromise(getAllPets()).then(({ count, result }) => {
                setLoading(false);
                setPets(result);
                dispatchPageData({ type: 'setCount', payload: count });

                if (!searchParams.get('page')) {
                    dispatchPageData({ type: 'reset' });
                }

                window.scrollTo(0, 0);

                const ownerId = searchParams.get('ownerid');
                if (ownerId) {
                    getUsernameById(ownerId).then((un) => setOwnerUsername(un));
                }
            });
        } catch (e) {
            console.log(e);
            setLoading(false);
        }

        return () => {};
    }, [notification.message, searchParams]);

    return (
        <>
            {searchParams.get('ownerid') ? <h1>{ownerUsername}'s pets</h1> : ''}
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
                    {!loading &&
                        (searchParams.has('ownerid') ? (
                            decodeURIComponent(searchParams.get('ownerid')) ===
                            userId ? (
                                <BlankPage header="You haven't added any pets yet..." />
                            ) : (
                                <BlankPage header="This user doesn't have any pets yet..." />
                            )
                        ) : (
                            <BlankPage header="Nothing to see here..." />
                        ))}
                </>
            )}
        </>
    );
};

export default DashboardPetsList;
