/**
 * Created by Joel Valdivia
 * Date 11 Jun 2020
 * Description: Layout Para rutas publicas aqui va el diseño
 */
import React from "react";
import NavBarCustom from "../NavBarCustom";
import ModalCustom from "../ModalCustom";
import LoadingScreen from 'react-loading-screen';
import { useSelector } from "react-redux";
import { Jumbotron } from "react-bootstrap";

function LayoutPublic({ Component, route, history }) {

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
            <NavBarCustom classCss={'public-nav'} />
            <Jumbotron>
                <div className="col-md-8 offset-md-2">
                    <Component route={route} history={history}/>
                </div>
            </Jumbotron>
            {/* BEGIN Modal global de la APP */}
            <ModalCustom />
            {/* END Modal global de la APP */}
        </LoadingScreen>
    )
}

export default LayoutPublic;
