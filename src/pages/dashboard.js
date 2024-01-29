import React from 'react'
import DashboardCard from '../components/DashboardCard'

const dashboard = () => {
    return (
        <>
            <div className="row">
                <div className="col-md-12 mb-4">
                    <div className="d-flex justify-content-between flex-wrap">

                    </div>
                </div>
            </div>
            <div className="row">
                <DashboardCard cardBg="sa-card-primary" cardTitle="Attendance" cardTotal="59467" cardSubtitle="Total for this month"/>
                <DashboardCard cardBg="sa-card-danger" cardTitle="Attendance" cardTotal="59467" cardSubtitle="Total for this month"/>
                <DashboardCard cardBg="sa-card-info" cardTitle="Attendance" cardTotal="59467" cardSubtitle="Total for this month"/>
                <DashboardCard cardBg="sa-card-dark" cardTitle="Attendance" cardTotal="59467" cardSubtitle="Total for this month"/>
            </div>
        </>
    )
}

export default dashboard