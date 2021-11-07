import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function VistaBiblioteca({toggleBiblio}) {
  let history = useHistory();
  const [extra, setExtra] = useState([]);

  useEffect(() => {
    obtenerArchivos();
  }, []);

  async function obtenerArchivos() {
    const res = await axios.get(
      "http://localhost/AdaptStorage/mostrarDatos.php"
    );
    console.log(res.data);
    setExtra(res.data);
  }

  //Se declara variable de sesión
  const [SesionUsuario, setSesionUsuario] = useState(
    JSON.parse(localStorage.getItem("sesion_usuario")) || ""
  );

  function navegarSubirArchivo() {
    history.push("/subir");
  }

  return (
    //------------------- VISTA BIBLIOTECA --------------------
    <div>
      <div className="">
        <div
          className="container-fluid"
          style={{
            paddingTop: "1rem",
            paddingBottom: "1rem",
            paddingLeft: "3rem",
            paddingRight: "3rem",
            borderBottom: "solid 0.1rem #666",
            display: "flex",
          }}
        >
          <style>
            {
              "\
                button.subir{\
                    border-radius: 5px;\
                    background: #2196f3;\
                    box-shadow: none;\
                    color: white;\
                    border: solid #2196f3 2px;\
                }\
                \
                button.subir:hover{\
                    background: white;\
                    color: #2196f3;\
                    border: solid #2196f3 2px;\
                }\
                button.subir:enabled{\
                  border: solid #2196f3 2px;\
                }\
                \
                button.carpeta{\
                  border-radius: 5px;\
                  background: #444;\
                  box-shadow: none;\
                  color: white;\
                  border: solid #444 2px;\
                }\
                \
                button.carpeta:hover{\
                  background: white;\
                  color: #666;\
                  border: solid #444 2px;\
                }\
                button.carpeta:enabled{\
                  border: solid #444 2px;\
                }\
                \
                button.ordenar{\
                  border-radius: 5px;\
                  background: white;\
                  box-shadow: none;\
                  color: #444;\
                  border: solid #444 2px;\
                }\
                button.ordenar:hover{\
                  background: #444;\
                  color: white;\
                  border: solid #444 2px;\
                }\
                button.ordenar:enabled{\
                  border: solid #444 2px;\
                }\
                \
                "
            }
          </style>
          <button
            onClick={navegarSubirArchivo}
            className="btn btn-primary subir"
            style={{
              marginLeft: "0.5rem",
              marginRight: "0.5rem",
              textTransform: "capitalize",
              fontWeight: "300",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.2rem"
              fill="currentColor"
              className="bi bi-upload"
              viewBox="0 0 16 16"
            >
              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
              <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
            </svg>
            {" Subir Archivo"}
          </button>
         {/* <button
            className="btn btn-dark carpeta"
            style={{
              marginLeft: "0.5rem",
              marginRight: "0.5rem",
              textTransform: "capitalize",
              fontWeight: "300",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.2rem"
              fill="currentColor"
              className="bi bi-folder2"
              viewBox="0 0 16 16"
            >
              <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 12.5v-9zM2.5 3a.5.5 0 0 0-.5.5V6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5zM14 7H2v5.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V7z" />
            </svg>
            {" Nueva Carpeta"}
          </button>
          */}
          <button
            onClick={toggleBiblio}
            className="btn btn-secondary ordenar"
            style={{
              marginLeft: "0.5rem",
              marginRight: "auto",
              textTransform: "capitalize",
              fontWeight: "300",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.2rem"
              fill="currentColor"
              class="bi bi-person"
              viewBox="0 0 16 16"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
            </svg>
            {" Vista Usuarios"}
          </button>
          <button
            className="btn btn-secondary ordenar"
            style={{
              marginLeft: "0.5rem",
              marginRight: "0.5rem",
              textTransform: "capitalize",
              fontWeight: "300",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.2rem"
              fill="currentColor"
              className="bi bi-filter"
              viewBox="0 0 16 16"
            >
              <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
            </svg>
            {" Ordenar"}
          </button>
        </div>
        <div
          className="container-fluid"
          style={{
            paddingTop: "1rem",
            paddingRight: "3rem",
            paddingLeft: "3rem",
            overflow: "auto",
          }}
        >
          <table
            className="table"
            style={{ color: "#666", width: "100%", tableLayout: "fixed" }}
          >
            <thead>
              <tr style={{ fontStyle: "italic" }}>
                <th className="col-3" scope="col" style={{ fontWeight: 600 }}>
                  Nombre
                </th>
                <th className="col-1" scope="col" style={{ fontWeight: 600 }}>
                  Tipo
                </th>
                <th className="col-1" scope="col" style={{ fontWeight: 600 }}>
                  Fecha
                </th>
                <th className="col-1" scope="col" style={{ fontWeight: 600 }}>
                  Tamaño
                </th>
                <th className="col-1" scope="col" style={{ fontWeight: 600 }}>
                  Propietario
                </th>
              </tr>
            </thead>
            <tbody>
              {extra.map((e) => (
                <tr style={{ borderBottom: "solid 0.05rem #bbb" }}>
                  <th scope="row" style={{ fontWeight: 600 }}>
                    {e.titulo}
                  </th>
                  <td style={{ fontWeight: 400, textTransform:"uppercase" }}>{e.tipo}</td>
                  <td style={{ fontWeight: 400 }}>{e.fecha}</td>
                  <td style={{ fontWeight: 400 }}>{e.tamanio < 1048576 ? (e.tamanio < 1024 ? (e.tamanio + " B") : ((e.tamanio/1024).toFixed(0) + " KB")) : ((e.tamanio/1048576).toFixed(0) + " MB")}</td>
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
              ))}
            </tbody>
          </table>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <ul className="pagination">
              <li className="page-item disabled">
                <a className="page-link" href="#">
                  &laquo;
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  4
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  5
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  &raquo;
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VistaBiblioteca;
