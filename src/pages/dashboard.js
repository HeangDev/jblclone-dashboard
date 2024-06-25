import React from 'react'
import DashboardCard from '../components/DashboardCard'

const dashboard = () => {
    return (
        <>
            <div className="row">
                <div className="col-md-12 mb-4">
                    <div className="d-flex flex-wrap">
                        <div className="d-flex align-items-s dashboard-header flex-wrap mb-3 mb-sm-0"></div>
                        <h5 className="mr-4 mb-0 font-weight-bold">หน้าแรก</h5>
                        <div className="d-flex align-items-baseline sa-dashboard-breadcrumb">

                        </div>
                    </div>
                </div>
            </div>
            <div className="row g-4">
                <DashboardCard cardBg="sa-card-primary" cardTitle="ลูกค้าทั้งหมด" cardIcon="bi-person-vcard-fill" cardTotal="59467" cardSubtitle="รวมสำหรับเดือนนี้"/>
                <DashboardCard cardBg="sa-card-danger" cardTitle="ผู้ดูแล่ทั้งหมด" cardIcon="bi-person-fill-add" cardTotal="59467" cardSubtitle="Tรวมสำหรับเดือนนี้"/>
                <DashboardCard cardBg="sa-card-info" cardTitle="จำนวนเงินที่ได้รับ" cardIcon="bi-piggy-bank-fill" cardTotal="59467" cardSubtitle="รวมสำหรับเดือนนี้"/>
                <DashboardCard cardBg="sa-card-dark" cardTitle="ลูกค้าที่ถอนเงินทั้งหมด" cardIcon="bi-coin" cardTotal="59467" cardSubtitle="รวมสำหรับเดือนนี้"/>
            </div>
        </>
    )
}

export default dashboard