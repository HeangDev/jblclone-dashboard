import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'

const SubMenu = ({ item }) => {
    const [subnav, setSubNav] = useState(false)

    const showSubNav = () => setSubNav(!subnav)
    return (
        <>
            <li className="nav-item">
                <NavLink to={item.path} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={item.subNav && showSubNav}>
                    {item.icon}
                    <span className="sa-menu-title">{item.title}</span>
                    {item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null}
                </NavLink>
                <div className="collapse show">
                    <ul className="nav flex-column sa-sub-menu">
                        {subnav && item.subNav.map((item, index) => {
                            return (
                                <li className="nav-item" key={index}>
                                    <NavLink to={item.path} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>{item.title}</NavLink>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </li>
        </>
    )
}

export default SubMenu