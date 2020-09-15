/**
 * Created by: Joel Valdivia
 * Date: 05 Jun 2020
 * Description: Componente que contiene el formulario de Login usando react-hooks-form
 */
import React from 'react';
import { useForm } from "react-hook-form";
import InputText from '../../components/InputText';
import Btn from '../../components/Btn';
import { emailRequired, emailPattern } from '../../helpers/validationsInputs';

// Componente que contiene el formulario de Login
function ForgotForm({ onSubmit }) {

    // define caracteristicas de ReacHookForm
    const { register, handleSubmit, errors } = useForm();

    return (
        <form name="form-forgot" onSubmit={handleSubmit(onSubmit)}>
            {/* BEGIN Input email */}
            <InputText
                register={register}
                name='username'
                placeholder='tucorreo@ejemplo.com'
                errors={errors}
                rules={
                    {
                        required: emailRequired,
                        pattern: emailPattern
                    }
                }
            />
            {/* END Input email */}

            {/* BEGIN Button Entrar de tipo Submit */}
            <Btn
                type="submit"
                label={'Obtener enlace para restablecer'}
                className={'btn-primary label-bold'}
            />
            {/* END Button Entrar */}
        </form>
    );
}
// exporta el componente Formulario de Login
export { ForgotForm };