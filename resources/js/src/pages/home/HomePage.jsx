import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { propertyGetAction } from '../../actions/property/propertyGetAction';
import { Card, Button } from 'react-bootstrap';
import { bricksByPropertyAction } from '../../actions/bricks/bricksByPropertyAction';
import { useState } from 'react';
import { bricksAvailableAction } from '../../actions/bricks/bricksAvailableAction';
import { modalError } from '../../redux/ducks/modalDucks';
import { carGetAction } from '../../actions/car/carGetAction';
import { carAddAction } from '../../actions/car/carAddAction';
import { bricksByUserAction } from '../../actions/bricks/bricksByUserAction';
import { carDeleteAction } from '../../actions/car/carDeleteAction';
import { carTermsAcceptedAction } from '../../actions/car/carTermsAcceptedAction';
import { carPayAction } from '../../actions/car/carPayAction';

/**
 * Created by Joel Valdivia
 * Date 14 Sep 2020
 * Description: Componente de Home de la Web App
 */
function HomePage() {

    // obtiene usuario del store
    const { user } = useSelector(store => store.authenticate);
    const { properties } = useSelector(store => store.property);
    const { bricks, userBricks } = useSelector(store => store.bricks);
    const { car } = useSelector(store => store.car);
    const { terms_accepted } = car;

    const [property, setProperty] = useState(null);
    const [terms, setTerms] = useState(null);

    const dispatch = useDispatch();

    const API_URL = '/property';
    const API_URL_BRICK = '/brick';
    const API_URL_CAR = '/car';
    const API_URL_USER= '/user';

    
    useEffect(() => {
        setTerms(terms_accepted);
    }, [terms_accepted])


    useEffect(() => {
        propertyGetAction(dispatch, API_URL, 'Error al obtener las propiedades')
        carGetAction(dispatch, API_URL_CAR, 'Error al obtener carrito')
        bricksByUserAction(dispatch, `${API_URL_USER}/bricks`, 'Error al obtener ladrillos del usuario')
    }, [])

    const bricksByProperty = (property) => {
        
        setProperty(property)
        let url = `${API_URL}/${property.id_property}/bricks`
        bricksByPropertyAction(dispatch, url, 'Error al obtener los ladrillos por propiedad')

    }

    const addCar = (brick) => {

        console.log('Car add', brick)
        const bricks = {
            bricks: [brick.id_brick]
        }
        let url = `${API_URL_CAR}/add`
        carAddAction(dispatch, url, bricks, 'Error al agregar ladrillo')
    }

    const delBrickCar = (brickToDelete) => {

        console.log('Car delete', brickToDelete)
        const brick = {
            brick: brickToDelete.id_brick
        }
        let url = `${API_URL_CAR}/brick`
        carDeleteAction(dispatch, url, brick, 'Error al quitar ladrillo')
    }

    const verifyBrick = (brick) => {

        // verificar disponibilidad
        let url = `${API_URL_BRICK}/available/${brick.id_brick}`
        bricksAvailableAction(dispatch,url,'Error al verificar ladrillo')
        .then(brickAvailable => {
            // si esta disponible
            if(brickAvailable.available){
                // agregar al carrito
                addCar(brickAvailable)
            }else {
                //en caso contrario muestra modal con error
                dispatch(modalError({ title: 'Ladrillo no disponible', body: 'Ladrillo no disponible intente agregar otro' }));
            }
        })
        .catch(error => {
            console.log(error)
        })
    }

    const acceptTerms = (e) => {

        const accept = !(e.target.value == 'true');
        setTerms(accept)

        const acceptedTerms = {
            accepted: accept
        }
        let url = `${API_URL_CAR}/terms`
        carTermsAcceptedAction(dispatch, url, acceptedTerms, 'Error al aceptar términos' )
        console.log(accept)
    }

    const payCar = () => {
        let url = `${API_URL_CAR}/pay`
        let urlProperty = `${API_URL}/${property.id_property}/bricks`
        carPayAction(dispatch, url, urlProperty, 'Error al pagar el carrito' )
    }

    return (
        <div className="common-container dashboard-container">
            <div className='row col-md-12'>

                <div className='col-md-4'>
                    <h3>Propiedades</h3>
                {
                    properties.map((property, index) => {
                        return (
                            <Card key={`property-${index}`}style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{property.name}</Card.Title>
                                <Card.Text>
                                {property.description}
                                </Card.Text>
                                <Button variant="outline-primary" onClick={() => bricksByProperty(property)}>Ver ladrillos</Button>
                            </Card.Body>
                            </Card>

                        )
                    })
                }
                </div>
                <div className='col-md-4'>
                    {
                        property && <h3>{`Ladrillos de ${property.name}`}</h3>
                    }
                    <div className='row'>
                    {
                        bricks.map((brick, index) => {
                            return (
                            <Card key={`brick-${index}`}style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>{brick.name}</Card.Title>
                                    <Card.Text>
                                        Precio: ${new Intl.NumberFormat().format(brick.price)}
                                    </Card.Text>
                                    <Button variant="outline-success" onClick={() => verifyBrick(brick)}>Agregar a carrito</Button>
                                </Card.Body>
                            </Card>
                            )
                        })
                    }
                    </div>

                </div>
                <div className='col-md-4'>
                    {
                        car.total > 0 && 
                        <h3>Carrito</h3>
                    }
                    <div className='row'>
                    {
                         car.total > 0 && car.bricks && car.bricks.map((brick, index) => {
                            return (
                            <Card key={`brick-${index}`}style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>{brick.name}</Card.Title>
                                    <Card.Text>
                                        Precio: ${new Intl.NumberFormat().format(brick.price)}
                                    </Card.Text>
                                    <Button variant="outline-danger" onClick={() => delBrickCar(brick)}>Quitar</Button>
                                </Card.Body>
                            </Card>

                            )
                        })
                    }
                     
                    </div>
                    {
                         car.total > 0 && 
                        <div>
                            <p><input type='checkbox' checked={terms} value={terms} onChange={acceptTerms}/> Términos y condiciones</p>
                            <p>
                                <b>Total: ${new Intl.NumberFormat().format(car.total)}</b>
                            </p>
                            <p>
                                <Button onClick={payCar}>Pagar</Button>
                            </p>
                        </div>
                    }
                </div>
            </div>
            <hr></hr>
            <div className='mx-auto container'>
                <h3>Tus ladrillos</h3>
                <div className='row col-md-12'>
                    {
                        userBricks && userBricks.bricks && userBricks.bricks.map((brick, index) => {
                            return(
                                <Card key={`brick-${index}`}style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Title>{brick.name}</Card.Title>
                                        <Card.Text>
                                            Precio: ${new Intl.NumberFormat().format(brick.price)}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export { HomePage };