import React from 'react'

const LoginLayout = ({ children }) => {
    return (
        <>
            <div className="sa-wrapper">
                <div className="container-fluid sa-body">
                    <div className="sa-content px-0">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginLayout