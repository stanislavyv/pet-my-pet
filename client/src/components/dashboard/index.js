import styled from 'styled-components';
import { device } from '../../config/css';

import Categories from './categories';
import SearchBar from '../search-bar';
import DashboardListWrapper from './dashboard-list-wrapper';

const StyledDashboard = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Dashboard = () => {
    return (
        <StyledDashboard>
            <Categories />
            <SearchBar />
            <DashboardListWrapper />
        </StyledDashboard>
    );
};

export default Dashboard;
