import React from 'react';

import styled from 'styled-components';

import toUpperCase from '../../../utils/toUpperCase';
import formatDescription from '../../../utils/formatPetDescription';

import PetOwnerLink from './pet-owner-link';
import PetImage from './pet-image';

const StyledPetCard = styled.article`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

const PetCard = ({ pet, isDetailsPage }) => {
    const petDescription = formatDescription(pet.description, isDetailsPage);

    return (
        <StyledPetCard>
            <PetImage url={pet.imageURL} className="pet-card-image" />
            <h3 className="pet-name">Name: {pet.name}</h3>
            <p className="pet-category">
                <span className="bold-span">Category:</span>{' '}
                {toUpperCase(pet.category)}
            </p>
            <PetOwnerLink creator={pet.creator} />
            <p className="pet-description">{petDescription}</p>
        </StyledPetCard>
    );
};

PetCard.displayName = 'PetCard';
export default PetCard;
