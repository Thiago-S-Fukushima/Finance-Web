import { useState } from 'react';

const Dashboard = () => {
    return(
        <>
            <h1>Welcome to your Financial Dashboard</h1>

            <a href="Transaction">New Transaction</a>

            <h2>Your Transactions</h2>
            <ul>

            </ul>

            <a href="Login">Log Out</a>
        </>
    )
}

export default Dashboard;