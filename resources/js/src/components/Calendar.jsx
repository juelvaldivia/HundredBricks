
import React, { useState } from 'react';
import ReactLightCalendar from '@lls/react-light-calendar'
import { getFormattedDate } from '../helpers/dateCustom';


export const DAY_LABELS = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
export const MONTH_LABELS = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

/**
 * Created by Joel Valdivia
 * Date 15 Jun 2020
 * @param {onChange} onChange Callback para tratar la respuesta de fechas del calendario
 */
function Calendar({ onChange, ...props }) {

    const [startDate, setStartDate] = useState(new Date().getTime());
    const [endDate, setEndDate] = useState(null);

    /**
     * Detecta el cambio en las fechas y trata el resultado
     * @param {Date} start fecha inicial del calendario
     * @param {Date} end fecha final del calendario
     */
    const onChangeDate = (start, end) => {
        // convierte el dato en fecha
        const startDateTime = new Date(start);
        // convierte el dato en fecha
        const endDateTime = new Date(end);
        console.log(startDateTime)
        // regresa fecha con formato yyyy-mm-dd
        const startString = getFormattedDate(startDateTime)
        // regresa fecha con formato yyyy-mm-dd
        const endString = end !== null ? getFormattedDate(endDateTime) : null;
        // callback del componente padre
        onChange(startString, endString)
        // setter de datos de fecha inicial y final
        setStartDate(start)
        setEndDate(end)
    }

    return (
        <ReactLightCalendar
            startDate={startDate}
            endDate={endDate}
            dayLabels={DAY_LABELS}
            monthLabels={MONTH_LABELS}
            onChange={onChangeDate} />
    )
}

export { Calendar };