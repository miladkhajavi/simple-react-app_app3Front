import React from 'react';
import {NavLink} from 'react-router-dom'
import './NavLinks.css'
const NavLinks = (props)=>{
    return(
        <ul className="nav-links">
            <li>
                <NavLink to="/" exact>All Users</NavLink>
            </li>
            <li>
                <NavLink to={`/uid2/places`}>My places</NavLink>
            </li>
            <li>
                <NavLink to="/places/new">Add Places</NavLink>
            </li>
            <li>
                <NavLink to="/auth">Auth</NavLink>
            </li>
        </ul>
    )
}

export default NavLinks;