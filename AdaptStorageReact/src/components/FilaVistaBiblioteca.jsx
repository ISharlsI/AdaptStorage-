import React, { Fragment, useState } from "react";

function FilaVistaBiblioteca({ archivo }) {
  const [SesionUsuario, setSesionUsuario] = useState(
    JSON.parse(localStorage.getItem("sesion_usuario")) || ""
  );

  const fecha = new Date(archivo.fecha);
  fecha.setDate(fecha.getDate() + 1);

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
      {archivo.nivel > SesionUsuario.idTipoUsuario ? (
        <span></span>
      ) : (
        <Fragment>
          <tr className="archivo">
            <th
              scope="row"
              style={{
                fontWeight: 600,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {archivo.titulo}
            </th>
            <td style={{ fontWeight: 400, textTransform: "uppercase" }}>
              {archivo.tipo}
            </td>
            <td style={{ fontWeight: 400 }}>{"Nivel " + archivo.nivel}</td>
            <td style={{ fontWeight: 400 }}>
              {new Intl.DateTimeFormat("es-MX", { dateStyle: "short" }).format(
                fecha
              )}
            </td>
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
              {archivo.name}
            </td>
          </tr>
        </Fragment>
      )}
    </Fragment>
  );
}

export default FilaVistaBiblioteca;
