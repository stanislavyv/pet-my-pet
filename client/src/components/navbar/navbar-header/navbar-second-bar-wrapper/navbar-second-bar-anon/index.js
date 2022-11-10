import NavbarLink from '../../navbar-link';

const NavbarSecondBarAnon = () => {
    return (
        <ul>
            <li>
                <NavbarLink to="/register">
                    <i className="fas fa-user-plus"></i> Register
                </NavbarLink>
            </li>
            <li>
                <NavbarLink to="/login">
                    <i className="fas fa-sign-in-alt"></i> Login
                </NavbarLink>
            </li>
        </ul>
    );
};

export default NavbarSecondBarAnon;
