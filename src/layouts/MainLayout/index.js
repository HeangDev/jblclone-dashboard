import React from 'react'
import { Outlet } from 'react-router-dom';

import Header from './header/index'
import Sidebar from './sidebar/index'

const DashboardLayout = () => {
    return (
        <>
            <div className="sa-wrapper">
                <Header/>
                <div className="container-fluid sa-body">
                    <Sidebar/>
                    <div className="sa-main">
                        <div className="sa-content">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardLayout