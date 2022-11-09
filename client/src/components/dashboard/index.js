import Categories from './categories';
import DashboardListWrapper from './dashboard-list-wrapper';

const Dashboard = () => {
    return (
        <section className="dashboard">
            <h1>Dashboard</h1>
            <Categories />
            <DashboardListWrapper />
        </section>
    );
};

export default Dashboard;
