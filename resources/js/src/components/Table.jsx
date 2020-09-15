import React from 'react';
import DataTable from 'react-data-table-component';
import { LoaderCustom } from './LoaderCustom';
import { useSelector } from 'react-redux';

function Table({ className, title, columns, data, noDataLabel, onChangePage, isPagination, total, registerPerPage, theme, ...props }) {


    const { loading } = useSelector(store => store)
    
    return (
        <DataTable
            className={className}
            title={title}
            columns={columns}
            data={data}
            noDataComponent={noDataLabel ? noDataLabel : 'No hay información para mostrar'}
            onChangePage={onChangePage}
            // onRowSelected={seleccionaRow}
            overflowY={true}
            pagination={isPagination}
            paginationServer={true}
            paginationTotalRows={total}
            paginationPerPage={registerPerPage}
            // paginationRowsPerPageOptions={opcionesPorPagina}
            paginationComponentOptions={{rowsPerPageText: 'Por página', rangeSeparatorText: 'de'}}
            progressPending={loading.tableShow}
            progressCentered={true}
            progressComponent={<LoaderCustom />}
            theme={theme}
            {...props}
        />

    );
}

export { Table }