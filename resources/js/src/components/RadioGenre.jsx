import React from "react";
import { Col, Form, Row } from "react-bootstrap";
/**
 * Created by: Joel Valdivia
 * Date 09 Jun 2020
 * Componente de boton
 * @param {Object} param0 Opciones de configuracion para el Radio de Género
 */
function RadioGenre({ register, label, errors, rules, ...rest }) {

    return (

        <Form.Group as={Row}>

            <Form.Label as="legend" column sm={2}>
                {label}
            </Form.Label>
            <Col sm={10}>
                <Form.Check
                    id="genre-man"
                >
                    <Form.Check.Input
                        ref={register(rules)}
                        type={"radio"}
                        value={'H'}
                        name="genre"
                        isInvalid={errors['genre'] ? true : false} />
                    <Form.Check.Label>{`Hombre`}</Form.Check.Label>
                    <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback>
                </Form.Check>

                <Form.Check
                    id="genre-woman"
                >
                    <Form.Check.Input
                        ref={register(rules)}
                        type={"radio"}
                        value={'M'}
                        name="genre"
                        isInvalid={errors['genre'] ? true : false} />
                    <Form.Check.Label>{`Mujer`}</Form.Check.Label>
                    <Form.Control.Feedback type="invalid">
                        {
                            errors['genre'] && <>{label} {errors['genre'].message}</>
                        }
                    </Form.Control.Feedback>
                </Form.Check>

            </Col>
        </Form.Group>
    )
}

export default RadioGenre;