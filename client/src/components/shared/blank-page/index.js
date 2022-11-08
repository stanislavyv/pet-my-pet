import styled from 'styled-components';

const StyledBlankPage = styled.article`
    height: 50vh;

    h2 {
        margin-top: 2.7rem;
        text-align: center;
        font-style: oblique;
        font-size: 2.5rem;
    }
`;

const BlankPage = ({ children }) => {
    return (
        <StyledBlankPage>
            <h2>{children}</h2>
        </StyledBlankPage>
    );
};

export default BlankPage;
