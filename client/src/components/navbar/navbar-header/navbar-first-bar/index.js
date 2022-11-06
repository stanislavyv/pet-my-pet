import styled from 'styled-components';

import { useAuth } from '../../../../contexts/AuthContext';

import { Link, useNavigate } from 'react-router-dom';
import StyledLink from '../../../shared/link';
import Button from '../../../shared/button';

const StyledNavbarFirstBar = styled.div`
    display: flex;
    align-items: center;

    & a {
        margin: 4px;
    }
`;

const NavbarFirstBar = () => {
    const { isLoggedIn, userId } = useAuth();
    const navigate = useNavigate();

    function onClickHandler() {
        const search = `?ownerid=${encodeURIComponent(userId)}`;

        navigate({ pathname: '/pets', search });
    }

    return (
        <StyledNavbarFirstBar>
            <Link to="/pets">Dashboard</Link>
            {isLoggedIn && (
                <>
                    <Button link onClickHandler={onClickHandler}>
                        My Pets
                    </Button>
                    <StyledLink to="/pets/create">Add Pet</StyledLink>
                </>
            )}
        </StyledNavbarFirstBar>
    );
};

export default NavbarFirstBar;
