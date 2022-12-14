import { useEffect, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { registerUser, resetFormState, selectUserState } from '../../userSlice';
import { notifyError } from '../../../notification/notificationSlice';

import * as formValidator from '../../../../utils/formValidator';

import AuthForm from '..';

const errorReducer = (state, { type, payload }) => {
    switch (type) {
        case 'email':
            return { ...state, email: payload };
        case 'username':
            return { ...state, username: payload };
        case 'password':
            return { ...state, password: payload };
        default:
            return state;
    }
};

const RegisterForm = () => {
    const [errors, dispatchErrors] = useReducer(errorReducer, {
        email: '',
        username: '',
        password: '',
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { success, error } = useSelector(selectUserState);

    useEffect(() => {
        if (!success && !error) {
            return;
        }

        if (success) {
            dispatch(resetFormState());
            navigate('/');
        } else if (error) {
            dispatch(notifyError(error));
        }

        return () => dispatch(resetFormState());
    }, [success, error]);

    const onEmailBlurHandler = (e) => {
        const usernameValue = e.target.value;

        let payload = '';
        if (!formValidator.isEmailValid(usernameValue)) {
            payload = 'Please provide a valid email.';
        } else {
            payload = '';
        }

        dispatchErrors({
            type: 'email',
            payload,
        });
    };

    const onPasswordBlurHandler = (e) => {
        const passwordValue = e.target.value;

        let payload = '';
        if (!formValidator.isPasswordRightLength(passwordValue)) {
            payload = 'Password too short!';
        } else if (!formValidator.isPasswordRightFormat(passwordValue)) {
            payload = 'Password contains illegal characters!';
        } else {
            payload = '';
        }

        dispatchErrors({ type: 'password', payload });
    };

    const onUsernameBlurHandler = (e) => {
        const usernameValue = e.target.value;

        let payload = '';
        if (!formValidator.isUsernameRightLength(usernameValue)) {
            payload = 'Username must be between 4 and 15 characters long!';
        } else if (!formValidator.isUsernameValid(usernameValue)) {
            payload = 'Username contains illegal characters!';
        } else {
            payload = '';
        }

        dispatchErrors({ type: 'username', payload });
    };

    const onBlurHandlers = {
        onEmailBlurHandler,
        onUsernameBlurHandler,
        onPasswordBlurHandler,
    };

    const onRegisterClickHandler = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const username = e.target.username.value;
        const password = e.target.password.value;

        // form data is valid if every
        // property in errors is an empty string
        const isValid = Object.values(errors).every((v) => !Boolean(v));
        if (!isValid) {
            return;
        }

        dispatch(
            registerUser({
                email: email.toLowerCase().trim(),
                username: username.toLowerCase().trim(),
                password,
            })
        );
    };

    return (
        <AuthForm
            type="Register"
            onSubmitHandler={onRegisterClickHandler}
            errors={errors}
            onBlurHandlers={onBlurHandlers}
        />
    );
};

export default RegisterForm;
