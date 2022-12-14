import LogoutButton from '../../../../../buttons/logout-button';

const NavbarSecondBarLogged = ({ username }) => {
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
