import styled from 'styled-components';

const StyledBlankPage = styled.article`
    height: 50vh;
    font-size: 2rem;
    font-style: oblique;

    h2 {
        margin-top: 2.7rem;
        text-align: center;
        font-size: 2.5rem;
    }
`;

const BlankPage = ({ children, header }) => {
    return (
        <StyledBlankPage>
            <h2>{header}</h2>
            {children}
        </StyledBlankPage>
    );
};

export default BlankPage;
