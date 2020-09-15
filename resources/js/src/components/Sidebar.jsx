/**
 * Created by Joel Valdivia
 * Date 11 Jun 2020
 * Description: NavBar
 */

import React from "react";
import { useSelector } from "react-redux";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
// import 'flag-icon-css/css/flag-icon.css';
import { Link } from "react-router-dom";

function Sidebar() {

    const { isAuth } = useSelector(store => store.authenticate);

    return (
        <SideNav
            onSelect={(selected) => {
                // Add your code here
            }}
        >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home">
                <NavItem eventKey="home">
                    <NavIcon>
                        <Link to={'/home'}>
                            <i className="fa fa-fw fa-home" />
                        </Link>
                    </NavIcon>
                    <NavText>
                        Inicio
            </NavText>
                </NavItem>
                <NavItem eventKey="users">
                    <NavIcon>
                        <Link to={'/users'}>
                            <i className="fa fa-fw fa-users" />
                        </Link>
                    </NavIcon>
                    <NavText>
                            Usuarios
                    </NavText>
                </NavItem>
            </SideNav.Nav>
        </SideNav>
    )
}

//   export default Sidebar
export default Sidebar;