import React, { useContext } from 'react'
import { Icon } from '@iconify/react';
import { SidebarContext } from '../../../context/sidebarContext'

const Header = () => {
    const { toggleSidebar } = useContext(SidebarContext)
    return (
        <>
            <div className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
                <div className="text-center sa-brand-wrapper d-flex align-items-center justify-content-center">
                    <a href="#none" className="navbar-brand sa-logo d-none d-lg-block">
                        <img src="https://demo.bootstrapdash.com/datavizui/template/demo/vertical-default-light/index.html" alt="logo" className=""/>
                    </a>
                </div>
                <div className="sa-menu-wrapper d-flex align-items-center justify-content-between flex-grow-1">
                    <div className="sa-navbar-toggler">
                        <button type="button" className="navbar-toggler navbar-toggler align-self-center d-none d-md-block" onClick={ () => toggleSidebar()}><i className="bi bi-list"></i></button>
                        <button type="button" className="navbar-toggler navbar-toggler align-self-center d-block d-md-none"><i className="bi bi-list"></i></button>
                    </div>
                    <a href="#none" className="navbar-brand sa-logo-mini d-lg-none">
                        <img src="#none" alt="logo"/>
                    </a>
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