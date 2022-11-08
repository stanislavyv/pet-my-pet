import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Styled = styled(Link)`
    display: block;
    padding: 6px 13px;
    border-radius: 6px;
    text-decoration: none;
    font-weight: bold;
    background: cadetblue;
    color: rgb(255, 255, 255);

    &:hover {
        background: rgb(248, 215, 107);
        color: rgb(0, 0, 0);
        font-weight: bold;
    }

    &:active {
        background-color: rgb(246, 203, 60);
        transform: scale(0.97);
    }
`;

const StyledLink = ({ to = '', children, className }) => {
    return (
        <Styled to={to} className={className}>
            {children}
        </Styled>
    );
};

export default StyledLink;
