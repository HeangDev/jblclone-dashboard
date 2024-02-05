import React from 'react'
import DashboardCard from '../components/DashboardCard'

const dashboard = () => {
    return (
        <>
            <div className="row">
                <div className="col-md-12 mb-4">
                    <div className="d-flex flex-wrap">
                        <div className="d-flex align-items-s dashboard-header flex-wrap mb-3 mb-sm-0"></div>
                        <h5 className="mr-4 mb-0 font-weight-bold">Dashboard</h5>
                        <div className="d-flex align-items-baseline sa-dashboard-breadcrumb">

                        </div>
                    </div>
                </div>
            </div>
            <div className="row g-4">
                <DashboardCard cardBg="sa-card-primary" cardTitle="Attendance" cardTotal="59467" cardSubtitle="Total for this month"/>
                <DashboardCard cardBg="sa-card-danger" cardTitle="Attendance" cardTotal="59467" cardSubtitle="Total for this month"/>
                <DashboardCard cardBg="sa-card-info" cardTitle="Attendance" cardTotal="59467" cardSubtitle="Total for this month"/>
                <DashboardCard cardBg="sa-card-dark" cardTitle="Attendance" cardTotal="59467" cardSubtitle="Total for this month"/>
            </div>
        </>
    )
}

export default dashboard