import React from 'react'
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <>
            <div className="sa-wrapper">
                <div className="container-fluid sa-body pt-0">
                    <div className="sa-content d-flex align-items-center px-0">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginLayout