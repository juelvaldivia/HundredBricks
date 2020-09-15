import React from 'react';
import { Table } from "./Table";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Col, Form } from "react-bootstrap";

/**
 * Created by Joel Valdivia
 * Date 16 Jun 2020
 * Funcion para tabla dinámica en todos los cruds
 * @param {Function} openModal Funcion para abrir el modal dependiendo la accion
 */
function TableDinamyc({ openModal, title = '', theme = '', noDataLabel }) {

    const { table } = useSelector(store => store);
    const { paginate, columns, buttons } = table;
    const { data, total, per_page } = paginate;
    const dispatch = useDispatch();

    const [isColumns, setIsColumns] = useState(false)

    // detecta cambios en la variable columnas
    useEffect(() => {
        // en caso de detectar un cambio en las columnas
        // verifica si contienen columnas
        if (columns.length > 0) {
            // indica que se pueden generar las columnas
            setIsColumns(true)
        }
    }, [columns])

    /**
     * Contruye columna de una variable string "Nombre de la columna"
     * @param {String} column String de columna
     */
    const createColumnText = (column) => {
        return {
            name: column,
            selector: column,
            sortable: true,
            cell: (row) => (
                <>
                    {/* <span className="col-cabecera" >{column}: </span> */}
                    {row[column]}
                </>
            )
        }
    }

    /**
     * Construye columna de una variable objeto
     * @param {Object} column Objeto de columna
     */
    const createColumnObject = (column) => {

        const name = column.name;
        const integer = column.type === 'int';
        const datestring = column.type === 'date';

        return {
            name: name,
            selector: name,
            sortable: true,
            center: integer,
            right: datestring,
            cell: (row) => (
                <>
                    {/* <span className="col-cabecera" >{name}: </span> */}
                    {row[name]}
                </>
            )
        };
    }

    /**
     * Construye columna de una variable objeto
     * @param {Object} column Objeto de columna
     */
    const createColumnActions = (openModal) => {
        const center = true;
        const button = true;
        const ignoreRowClick = true;

        return {
            name: 'Acciones',
            center: center,
            button: button,
            ignoreRowClick: ignoreRowClick,
            cell: (row) =>
                <Form className='form-btn'>
                    <Form.Row>
                        {
                            // Si vienen botones para agregar desde el bak  los recorremos y los pintamos en la vista
                            buttons.map(function (button, index) {
                                return (
                                    <Col className='cuadroboton' key={index} >
                                        <Button
                                            title={button.name}
                                            className={button.class}
                                            onClick={(e) => openModal(e, row, button.action)}
                                            data-toggle='tooltip'
                                            data-placement='top'>
                                            <i className={button.icon}> </i>
                                        </Button>
                                    </Col>
                                );
                            })
                        }
                    </Form.Row>
                </Form>
        }
    }

    /**
     * crear las columnas de la tabla asi como los botones de las funciones de las acciones
     * @param modificar
     * @param eliminar
     * @returns {*[]}
     */
    const generateColumns = (openModal) => {

        let columnsGenerated = [];
        // recorre las columnas
        columns.map((column, index) => {
            // verifica que no sea la columna id 
            if (index !== 0 && column != 'Acciones') {
                let columnCreate = null;
                // verifica si es un objeto la columna
                if (typeof columna === 'object') {
                    // en caso de ser objeto crea su columna
                    columnCreate = createColumnObject(column);
                } else {
                    // en caso de no ser objeto crea con Texto
                    columnCreate = createColumnText(column);
                }
                // agrega cada columna creada
                columnsGenerated.push(columnCreate)
            }

            if(column == 'Acciones'){
                // crea columna con acciones
                const columnActions = createColumnActions(openModal)
                // agrega la columna de acciones a las columnas
                columnsGenerated.push(columnActions)
            }
        })

        return columnsGenerated;
    }

    /**
     * Funcion que obtiene el numero de página al cambiar en la paginacion
     * @param {Number} page Número de página
     */
    const changePage = (page) => {
        // url de pagina
        const url = `${paginate.path}?page=${page}`;
        // dispara la accion para obtener la informacion de la paginacion
        tableGetAction(dispatch, url)
    }

    return (
        <Table
            className={'table'}
            title={title}
            theme={theme}
            columns={isColumns ? generateColumns(openModal) : []}
            data={data}
            noDataLabel={noDataLabel}
            onChangePage={changePage}
            isPagination={true}
            total={total}
            registerPerPage={per_page}
        />
    )
}

export { TableDinamyc }