import React from 'react'
import { SidebarData } from './SidebarData'
import SubMenu from './SubMenu'

const Sidebar = () => {
    return (
        <>
            <div className="sa-sidebar sa-sidebar-offcanvas">
                <div className="sa-sidebar-profile">
                    <div className="d-flex align-items-center justify-content-between">
                        <img src="https://demo.bootstrapdash.com/datavizui/template/images/faces/face5.jpg" alt="Sim Kimheang"/>
                        <div className="sa-profile-desc">
                            <p className="sa-name mb-0">Sim Kimheang</p>
                            <p className="sa-position mb-0">Administrator</p>
                        </div>
                    </div>
                </div>
                <ul className="nav">
                    {SidebarData.map((item, index) => {
                        return <SubMenu item={item} key={index}/>
                    })}
                </ul>
            </div>
        </>
    )
}

export default Sidebar