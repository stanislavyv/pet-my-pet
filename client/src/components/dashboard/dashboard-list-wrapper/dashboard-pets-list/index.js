import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllPets } from '../../../../features/pet/petActions';
import {
    selectAllPets,
    selectPetState,
} from '../../../../features/pet/petSlice';
import { selectPageData } from '../../../../features/pagination/pageSlice';
import { selectNotification } from '../../../../features/notification/notificationSlice';

import { useSearchParams } from 'react-router-dom';

import {
    resetPage,
    setPageItemsCount,
} from '../../../../features/pagination/pageSlice';

import PetsList from '../../../../features/pet/pets-list';
import PagesList from '../../../../features/pagination/pages-list';
import Spinner from '../../../loading/spinner';
import DashboardPetsListHeader from './dashboard-pets-list-header';

const DashboardPetsListBlank = lazy(() =>
    import('./dashboard-pets-list-blank')
);

const DashboardPetsList = () => {
    const pets = useSelector(selectAllPets);
    const { loading } = useSelector(selectPetState);

    const dispatch = useDispatch();
    const notification = useSelector(selectNotification);
    const { currentPage } = useSelector(selectPageData);

    const [searchParams, setSearchParams] = useSearchParams();

    // include notification.message in deps array so useEffect()
    // doesn't get called twice on notification state change
    useEffect(() => {
        dispatch(getAllPets())
            .unwrap()
            .then(({ count, result }) => {
                setPageDataOnLoad(count);
                window.scrollTo(0, 0);
            });
    }, [notification.message, searchParams]);

    // modify search params here because it would cause unnecessary
    // rerendering if done outside of this component (in PagesList for example)
    useEffect(() => {
        setSearchParams((state) => {
            state.set('page', currentPage);
            return state;
        });
    }, [currentPage]);

    function setPageDataOnLoad(totalItemsCount) {
        dispatch(setPageItemsCount(totalItemsCount));

        if (!searchParams.get('page')) {
            dispatch(resetPage());
        }
    }

    return (
        <>
            {loading ? (
                <Spinner />
            ) : (
                <>
                    <DashboardPetsListHeader />
                    {pets.length > 0 ? (
                        <>
                            <PetsList pets={pets} />
                            <PagesList />
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
