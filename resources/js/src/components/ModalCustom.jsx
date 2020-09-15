/**
 * Created by Joel Valdivia
 * Date 11 Jun 2020
 * Description: NavBar
 */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalClean } from '../redux/ducks/modalDucks';
import { Modal, Button } from "react-bootstrap";

function ModalCustom() {

    const { modal } = useSelector(store => store);
    const dispatch = useDispatch();
    
    console.log(modal)
    // oculta el modal
    const hideModal = () => {
        // dispara la accion que limpia el modal
        dispatch(modalClean())
    }

    return (
        <Modal
            className={modal.className}
            show={modal.show}
            backdrop="static"
            keyboard={false}
            onHide={hideModal}
            dialogClassName="modal-90w"
            size={modal.size}
            aria-labelledby="example-custom-modal-styling-title"
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                    {modal.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {
                    // verifica si tiene body y lo muestra
                    modal.body ?
                        <p className='text-center'>{modal.body}</p>
                        :
                        modal.form ? modal.form : null
                }
            </Modal.Body>
            {
                // verifica si no tiene form y renderiza el boton de ocultar modal
                !modal.form ?
                    <Modal.Footer className="modal-footer-close">
                        <Button className="btn bg-red gral-boton" onClick={hideModal}>
                            Cerrar
                            </Button>
                    </Modal.Footer>
                    :
                    null
            }
        </Modal>
    )
}

export default ModalCustom;