import styled from 'styled-components';
import DashboardPetsList from './dashboard-pets-list';

const StyledDashboardListWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
`;

const DashboardListWrapper = () => {
    return (
        <StyledDashboardListWrapper>
            <DashboardPetsList />
        </StyledDashboardListWrapper>
    );
};

export default DashboardListWrapper;
