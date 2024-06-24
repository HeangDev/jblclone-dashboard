import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from './layouts/MainLayout'
import LoginLayout from './layouts/LoginLayout';

import Dashboard from './pages/dashboard'
import Login from './pages/login'

import Customer from './pages/customer/Index'
import AddCustomer from './pages/customer/create'
import Deposit from './pages/deposit/index'
import Withdraw from './pages/withdraw/index'

import User from './pages/user/index'

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate to="/dashboard" replace />} />
                
                <Route element={<LoginLayout/>}>
                    <Route path="/login" element={<Login />} />
                </Route>

                <Route element={<DashboardLayout/>}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/customer" element={<Customer />} />
                    <Route path="/customer/create" element={<AddCustomer />} />
                    <Route path="/deposit" element={<Deposit />} />
                    <Route path="/withdraw" element={<Withdraw />} />
                    <Route path="/user" element={<User />} />
                </Route>
            </Routes>
        </>
    )
}

export default App