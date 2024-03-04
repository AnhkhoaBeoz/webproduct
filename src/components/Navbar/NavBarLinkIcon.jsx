import React from 'react';

import './NavBarLinkIcon.scss';
import {NavLink} from "react-router-dom";

function NavBarLinkIcon({title, iconPath, link}) {
    return (
        <NavLink to={link}
            className="navbar-link">
            <span className='icon_title'>{title}</span>
            <img src={iconPath} alt="" className='icon_emoji'/>
        </NavLink>
    );
}

export default NavBarLinkIcon;
