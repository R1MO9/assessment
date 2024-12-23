import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout';
import Dashboard from './pages/dashboard';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path='/' element={<Dashboard />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
