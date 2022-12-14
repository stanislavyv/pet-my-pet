import React from 'react';
import { useDispatch } from 'react-redux';

import { showModal } from '../../../modal/modalsSlice';

import toUpperCase from '../../../../utils/toUpperCase';
import arePetsEqual from '../../../../utils/arePetsEqual';

import PetButtonsWrapper from '../pet-buttons-wrapper';
import PetCard from '..';
import PetCardWrapper from '../pet-card-wrapper';
import DeleteButton from '../../../../components/buttons/delete-button';
import EditButton from '../../../../components/buttons/edit-button';

const MyPetCard = React.memo((pet) => {
    const dispatch = useDispatch();

    function onDeleteClick() {
        dispatch(showModal(pet._id));
    }

    return (
        <PetCardWrapper as="li">
            <PetCard pet={{ ...pet, category: toUpperCase(pet.category) }} />
            <PetButtonsWrapper>
                <DeleteButton onClick={onDeleteClick} id={pet._id} />
                <EditButton id={pet._id} />
            </PetButtonsWrapper>
        </PetCardWrapper>
    );
}, arePetsEqual);

MyPetCard.displayName = 'MyPetCard';
export default MyPetCard;
