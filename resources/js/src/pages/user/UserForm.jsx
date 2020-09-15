/**
 * Created by: Joel Valdivia
 * Date: 05 Jun 2020
 * Description: Componente que contiene el formulario de Login usando react-hooks-form
 */
import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import InputText from '../../components/InputText';
import Btn from '../../components/Btn';
import RadioGenre from '../../components/RadioGenre';
import { required, emailRequired, emailPattern, passwordRequired, passwordPattern, minLength } from '../../helpers/validationsInputs';
import { Modal, Form, Col, Row } from 'react-bootstrap';


// Componente que contiene el formulario de Login
function UserForm({ onSubmit, data, close, labelButton = 'Aceptar' }) {

    // define caracteristicas de ReacHookForm
    const { register, handleSubmit, errors, setValue } = useForm({
        defaultValues: data && {
            id: data['idUsuario'],
            username: data['Usuario'],
            email: data['Correo'],
            name: data['Nombre'],
            birthDate: data['Fecha Nacimiento'].split("/").reverse().join("-"),
            size: data['Talla'],
            family_background: data['Antecedente familiar'],
            medicines: data['Medicamentos'],
            idStatusCivil: data['idEstadoCivil'],
            genre: data['Género'],
            lastname: data['Apellido'],
            occupation: data['Ocupación'],
            stature: data['Estatura'],
            personal_background: data['Antecedente personal'],
            objective: data['Objetivos'],
            observation: data['Observaciones'],
        }
    });

    // Registra Id en caso de tener datos
    useEffect(() => {
        if (data) {
            register({ name: 'id' });
            setValue("id", data['idUsuario'])
        }
    }, [register])

    return (
        <Form name="form-calls" onSubmit={handleSubmit(onSubmit)}>
            <Row>
                <Col sm='6' md='6'>
                    {/* BEGIN Input Nombre */}
                    <InputText
                        register={register}
                        name='name'
                        label='Nombre'
                        placeholder='ej. Pedro'
                        errors={errors}
                        rules={{
                            required: required(''),
                            minLength: minLength(2)
                        }}
                    />
                    {/* END Input Nombre */}
                    {/* BEGIN Input Usuario */}
                    <InputText
                        register={register}
                        name='username'
                        label='Usuario con el que entrará el paciente a la App'
                        placeholder='ej. JoseFrank'
                        errors={errors}
                        rules={{
                            required: required(''),
                            minLength: minLength(6)
                        }}
                    />
                    {/* END Input Usuario */}
                    {/* BEGIN Input Fecha nacimiento */}
                    <InputText
                        register={register}
                        name='birthDate'
                        type='date'
                        label='Fecha nacimiento'
                        placeholder='ej. 1990-01-01'
                        errors={errors}
                        rules={{
                            required: required('')
                        }}
                    />
                    {/* END Input Fecha nacimiento */}

                    {/* BEGIN Input Talla */}
                    <InputText
                        register={register}
                        name='size'
                        label='Talla'
                        type='number'
                        step='any'
                        placeholder='ej. 7.2'
                        errors={errors}
                        rules={{
                            required: required('')
                        }}
                    />
                    {/* END Input Talla */}
                    {/* BEGIN Input antecedente familiar */}
                    <InputText
                        register={register}
                        as="textarea"
                        rows="3"
                        name='family_background'
                        label='Antecedente familiar'
                        placeholder='ej. madre con diabetes etc.'
                        errors={errors}
                        rules={{
                            required: required(''),
                            minLength: minLength(2)
                        }}
                    />
                    {/* END Input antecedente familiar */}
                    {/* BEGIN Input medicamentos */}
                    <InputText
                        register={register}
                        as="textarea"
                        rows="3"
                        name='medicines'
                        label='Medicamentos'
                        placeholder='ej. paracetamol etc.'
                        errors={errors}
                        rules={{
                            required: required(''),
                            minLength: minLength(2)
                        }}
                    />
                    {/* END Input medicamentos */}
                    {/* BEGIN Input Genero */}
                    <RadioGenre
                        label={'Género'}
                        register={register}
                        errors={errors}
                        rules={{
                            required: required('')
                        }}
                    />
                    {/* END Input Genero */}
                     {/* BEGIN Input Nombre */}
                     <InputText
                        register={register}
                        name='idStatusCivil'
                        label='Estado civil'
                        placeholder='ej. Casado, divorciado, soltero etc.'
                        errors={errors}
                        rules={{
                            required: required(''),
                        }}
                    />
                    {/* END Input Nombre */}
                </Col>
                <Col sm='6' md='6'>
                    {/* BEGIN Input Apellido */}
                    <InputText
                        register={register}
                        name='lastname'
                        label='Apellido'
                        placeholder='ej. Padilla'
                        errors={errors}
                        rules={{
                            required: required('')
                        }}
                    />
                    {/* END Input Apellido */}

                    {/* BEGIN Input Correo */}
                    <InputText
                        register={register}
                        name='email'
                        label='Correo'
                        placeholder='ej. juan@gmail.com'
                        errors={errors}
                        rules={{
                            required: required(''),
                            pattern: emailPattern,
                            minLength: minLength(5)
                        }}
                    />
                    {/* END Input Correo */}
                    {/* BEGIN Input Ocupacion */}
                    <InputText
                        register={register}
                        name='occupation'
                        label='Ocupación'
                        placeholder='ej. arquitecto'
                        errors={errors}
                        rules={{
                            required: required('')
                        }}
                    />
                    {/* END Input Ocupacion */}
                    {/* BEGIN Input Estatura */}
                    <InputText
                        register={register}
                        name='stature'
                        label='Estatura'
                        type='number'
                        step='any'
                        placeholder='ej. 1.82'
                        errors={errors}
                        rules={{
                            required: required('')
                        }}
                    />
                    {/* END Input Estatura */}

                    {/* BEGIN Input antecedente personal */}
                    <InputText
                        register={register}
                        as="textarea"
                        rows="3"
                        name='personal_background'
                        label='Antecedente personal'
                        placeholder='ej. presión alta etc.'
                        errors={errors}
                        rules={{
                            required: required(''),
                            minLength: minLength(2)
                        }}
                    />
                    {/* END Input antecedente personal */}
                    {/* BEGIN Input Objetivos */}
                    <InputText
                        register={register}
                        as="textarea"
                        rows="3"
                        name='objective'
                        label='Objetivos'
                        placeholder='ej. ganar músculo etc.'
                        errors={errors}
                        rules={{
                            required: required(''),
                            minLength: minLength(2)
                        }}
                    />
                    {/* END Input Objetivos */}
                    {/* BEGIN Input Objetivos */}
                    <InputText
                        register={register}
                        as="textarea"
                        rows="3"
                        name='observation'
                        label='Observaciones'
                        placeholder='escribe algunas observaciones'
                        errors={errors}
                        rules={{
                            required: required(''),
                            minLength: minLength(2)
                        }}
                    />
                    {/* END Input Objetivos */}
                </Col>

            </Row>

            {/* BEGIN Footer Modal con botones */}
            <Modal.Footer>
                <Btn
                    label={'Cancelar'}
                    className={'btn-danger'}
                    onClick={close}
                    icon={true}
                    iconLeft={true}
                    iconClass={'far fa-times-circle'}
                />
                <Btn
                    type="submit"
                    label={labelButton}
                    className={'btn-primary'}
                    icon={true}
                    iconLeft={true}
                    iconClass={'far fa-check-circle'}
                />
            </Modal.Footer>
            {/* END Footer Modal con botones  */}
        </Form >
    );
}
// exporta el componente Formulario de Login
export { UserForm };