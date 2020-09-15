/**
 * Created by Joel Valdivia
 * Date 11 Jun 2020
 * Description: NavBar
 */

import React from "react";
import { useSelector } from "react-redux";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBarCustom({ classCss}) {

    const { user, isAuth } = useSelector(store => store.authenticate);

    return (
        <Navbar className={`nav-bottom-border ${classCss}`} bg="light" variant='light' expand="lg">
            <Link to="/">
                <i className="fas fa-fire" style={{color: '#38c172'}}></i>

            </Link>
            {
                isAuth &&
                <Nav className="container-fluid-nav text-center">
                    <Nav.Link>Bienvenido {user.username}</Nav.Link>
                </Nav>
            }
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
                {
                    isAuth &&
                    <Nav>
                        <Nav.Link href="/login"><b>Salir</b></Nav.Link>
                    </Nav>
                }
            </Navbar.Collapse>

        </Navbar>
    )
}

export default NavBarCustom;