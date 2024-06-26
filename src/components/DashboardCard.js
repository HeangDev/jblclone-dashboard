import React from 'react'

const DashboardCard = ({ cardBg, cardTitle, cardIcon, cardTotal, cardSubtitle }) => {
    return (
        <>
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 sa-card">
                <div className={`card ${ cardBg }`}>
                    <div className="card-body">
                        <div className="d-flex align-items-center">
                            <div className="sa-icon">
                                <i className={`bi ${ cardIcon }`}></i>
                            </div>
                            <p className="sa-title">{cardTitle}</p>
                        </div>
                        <div className="d-flex align-items-center mt-3 flex-wrap">
                            <h4 className="mb-0">{cardTotal}</h4>
                        </div>
                        <small className="d-block mt-2">{cardSubtitle}</small>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardCard