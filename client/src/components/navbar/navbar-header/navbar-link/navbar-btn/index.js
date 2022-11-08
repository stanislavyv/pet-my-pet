import { StyledNavbarLink } from '..';

const NavbarButton = ({ onClick, children }) => {
    return (
        <StyledNavbarLink as="button" onClick={onClick}>
            {children}
        </StyledNavbarLink>
    );
};

export default NavbarButton;
