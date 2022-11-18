import { useState } from 'react';

import * as formValidator from '../../../utils/formValidator';

import Button from '../../shared/button';
import Fieldset from '../../shared//form/fieldset';
import Form from '../../shared/form';
import FormLegend from '../../shared/form/form-legend';
import Field from '../../shared/form/field';
import InputError from '../../shared/input-error';
import FormWrapper from '../../shared/form/form-wrapper';

const AuthForm = ({ type, onSubmitHandler, setIsValid }) => {
    const [errors, setErrors] = useState({
        email: '',
        username: '',
        password: '',
    });

    const onEmailBlurHandler = (e) => {
        if (type === 'Login') {
            return;
        }

        const usernameValue = e.target.value;

        if (!formValidator.isEmailValid(usernameValue)) {
            setErrors((state) => ({
                ...state,
                email: 'Please provide a valid email.',
            }));
            setIsValid(false);
        } else {
            setErrors((state) => ({ ...state, email: '' }));
            setIsValid(true);
        }
    };

    const onPasswordBlurHandler = (e) => {
        if (type === 'Login') {
            return;
        }

        const passwordValue = e.target.value;

        if (!formValidator.isPasswordRightLength(passwordValue)) {
            setErrors((state) => ({
                ...state,
                password: 'Password too short!',
            }));
            setIsValid(false);
        } else if (!formValidator.isPasswordRightFormat(passwordValue)) {
            setErrors((state) => ({
                ...state,
                password: 'Password contains illegal characters!',
            }));
            setIsValid(false);
        } else {
            setErrors((state) => ({ ...state, password: '' }));
            setIsValid(true);
        }
    };

    const onUsernameBlurHandler = (e) => {
        if (type === 'Login') {
            return;
        }

        const usernameValue = e.target.value;

        if (!formValidator.isUsernameRightLength(usernameValue)) {
            setErrors((state) => ({
                ...state,
                username: 'Username must be between 4 and 15 characters long!',
            }));
            setIsValid(false);
        } else if (!formValidator.isUsernameValid(usernameValue)) {
            setErrors((state) => ({
                ...state,
                username: 'Username contains illegal characters!',
            }));
            setIsValid(false);
        } else {
            setErrors((state) => ({ ...state, username: '' }));
            setIsValid(true);
        }
    };

    return (
        <FormWrapper>
            <Form onSubmitHandler={onSubmitHandler}>
                <Fieldset>
                    <FormLegend>{type}</FormLegend>
                    {type === 'Register' && (
                        <>
                            <Field type="username" auth>
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                    onBlur={onUsernameBlurHandler}
                                />
                            </Field>
                            <InputError message={errors.username} />
                        </>
                    )}
                    <Field type="email" auth>
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            onBlur={onEmailBlurHandler}
                        />
                        <i className="fas fa-user"></i>
                    </Field>
                    <InputError message={errors.email} />

                    <Field type="password" auth>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            onBlur={onPasswordBlurHandler}
                        />
                        <i className="fas fa-key"></i>
                    </Field>
                    <InputError message={errors.password} />

                    <Button type="submit">{type}</Button>
                </Fieldset>
            </Form>
        </FormWrapper>
    );
};

export default AuthForm;
