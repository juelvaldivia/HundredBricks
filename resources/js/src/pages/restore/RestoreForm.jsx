/**
 * Created by: Joel Valdivia
 * Date: 05 Jun 2020
 * Description: Componente que contiene el formulario de Login usando react-hooks-form
 */
import React from 'react';
import { useForm } from "react-hook-form";
import InputText from '../../components/InputText';
import Btn from '../../components/Btn';
import { passwordRequired, passwordPattern } from '../../helpers/validationsInputs';

// Componente que contiene el formulario de Login
function RestoreForm({ onSubmit }) {

    // define caracteristicas de ReacHookForm
    const { register, handleSubmit, errors, getValues } = useForm();

    return (
        <form name="form-forgot" onSubmit={handleSubmit(onSubmit)}>
            {/* BEGIN Input password */}
            <InputText
                register={register}
                name='password'
                type='password'
                placeholder='Escribe nueva contraseña'
                errors={errors}
                rules={
                    {
                        required: passwordRequired,
                        pattern: passwordPattern,
                    }
                }
            />
            {/* END Input password */}

            {/* BEGIN Input confirm password */}
            <InputText
                register={register}
                name='confirm_password'
                type='password'
                placeholder='Confirma tu nueva contraseña'
                errors={errors}
                rules={
                    {
                        required: passwordRequired,
                        pattern: passwordPattern,
                        validate: (value) => {
                            return value === getValues('password') || 'Las contraseñas deben coincidir'
                        }
                    }
                }
            />
            {/* END Input confirm password */}

            {/* BEGIN Button Entrar de tipo Submit */}
            <Btn
                type="submit"
                label={'Restablecer contraseña'}
                className={'btn-primary label-bold'}
            />
            {/* END Button Entrar */}
        </form>
    );
}
// exporta el componente Formulario de Login
export { RestoreForm };