import React, { useState, useEffect } from "react";
import FilaVistaUsuario from "./FilaVistaUsuario";
import axios from "axios";

function VistaUsuarios({ toggleBiblio }) {
  const [extra2, setExtra2] = useState([]);

  useEffect(() => {
    obtenerArchivos2();
  }, []);

  async function obtenerArchivos2() {
    const res2 = await axios.get(
      "http://localhost/AdaptStorage/mostrarDatos2.php"
    );
    console.log(res2.data);
    setExtra2(res2.data);
  }

  return (
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
        <div
          className="container-fluid"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
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
            {" Vista Biblioteca"}
          </button>
          <button
            className="btn btn-secondary ordenar"
            style={{
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
              <th className="col-2" scope="col" style={{ fontWeight: 600 }}>
                Nombre
              </th>
              <th className="col-2" scope="col" style={{ fontWeight: 600 }}>
                Nivel de Seguridad
              </th>
              <th className="col-2" scope="col" style={{ fontWeight: 600 }}>
                Correo
              </th>
              <th className="col-2" scope="col" style={{ fontWeight: 600 }}>
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Mostrar Usuarios */}
            {extra2.map((r) => (
              <FilaVistaUsuario usuario={r}/>
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
  );
}

export default VistaUsuarios;
