import React from 'react'
import Header from './header/index'
import Sidebar from './sidebar/index'

const DashboardLayout = ({ children }) => {
    return (
        <>
            <div className="sa-wrapper">
                <Header/>
                <div className="container-fluid sa-body">
                    <Sidebar/>
                    <div className="sa-main">
                        <div className="sa-content">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardLayout