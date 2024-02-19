import React, { useContext, useState, useEffect } from 'react'
import { SidebarData } from './SidebarData'
import SubMenu from './SubMenu'
import { SidebarContext } from '../../../context/sidebarContext'

const Sidebar = () => {
    const [activeLinkIdx] = useState(1);
    //const [sidebarClass, setSidebarClass] = useState("");
    const { isSidebarOpen } = useContext(SidebarContext);
    console.log(isSidebarOpen)

    useEffect(() => {
        if(isSidebarOpen){
            document.body.classList.add('sa-sidebar-icon')
        } else {
            document.body.classList.remove('sa-sidebar-icon')
        }
    }, [isSidebarOpen]);
    return (
        <>
            <div className="sa-sidebar sa-sidebar-offcanvas">
                <div className="sa-sidebar-profile">
                    <div className="d-block d-md-flex align-items-center justify-content-between">
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