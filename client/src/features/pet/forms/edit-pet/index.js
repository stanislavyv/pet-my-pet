import styled from 'styled-components';

import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
    notifyInfo,
    notifyError,
} from '../../../notification/notificationSlice';

import { getPetById, editPet } from '../../petActions';
import { selectPetState, resetFormState } from '../../petSlice';

import Loading from '../../../../components/loading';
import PetCardWrapper from '../../pet-card/pet-card-wrapper';
import PetDetailsWrapper from '../../pet-details/pet-details-wrapper';
import PetImage from '../../pet-card/pet-image';
import Button from '../../../../components/shared/button';

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
    const { success, error } = useSelector(selectPetState);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPetById(id))
            .unwrap()
            .then((res) => {
                setPet(res);
            });
    }, [id]);

    useEffect(() => {
        if (!success.status && !error) {
            return;
        }

        if (success.status) {
            dispatch(resetFormState());
            dispatch(notifyInfo(success.message));
            navigate('/pets');
        } else if (error) {
            dispatch(notifyError(error));
        }

        return () => dispatch(resetFormState());
    }, [success, error]);

    const onDescriptionSubmitHandler = async (e) => {
        e.preventDefault();

        const newDescription = e.target.description.value;
        dispatch(editPet({ id, newDescription, petName: pet.name }));
    };

    return (
        <>
            {/* absence of _id  means that pet state hasn't been set yet*/}
            {/* loading state won't work here because getPetById() 
            get fulfilled before setPet() has finished*/}
            {pet._id ? (
                <PetDetailsWrapper>
                    <PetCardWrapper>
                        <h3>{pet.name}</h3>
                        <p>
                            Pet counter: <i className="fas fa-heart"></i>{' '}
                            {pet.likes}
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
            ) : (
                <Loading />
            )}
        </>
    );
};

export default EditPet;
