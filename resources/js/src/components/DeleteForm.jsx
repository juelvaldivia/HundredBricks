import React from 'react';
import { Modal, Button } from "react-bootstrap";
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import Btn from './Btn';

/**
 * Created by Joel Valdivia
 * Date 18 Jun 2020
 * Componente para mostrar eliminar de un registro
 * @param {Object} props
 */
function DeleteForm({onSubmit, message, id, close, labelButton='Aceptar'}) {
    
    const { handleSubmit, register, setValue } = useForm();

    useEffect(() => {
        register({ name: 'id' });
        setValue("id", id)
      }, [register])

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='form-horizontal modal-bottom' >
            <p className='text-center'>{message}</p>
            {/* BEGIN Footer Modal con botones */}
            <Modal.Footer>
                <Btn
                    label={'Cancelar'}
                    className={'gral-danger'}
                    variant="secondary"
                    onClick={close}
                    icon={true}
                    iconLeft={true}
                    iconClass={'far fa-times-circle'}
                />
                <Btn
                    type="submit"
                    label={labelButton}
                    variant='danger'
                    className={'btn-primary'}
                    icon={true}
                    iconLeft={true}
                    iconClass={'far fa-check-circle'}
                />
            </Modal.Footer>
            {/* END Footer Modal con botones  */}
        </form>
    )
}


export { DeleteForm };