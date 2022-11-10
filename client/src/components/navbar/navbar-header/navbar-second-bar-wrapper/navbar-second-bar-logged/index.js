import LogoutButton from '../../../../buttons/logout-button';

const NavbarSecondBarLogged = ({ email }) => {
    return (
        <ul>
            <li>Welcome, {email}!</li>
            <li>
                <LogoutButton />
            </li>
        </ul>
    );
};

export default NavbarSecondBarLogged;
