import React from 'react'
import { Routes, Route } from "react-router-dom";
import DashboardLayout from './layouts/MainLayout'

import Dashboard from './pages/dashboard'

import Employee from './pages/employee/list'
import AddEmployee from './pages/employee/create'
import EditEmployee from './pages/employee/edit'

import DepartmentIndex from './pages/department/Index'
import PositionIndex from './pages/position/Index'
import BranchIndex from './pages/branch/Index'

const App = () => {
    return (
        <>
            <DashboardLayout>
                <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="employee" element={<Employee />}>
                        <Route path="create" element={<AddEmployee />} />
                        <Route path=":id" element={<EditEmployee />} />
                    </Route>
                    <Route path="/department" element={<DepartmentIndex />} />
                    <Route path="/position" element={<PositionIndex />} />
                    <Route path="/branch" element={<BranchIndex />} />
                </Routes>
            </DashboardLayout>
        </>
    )
}

export default App