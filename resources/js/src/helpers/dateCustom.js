/**
 * Created by Joel Valdivia
 * Date 15 Junio 2020
 * Archivo para tratar todo sobre Date
 * @param {Date} date Fecha para formatear
 */
export const getFormattedDate = (date) => {
    console.log(date)
    let year = date.getFullYear();
    let month = (1 + date.getMonth()).toString().padStart(2, '0');
    let day = (date.getDate() + 1).toString().padStart(2, '0');
    return year + '-' + month + '-' + day;
}