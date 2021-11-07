import React, { Fragment, useState } from 'react'

function FilaVistaBiblioteca({ archivo }) {
    return (
        <Fragment>
            <style>
                    {
                      "\
                      tr.archivo{\
                        background: white;\
                        color: #666;\
                        border-right: solid white 0rem;\
                        border-left: solid white 0rem;\
                        transition: 0.3s;\
                        border-bottom: solid 0.05rem #bbb;\
                      }\
                      tr.archivo:hover{\
                        background: #2196f3;\
                        color: white;\
                        border-right: solid white 0.5rem;\
                        border-left: solid white 0.5rem;\
                        border-bottom: solid 0.05rem #bbb;\
                      }\
                      tr.archivo:active{\
                        color: #2196f3;\
                        background: white;\
                        transition: 0.1s;\
                      }\
                      "
                    }
                  </style>
                  <tr className="archivo">
                    <th scope="row" style={{ fontWeight: 600 }}>
                      {archivo.titulo}
                    </th>
                    <td style={{ fontWeight: 400, textTransform: "uppercase" }}>
                      {archivo.tipo}
                    </td>
                    <td style={{ fontWeight: 400 }}>{archivo.fecha}</td>
                    <td style={{ fontWeight: 400 }}>
                      {archivo.tamanio < 1048576
                        ? archivo.tamanio < 1024
                          ? archivo.tamanio + " B"
                          : (archivo.tamanio / 1024).toFixed(0) + " KB"
                        : (archivo.tamanio / 1048576).toFixed(0) + " MB"}
                    </td>
                    <td
                      style={{
                        fontWeight: 400,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      José Daniel Vazquez Franco
                    </td>
                  </tr>
        </Fragment>
    )
}

export default FilaVistaBiblioteca;
