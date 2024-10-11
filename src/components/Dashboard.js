import React from 'react';
import { logout } from '../services/authService';

const Dashboard = () => {
    const handleLogout = () => {
        logout(); // Call the logout function
        window.location.href = '/login'; // Redirect to login page
    };

    return (
        <div>
            <h2>Dashboard</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Dashboard;
