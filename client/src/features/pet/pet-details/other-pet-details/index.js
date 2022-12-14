import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useLike from '../../../../hooks/useLike';

import { getPetById } from '../../petActions';

import Loading from '../../../../components/loading';
import PetCardWrapper from '../../pet-card/pet-card-wrapper';
import PetDetailsWrapper from '../pet-details-wrapper';
import PetCard from '../../pet-card';
import PetButtonsWrapper from '../../pet-card/pet-buttons-wrapper';
import OtherPetLoggedButton from '../../../../components/buttons/other-pet-logged-button';

const OtherPetDetails = () => {
    const { id } = useParams();
    // set initial state so children can render empty pet-card
    // while pet loads (doesn't work with spinner for some reason)
    const [pet, setPet] = useState({});
    const { likes, hasAlreadyLiked, toggleLike } = useLike(id);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPetById(id))
            .unwrap()
            .then((res) => {
                setPet(res);
            });
    }, [id]);

    return (
        <>
            {/* absence of _id  means that pet state hasn't been set yet*/}
            {/* loading state won't work here because getPetById() 
            get fulfilled before setPet() has finished*/}
            {pet._id ? (
                <PetDetailsWrapper>
                    <PetCardWrapper bigger>
                        <PetCard pet={pet} isDetailsPage={true} />
                        <PetButtonsWrapper>
                            <OtherPetLoggedButton
                                id={pet._id}
                                hasAlreadyLiked={hasAlreadyLiked}
                                parentCallback={toggleLike}
                            />
                            <i className="fas fa-heart"></i>{' '}
                            <span>{likes}</span>
                        </PetButtonsWrapper>
                    </PetCardWrapper>
                </PetDetailsWrapper>
            ) : (
                <Loading />
            )}
        </>
    );
};

export default OtherPetDetails;
