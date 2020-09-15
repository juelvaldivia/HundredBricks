// PARA MÁS VALIDACIONES
// https://react-hook-form.com/get-started#Applyvalidation

/**
 * Created by Joel Valdivia
 * Date 10 Jun 2020
 * Description: Archivo con las validaciones para ReactHookForm
 */
export const userRequired = {
    value: true,
    message: 'es requerido'
}

export const required = (field)=> {
    return {
    value: true,
    message: `${field} es requerido`
    }
}

export const minLength = (min)=> {
    return {
    value: min,
    message: `debe tener al menos ${min} caracteres`
    }
}

export const passwordRequired = {
    value: true,
    message: 'es requerido'
}

export const emailRequired = {
    value: true,
    message: 'es requerido'
}

export const emailPattern = {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    message: "no es válido"
}
export const passwordPattern = {
    value: /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&.*])[\w!@#$%^&.*]{8,}$/i,
    message: "La contraseña debe contener mínimo 1 mayúscula, 1 minúscula, 1 número, 8 dígitos, 1 caracter especial: !@#$%^&.*"
}