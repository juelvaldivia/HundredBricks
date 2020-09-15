/**
 * Created by Joel Valdivia
 * Date 11 Jun 2020
 * Description: Layout privado aqui empieza a maquetar la interfaz
 */

import React from "react";
import NavBarCustom from "../NavBarCustom";
import ModalCustom from "../ModalCustom";
import LoadingScreen from 'react-loading-screen';
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../../components/Sidebar";

function LayoutPrivate({ Component, route, history }) {

    // obtiene del store las opciones del modal
    const { loading } = useSelector(store => store);

    return (
        <LoadingScreen
            loading={loading.show}
            bgColor='#f1f1f1'
            spinnerColor='#9ee5f8'
            textColor='#676767'
            text={loading.text}
        >
            {/* <Container fluid> */}
            {/* <Sidebar /> */}
            <NavBarCustom classCss={'private-nav'} />
            
            <div className="main">
                <Component route={route} history={history} />
            </div>

            {/* </Container> */}
            {/* BEGIN Modal global de la APP */}
            <ModalCustom />
            {/* END Modal global de la APP */}
        </LoadingScreen>
    )
}

export default LayoutPrivate;
