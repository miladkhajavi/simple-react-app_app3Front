import React,{useState} from 'react';
import MainHeader from './MainHeader'
import {Link} from 'react-router-dom'
import './MainNavigation.css'
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Backdrop from '../UIelement/Backdrop';

const MainNavigation = (props)=>{
    const [drawerIsOpen,setDrawer] = useState(false)
    const openDrawer = ()=>{
        setDrawer(true)
    }
    const closeDrawer = ()=>{
        setDrawer(false)
    }

    return(
        <React.Fragment>
         {drawerIsOpen && <Backdrop onClick={closeDrawer}/>}
         {drawerIsOpen && (<SideDrawer>
             <nav className="main-navigation__drawer-nav">
                 <NavLinks/>
             </nav>
         </SideDrawer>
         )}       

        <MainHeader>
            <button className="main-navigation__menu-btn" onClick={openDrawer}>
                <span/>
                <span/>
                <span/>
            </button>
            <h1  className="main-navigation__title">
                <Link to="/"> your Place</Link>
            </h1>
            <nav className="main-navigation__header-nav">
               <NavLinks/>
            </nav>
        </MainHeader>
        </React.Fragment>
    )
}

export default MainNavigation