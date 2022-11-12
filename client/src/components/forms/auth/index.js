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
        password: '',
    });

    const onEmailBlurHandler = (e) => {
        if (type === 'Login') {
            return;
        }

        const emailValue = e.target.value;

        if (!formValidator.isEmailValid(emailValue)) {
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

    return (
        <FormWrapper>
            <Form onSubmitHandler={onSubmitHandler}>
                <Fieldset>
                    <FormLegend>{type}</FormLegend>
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
