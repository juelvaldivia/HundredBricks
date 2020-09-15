/**
 * Created by: Joel Valdivia
 * Date: 05 Jun 2020
 * Description: Componente que contiene el formulario de Login usando react-hooks-form
 */
import React from 'react';
import { useForm } from "react-hook-form";
import InputText from '../../components/InputText';
import Btn from '../../components/Btn';
import { userRequired, passwordRequired } from '../../helpers/validationsInputs';





// Componente que contiene el formulario de Login
function LoginForm({ onSubmit }) {

    // define caracteristicas de ReacHookForm
    const { register, handleSubmit, errors } = useForm();


    return (
        <form name="form-login" onSubmit={handleSubmit(onSubmit)}>
            {/* BEGIN Input Username */}
            <InputText
                register={register}
                name='username'
                // label='Usuario'
                placeholder='usuario'
                errors={errors}
                rules={{
                    required: userRequired
                }}
            />
            {/* END Input Username */}

            {/* BEGIN Input Password */}
            <InputText
                register={register}
                name='password'
                type="password"
                // label='Contraseña'
                placeholder='contraseña'
                errors={errors}
                rules={{
                    required: passwordRequired
                }}
            />
            {/* END Input Password */}

            {/* BEGIN Button Entrar de tipo Submit */}
            <Btn
                type="submit"
                label={'Entrar'}
                className={'btn-primary label-bold'}
                icon={true}
                iconLeft={true}
                iconClass={'fa fa-sign-in-alt'}
            />
            {/* END Button Entrar */}
        </form>
    );
}
// exporta el componente Formulario de Login
export { LoginForm };