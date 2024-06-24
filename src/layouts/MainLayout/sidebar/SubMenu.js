import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'

const SubMenu = ({ item }) => {
    const [subnav, setSubNav] = useState(false)
    const [isHovered, setHovered] = useState(false);

    const showSubNav = () => setSubNav(!subnav)

    if (item.subNav) {
        return (
            <li className={isHovered ? "nav-item hover-open" : "nav-item"} onMouseEnter={() => {setHovered(true)}} onMouseLeave={() => {setHovered(false)}}>
                <button type="button" className={item.subNav && subnav ? "nav-link collapsed active" : "nav-link collapsed"} onClick={item.subNav && showSubNav} data-bs-toggle="collapse">
                    {item.icon}
                    <span className="sa-menu-title">{item.title}</span>
                    {item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null}
                </button>
                <div className={item.subNav && subnav ? "collapse show" : "collapse"}>
                    <ul className="nav flex-column sa-sub-menu">
                        {subnav && item.subNav.map((item, index) => {
                            return (
                                <li className="nav-item" key={index}>
                                    <NavLink to={item.path} className={({ isActive }) => isActive ? "nav-link collapsed active" : "nav-link collapsed"}>{item.title}</NavLink>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </li>
        )
    } else {
        return (
            <li className={isHovered ? "nav-item hover-open" : "nav-item"} onMouseEnter={() => {setHovered(true)}} onMouseLeave={() => {setHovered(false)}}>
                <NavLink to={item.path} className={({ isActive }) => isActive ? "nav-link collapsed active" : "nav-link collapsed"} onClick={item.subNav && showSubNav}>
                    {item.icon}
                    <span className="sa-menu-title">{item.title}</span>
                    {item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null}
                </NavLink>
            </li>
        )
    }
}

export default SubMenu