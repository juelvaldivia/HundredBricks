import React from "react";
import { Button, FormGroup } from "react-bootstrap";
/**
 * Created by: Joel Valdivia
 * Date 09 Jun 2020
 * Componente de boton
 * @param {Object} param0 Opciones de configuracion para el Boton
 */
function Btn({ label, className, icon, iconLeft = false, iconRight = true, iconClass, ...rest }) {

    // verifica si icono izquierdo es verdadero y pasa el icono derecho a falso
    iconRight = !(iconLeft == true)

    return (
        <FormGroup>
            <Button
                // opciones del button
                {...rest}
                // clase del boton
                className={`btn ${className}`}>

                {
                    // verifica si contiene icono 
                    // y si es del lado izquierdo
                    icon ?
                        iconLeft && <span><i className={iconClass}></i> </span>
                        : null
                }

                {
                    // muestra el label
                    label
                }
                {
                    // verifica si contiene icono 
                    // y si es del lado derecho
                    icon ?
                        iconRight && <span> <i className={iconClass}></i> </span>
                        : null
                }
            </Button>
        </FormGroup>
    )
}

export default Btn;