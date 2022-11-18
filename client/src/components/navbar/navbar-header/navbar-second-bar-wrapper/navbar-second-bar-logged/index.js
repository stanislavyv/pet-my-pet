import { useState, useEffect } from 'react';
import { useAuth } from '../../../../../contexts/AuthContext';

import { getUsernameById } from '../../../../../utils/userService';
import LogoutButton from '../../../../buttons/logout-button';

const NavbarSecondBarLogged = () => {
    const { userId } = useAuth();
    const [username, setUsername] = useState('');

    useEffect(() => {
        getUsernameById(userId).then((un) => {
            setUsername(un);
        });
    }, [userId]);

    return (
        <ul>
            <li>Welcome, {username}!</li>
            <li>
                <LogoutButton />
            </li>
        </ul>
    );
};

export default NavbarSecondBarLogged;
