import React from 'react'
import { Routes, Route } from "react-router-dom";
import DashboardLayout from './layouts/MainLayout'
import LoginLayout from './layouts/LoginLayout';

import Dashboard from './pages/dashboard'
import Login from './pages/login'

import Employee from './pages/employee/Index'
import AddEmployee from './pages/employee/create'
import Leaves from './pages/approval/Leaves'
import Overtime from './pages/approval/Overtime'

import DepartmentIndex from './pages/department/Index'
import PositionIndex from './pages/position/Index'
import BranchIndex from './pages/branch/Index'

import ListOvertime from './pages/request/overtime/list';

import Calendar from './pages/calendar';

const App = () => {
    return (
        <>
            <DashboardLayout>
                <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/employee" element={<Employee />} />
                    <Route path="/employee/create" element={<AddEmployee />} />
                    <Route path="/leaves" element={<Leaves />} />
                    <Route path="/overtime" element={<Overtime />} />
                    <Route path="/department" element={<DepartmentIndex />} />
                    <Route path="/position" element={<PositionIndex />} />
                    <Route path="/branch" element={<BranchIndex />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/overtime/list" element={<ListOvertime />} />
                </Routes>
            </DashboardLayout>
        </>
    )
}

export default App