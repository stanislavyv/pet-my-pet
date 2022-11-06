import Categories from './categories';
import DashboardPetsList from './dashboard-pets-list.js';

const Dashboard = () => {
    return (
        <section className="dashboard">
            <h1>Dashboard</h1>
            <Categories />
            <DashboardPetsList />
        </section>
    );
};

export default Dashboard;
