import { useEffect, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
    notifyInfo,
    notifyError,
} from '../../../notification/notificationSlice';

import { createPet } from '../../petActions';
import { selectPetState, resetFormState } from '../../petSlice';

import * as formValidator from '../../../../utils/formValidator';

import InputError from '../../../../components/shared/form/input-error';
import Button from '../../../../components/shared/button';
import Form from '../../../../components/shared/form';
import Fieldset from '../../../../components/shared/form/fieldset';
import FormLegend from '../../../../components/shared/form/form-legend';
import Field from '../../../../components/shared/form/field';
import FormWrapper from '../../../../components/shared/form/form-wrapper';

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
    const [errors, dispatchErrors] = useReducer(errorReducer, {
        name: '',
        description: '',
        imageURL: '',
    });

    const dispatch = useDispatch();
    const { error, success } = useSelector(selectPetState);

    const navigate = useNavigate();

    useEffect(() => {
        if (!success.status && !error) {
            return;
        }

        if (success.status) {
            dispatch(resetFormState());
            dispatch(notifyInfo(success.message));
            navigate('/');
        } else if (error) {
            dispatch(notifyError(error));
        }

        return () => dispatch(resetFormState());
    }, [error, success]);

    const onNameBlurHandler = (e) => {
        const nameValue = e.target.value;
        const type = 'name';

        if (!formValidator.isPetNameValid(nameValue)) {
            dispatchErrors({ type, payload: 'Name is too short!' });
        } else {
            dispatchErrors({ type, payload: '' });
        }
    };

    const onDescriptionBlurHandler = (e) => {
        const descriptionValue = e.target.value;
        const type = 'description';

        if (!formValidator.isDescriptionValid(descriptionValue)) {
            dispatchErrors({
                type,
                payload: 'Description must be between 10 and 100 characters!',
            });
        } else {
            dispatchErrors({ type, payload: '' });
        }
    };

    const onImageUrlBlurHandler = (e) => {
        const imageUrlValue = e.target.value;
        const type = 'imageURL';

        if (!formValidator.isImageUrlValid(imageUrlValue)) {
            dispatchErrors({
                type,
                payload: 'Please provide a valid image link.',
            });
        } else {
            dispatchErrors({ type, payload: '' });
        }
    };

    const onCreateSubmitHandler = (e) => {
        e.preventDefault();

        // if every property in errors obj is
        // an empty string then the form data is valid
        const isValid = Object.values(errors).every((v) => !Boolean(v));
        if (!isValid) {
            return;
        }

        const petObject = {
            name: e.target.name.value,
            description: e.target.description.value,
            imageURL: e.target.imageURL.value,
            category: e.target.category.value.toLowerCase(),
        };

        dispatch(createPet({ petObject }));
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
