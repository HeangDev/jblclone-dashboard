import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'

const SubMenu = ({ item }) => {
    const [subnav, setSubNav] = useState(false)

    const showSubNav = () => setSubNav(!subnav)

    if (item.subNav) {
        return (
            <li className="nav-item">
                <button type="button" className={item.subNav && subnav ? "nav-link active" : "nav-link"} onClick={item.subNav && showSubNav} data-bs-toggle="collapse">
                    {item.icon}
                    <span className="sa-menu-title">{item.title}</span>
                    {item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null}
                </button>
                <div className={item.subNav && subnav ? "collapse show" : "collapse"}>
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
        )
    } else {
        return (
            <li className="nav-item">
                <NavLink to={item.path} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={item.subNav && showSubNav}>
                    {item.icon}
                    <span className="sa-menu-title">{item.title}</span>
                    {item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null}
                </NavLink>
            </li>
        )
    }
}

export default SubMenu