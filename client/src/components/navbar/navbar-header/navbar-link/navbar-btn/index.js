import { StyledNavbarLink } from '..';


const NavbarButton = ({ color, onClick, children }) => {
    return (
        <StyledNavbarLink  color={color} as="button" onClick={onClick}>
            {children}
        </StyledNavbarLink >
    );
};

export default NavbarButton;
