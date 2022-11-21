import { device } from '../../config/css';
import styled from 'styled-components';

import Categories from './categories';
import SearchBar from './search-bar';
import SortBy from './sort-by';
import DashboardListWrapper from './dashboard-list-wrapper';

const StyledDashboard = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledFlexWrapper = styled.div`
    min-width: 31rem;
    display: flex;
    align-items: center;

    @media ${device.mobileS} {
        margin: 0 0 0.2rem 0;
        flex-direction: column-reverse;
    }

    @media ${device.laptop} {
        margin: 0.8rem 0 0.2rem 0;
        justify-content: space-around;
        flex-direction: row;
    }
`;

const Dashboard = () => {
    return (
        <StyledDashboard>
            <Categories />
            <StyledFlexWrapper>
                <SortBy />
                <SearchBar />
            </StyledFlexWrapper>
            <DashboardListWrapper />
        </StyledDashboard>
    );
};

export default Dashboard;
