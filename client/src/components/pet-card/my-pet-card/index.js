import React, { useState } from 'react';

import PetInfo from '../pet-info';
import PetCard from '..';
import PetCardWrapper from '../pet-card-wrapper';
import DeleteButton from '../../buttons/delete-button';
import EditButton from '../../buttons/edit-button';
import DeletePopUp from '../../delete-pop-up';

import toUpperCase from '../../../utils/misc/toUpperCase';
import arePetsEqual from '../../../utils/misc/arePetsEqual';

const MyPetCard = React.memo((pet) => {
    const [popUp, setPopUp] = useState(false);

    function onDeleteClick() {
        setPopUp(true);
    }

    return (
        <PetCardWrapper as="li">
            {popUp && <DeletePopUp id={pet._id} setPopUp={setPopUp} />}
            <PetCard pet={{ ...pet, category: toUpperCase(pet.category) }} />
            <PetInfo>
                <DeleteButton onClick={onDeleteClick} id={pet._id} />
                <EditButton id={pet._id} />
            </PetInfo>
        </PetCardWrapper>
    );
}, arePetsEqual);

MyPetCard.displayName = 'MyPetCard';
export default MyPetCard;
