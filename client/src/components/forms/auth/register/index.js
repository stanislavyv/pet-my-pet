import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useNotification } from '../../../../contexts/NotificationContext';

import { createUser } from '../../../../utils/userService';

import AuthForm from '..';

const RegisterForm = () => {
    const [isValid, setIsValid] = useState(false);
    const { notifyError } = useNotification();
    const navigate = useNavigate();

    const onRegisterClickHandler = (e) => {
        e.preventDefault();

        if (!isValid) {
            return;
        }

        const email = e.target.email.value;
        const username = e.target.username.value;
        const password = e.target.password.value;

        createUser(
            email.toLowerCase().trim(),
            username.toLowerCase().trim(),
            password
        )
            .then((res) => {
                if (res.message) {
                    notifyError(res.message);
                    return;
                }

                navigate('/');
            })
            .catch((e) => {
                notifyError(e.message);
            });
    };

    return (
        <AuthForm
            type="Register"
            onSubmitHandler={onRegisterClickHandler}
            setIsValid={setIsValid}
        />
    );
};

export default RegisterForm;
