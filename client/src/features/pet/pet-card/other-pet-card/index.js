import React from 'react';

import useLike from '../../../../hooks/useLike';

import arePetsEqual from '../../../../utils/arePetsEqual';

import PetCardWrapper from '../pet-card-wrapper';
import PetCard from '..';
import PetButtonsWrapper from '../pet-buttons-wrapper';
import OtherPetLoggedButton from '../../../../components/buttons/other-pet-logged-button';
import DetailsButton from '../../../../components/buttons/details-button';

const OtherPetCard = React.memo((pet) => {
    const { likes, hasAlreadyLiked, toggleLike } = useLike(pet._id);

    return (
        <PetCardWrapper as="li">
            <PetCard pet={pet} />
            <PetButtonsWrapper>
                <OtherPetLoggedButton
                    id={pet._id}
                    parentCallback={toggleLike}
                    hasAlreadyLiked={hasAlreadyLiked}
                />
                <DetailsButton id={pet._id} />
                <i className="fas fa-heart"></i> <span>{likes}</span>
            </PetButtonsWrapper>
        </PetCardWrapper>
    );
}, arePetsEqual);

OtherPetCard.displayName = 'OtherPetCard';
export default OtherPetCard;
