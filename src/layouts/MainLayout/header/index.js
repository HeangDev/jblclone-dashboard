import React from 'react'
import { Icon } from '@iconify/react';

const Header = () => {
    return (
        <>
            <div className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
                <div className="text-center sa-brand-wrapper d-flex align-items-center justify-content-center d-none d-md-block">
                    <a href="#none" className="navbar-brand sa-logo">
                        <img src="#none" alt="logo" className=""/>
                    </a>
                    <a href="#none" className="navbar-brand sa-logo-mini">
                        <img src="#none" alt="logo"/>
                    </a>
                </div>
                <div className="sa-menu-wrapper d-flex align-items-center justify-content-between">
                    <button type="button" className="navbar-toggler navbar-toggler align-self-center"><i className="bi bi-list"></i></button>
                    <ul className="navbar-nav sa-nav-right">
                        <li className="nav-item dropdown">
                            <button type="button" className="nav-link sa-indicator d-flex align-items-center justify-content-center"><i className="bi bi-bell"></i></button>
                            <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list">

                            </div>
                        </li>
                        <li className="nav-item sa-nav-language dropdown">
                            <button type="button" className="nav-link sa-indicator d-flex align-items-center justify-content-center">
                                <Icon icon="flag:kh-4x3" width="24" />
                                <p className="mb-0 ms-1">Khmer</p>
                            </button>
                            <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list">

                            </div>
                        </li>
                        <li className="nav-item sa-nav-logout dropdown">
                            <button type="button" className="nav-link sa-indicator d-flex align-items-center justify-content-center"><i className="bi bi-box-arrow-right"></i></button>
                            <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list">

                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header