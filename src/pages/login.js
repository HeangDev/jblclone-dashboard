import React from 'react'

const login = () => {
    return (
        <>
            <div className="row w-100 mx-0">
                <div className="col-lg-4 mx-auto">
                    <div className="form-login py-5 px-4 px-sm-5">
                        <div className="">
                            <img src="" alt=""/>
                        </div>
                        <h4>Hello! let's get started</h4>
                        <h6 className="fw-light fs-6">Sign in to continue.</h6>
                        <form className="pt-4" autoComplete="off">
                            <div className="mb-4">
                                <input type="text" class="form-control" placeholder="Username"/>
                            </div>
                            <div className="mb-4">
                                <input type="password" class="form-control" placeholder="Password"/>
                            </div>
                            <div className="d-grid">
                                <button class="btn btn-primary btn-lg font-weight-medium login-btn">Log In</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default login