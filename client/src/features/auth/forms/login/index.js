import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { notifyError } from '../../../notification/notificationSlice';
import { selectUserState, loginUser, resetFormState } from '../../userSlice';

import AuthForm from '..';

const LoginForm = () => {
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
            dispatch(notifyError('Invalid e-mail or password!'));
        }

        return () => dispatch(resetFormState());
    }, [success, error]);

    const onLoginClickHandler = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        dispatch(loginUser({ email, password }));
    };

    return <AuthForm type="Login" onSubmitHandler={onLoginClickHandler} />;
};

export default LoginForm;
