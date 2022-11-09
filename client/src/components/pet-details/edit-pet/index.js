import styled from 'styled-components';

import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useNotification } from '../../../contexts/NotificationContext';

import { getPetById, editPet } from '../../../utils/petService';
import * as formValidator from '../../../utils/formValidator';

import PetCardWrapper from '../../pet-card/pet-card-wrapper';
import PetDetailsWrapper from '../pet-details-wrapper';
import Button from '../../shared/button';
import PetImage from '../../pet-card/pet-image';

const StyledEditForm = styled.form`
    display: flex;
    justify-content: center;
    flex-direction: column;

    & button {
        align-self: center;
        margin: 0.6rem 0;
    }
`;

const EditPet = () => {
    const [pet, setPet] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
    const { notifyInfo, notifyError } = useNotification();

    useEffect(() => {
        getPetById(id).then(setPet);
    }, [id]);

    const onDescriptionSubmitHandler = async (e) => {
        e.preventDefault();

        const newDescription = e.target.description.value;

        const result = await editPet(id, newDescription);

        if (result.message) {
            notifyError(result.message);
            return;
        } else {
            navigate('/pets');
            notifyInfo(`Successfully edited ${pet.name}!`);
        }
    };

    return (
        <PetDetailsWrapper>
            <PetCardWrapper>
                <h3>{pet.name}</h3>
                <p>
                    Pet counter: <i className="fas fa-heart"></i> {pet.likes}
                </p>
                <PetImage url={pet.imageURL} className="img-wrapper" />
                <StyledEditForm onSubmit={onDescriptionSubmitHandler}>
                    <textarea
                        type="text"
                        name="description"
                        rows="5"
                        cols="30"
                        defaultValue={pet.description}
                    />
                    <Button type="submit">Save</Button>
                </StyledEditForm>
            </PetCardWrapper>
        </PetDetailsWrapper>
    );
};

export default EditPet;
