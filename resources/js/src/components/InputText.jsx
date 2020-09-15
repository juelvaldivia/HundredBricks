
import React from 'react';
import { FormGroup, FormControl, Form } from "react-bootstrap";
/**
 * Created by: Joel Valdivia
 * Date: 09 Junio 2020
 * Componente para Input de tipo texto
 * @param {Object} param0 Opciones del input
 */
function InputText({ register, label, name, errors, rules, ...rest }) {

    return (
        <FormGroup>
            {
                // verifica si contiene label y lo muestra
                label && <Form.Label>{label}</Form.Label>
            }

            {/* BEGIN Input de Texto */}
            <FormControl 
                type="text"
                // agrega opciones del input
                {...rest}
                // asigna nombre del input
                name={name}
                // registra el campo en Form padre
                ref={register(rules)}
                // en caso de error agrega la clase is invalid
                className={'form-control' + (errors[name] ? ' is-invalid' : '')}
            />
            {/* END Input de Texto */}

            {/*  Muestra errores del input texto */}
            {
                errors[name] && <div className="invalid-feedback">{label} {errors[name].message}</div>
            }
        </FormGroup>
    )
}

export default InputText;