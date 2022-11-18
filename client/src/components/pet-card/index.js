import React from 'react';

import styled from 'styled-components';

import arePetsEqual from '../../utils/misc/arePetsEqual';
import PetOwnerLink from './other-pet-card/pet-owner-link';

import PetImage from './pet-image';

const StyledPetCard = styled.article`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

const PetCard = React.memo(({ pet }) => {
    return (
        <StyledPetCard>
            <PetImage url={pet.imageURL} className="pet-card-image" />
            <h3 className="pet-name">Name: {pet.name}</h3>
            <p className="pet-category">
                <span className="bold-span">Category:</span> {pet.category}
            </p>
            <PetOwnerLink creator={pet.creator} />
            <p className="pet-description">{pet.description}</p>
        </StyledPetCard>
    );
}, arePetsEqual);

PetCard.displayName = 'PetCard';
export default PetCard;
