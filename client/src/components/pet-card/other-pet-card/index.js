import React from 'react';

import useLike from '../../../hooks/useLike';

import PetCard from '..';
import PetCardWrapper from '../pet-card-wrapper';
import OtherPetLoggedButton from '../../buttons/other-pet-logged-button';
import DetailsButton from '../../buttons/details-button';

import toUpperCase from '../../../utils/misc/toUpperCase';
import arePetsEqual from '../../../utils/misc/arePetsEqual';
import PetButtonsWrapper from '../pet-buttons-wrapper';

const OtherPetCard = React.memo((pet) => {
    const { likes, hasAlreadyLiked, toggleLike } = useLike(pet._id);

    return (
        <PetCardWrapper as="li">
            <PetCard pet={{ ...pet, category: toUpperCase(pet.category) }} />
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
