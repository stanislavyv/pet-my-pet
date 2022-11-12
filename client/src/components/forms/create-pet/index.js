import { useState, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
import { useNotification } from '../../../contexts/NotificationContext';

import { createPet } from '../../../utils/petService';

import * as formValidator from '../../../utils/formValidator';

import InputError from '../../shared/input-error';
import Button from '../../shared/button';
import Form from '../../shared/form';
import Fieldset from '../../shared/form/fieldset';
import FormLegend from '../../shared/form/form-legend';
import Field from '../../shared/form/field';
import FormWrapper from '../../shared/form/form-wrapper';

const errorReducer = (state, { type, payload }) => {
    switch (type) {
        case 'name':
            return { ...state, name: payload };
        case 'description':
            return { ...state, description: payload };
        case 'imageURL':
            return { ...state, imageURL: payload };
        default:
            return state;
    }
};

const CreatePet = () => {
    const [errors, dispatch] = useReducer(errorReducer, {
        name: '',
        description: '',
        imageURL: '',
    });
    const [isValid, setIsValid] = useState(false);
    const { email } = useAuth();
    const { notifyInfo, notifyError } = useNotification();
    const navigate = useNavigate();

    const onNameBlurHandler = (e) => {
        const nameValue = e.target.value;
        const type = 'name';

        if (!formValidator.isPetNameValid(nameValue)) {
            dispatch({ type, payload: 'Name is too short!' });
            setIsValid(false);
        } else {
            dispatch({ type, payload: '' });
            setIsValid(true);
        }
    };

    const onDescriptionBlurHandler = (e) => {
        const descriptionValue = e.target.value;
        const type = 'description';

        if (!formValidator.isDescriptionValid(descriptionValue)) {
            dispatch({
                type,
                payload: 'Description must be between 10 and 50 characters!',
            });
            setIsValid(false);
        } else {
            dispatch({ type, payload: '' });
            setIsValid(true);
        }
    };

    const onImageUrlBlurHandler = (e) => {
        const imageUrlValue = e.target.value;
        const type = 'imageURL';

        if (!formValidator.isImageUrlValid(imageUrlValue)) {
            dispatch({ type, payload: 'Please provide a valid image link.' });
            setIsValid(false);
        } else {
            dispatch({ type, payload: '' });
            setIsValid(true);
        }
    };

    const onCreateSubmitHandler = (e) => {
        e.preventDefault();

        if (!isValid) {
            return;
        }

        const petObject = {
            name: e.target.name.value,
            description: e.target.description.value,
            imageURL: e.target.imageURL.value,
            category: e.target.category.value.toLowerCase(),
            likes: 0,
            creator: {
                email,
                id: localStorage.getItem('uid'),
            },
            peopleLiked: [],
        };

        createPet(petObject).then((res) => {
            if (res.message) {
                notifyError(res.message);
                return;
            } else {
                navigate('/pets');
                notifyInfo(`Successfully added ${petObject.name}!`);
            }
        });
    };

    return (
        <FormWrapper>
            <Form onSubmitHandler={onCreateSubmitHandler}>
                <Fieldset>
                    <FormLegend>Add new Pet</FormLegend>
                    <Field type="name">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Name"
                            onBlur={onNameBlurHandler}
                        />
                    </Field>
                    <InputError message={errors.name} />

                    <Field type="description">
                        <textarea
                            rows="4"
                            cols="45"
                            type="text"
                            name="description"
                            id="description"
                            resize="none"
                            placeholder="Description"
                            onBlur={onDescriptionBlurHandler}
                        ></textarea>
                    </Field>
                    <InputError message={errors.description} />

                    <Field type="image">
                        <input
                            type="text"
                            name="imageURL"
                            id="image"
                            placeholder="Image"
                            onBlur={onImageUrlBlurHandler}
                        />
                    </Field>
                    <InputError message={errors.imageURL} />
                    <Field type="category">
                        <select type="text" name="category">
                            <option>Cat</option>
                            <option>Dog</option>
                            <option>Parrot</option>
                            <option>Reptile</option>
                            <option>Other</option>
                        </select>
                    </Field>

                    <Button type="submit">Add Pet</Button>
                </Fieldset>
            </Form>
        </FormWrapper>
    );
};

export default CreatePet;
