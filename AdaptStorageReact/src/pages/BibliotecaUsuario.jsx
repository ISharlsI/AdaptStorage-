import React, { useContext, useState } from "react";
import { sesion_usuario } from "../helper/context";
import { Redirect } from "react-router-dom";
import Navbar from "../components/Navbar";

function BibliotecaUsuario() {
  //Se importa variable de Contexto (Global)
  const { SesionUsuario, setSesionUsuario } = useContext(sesion_usuario);

  //Toggle Mostrar Biblioteca/Lista de Cuentas (admin)
  const [VistaBiblio, setVistaBiblio] = useState(true);

  function toggleBiblio() {
    setVistaBiblio((prevVistaBiblio) => !prevVistaBiblio);
  }

  //Se valida la sesión iniciada
  if (!SesionUsuario.conectado) {
    //De no estar iniciada sesión,
    //Se redirecciona al index
    return <Redirect to="/" />;
  }

  //Se muestra la biblioteca
  return (
    <div>
      <Navbar />

      {VistaBiblio ? (
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
                  border: solid white 2px;\
                }\
                button.ordenar:hover{\
                  background: white;\
                  color: #666;\
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
                className="btn btn-primary subir"
                style={{
                  marginLeft:"0.5rem",
                  marginRight:"0.5rem",
                  textTransform: "capitalize",
                  fontWeight: "300",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1.2rem"
                  fill="currentColor"
                  class="bi bi-upload"
                  viewBox="0 0 16 16"
                >
                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                  <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
                </svg>
                {" Subir Archivo"}
              </button>
              <button
                className="btn btn-dark carpeta"
                style={{
                  marginLeft:"0.5rem",
                  marginRight: "auto",
                  textTransform: "capitalize",
                  fontWeight: "300",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1.2rem"
                  fill="currentColor"
                  class="bi bi-folder2"
                  viewBox="0 0 16 16"
                >
                  <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 12.5v-9zM2.5 3a.5.5 0 0 0-.5.5V6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5zM14 7H2v5.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V7z" />
                </svg>
                {" Nueva Carpeta"}
              </button>
              <button
                className="btn btn-secondary ordenar"
                style={{
                  marginLeft:"0.5rem",
                  marginRight:"0.5rem",
                  textTransform: "capitalize",
                  fontWeight: "300",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1.2rem"
                  fill="currentColor"
                  class="bi bi-filter"
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
                    <th
                      className="col-3"
                      scope="col"
                      style={{ fontWeight: 600 }}
                    >
                      Nombre
                    </th>
                    <th
                      className="col-1"
                      scope="col"
                      style={{ fontWeight: 600 }}
                    >
                      Tipo
                    </th>
                    <th
                      className="col-1"
                      scope="col"
                      style={{ fontWeight: 600 }}
                    >
                      Fecha
                    </th>
                    <th
                      className="col-1"
                      scope="col"
                      style={{ fontWeight: 600 }}
                    >
                      Tamaño
                    </th>
                    <th
                      className="col-1"
                      scope="col"
                      style={{ fontWeight: 600 }}
                    >
                      Propietario
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: "solid 0.05rem #bbb" }}>
                    <th scope="row" style={{ fontWeight: 600 }}>
                      Resumen Ventas Agosto
                    </th>
                    <td style={{ fontWeight: 400 }}>PDF</td>
                    <td style={{ fontWeight: 400 }}>28/09/21</td>
                    <td style={{ fontWeight: 400 }}>230 KB</td>
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
                  <tr style={{ borderBottom: "solid 0.05rem #bbb" }}>
                    <th scope="row" style={{ fontWeight: 600 }}>
                      Proyecto Desarollo
                    </th>
                    <td style={{ fontWeight: 400 }}>Carpeta</td>
                    <td style={{ fontWeight: 400 }}>02/10/21</td>
                    <td style={{ fontWeight: 400 }}>-</td>
                    <td
                      style={{
                        fontWeight: 400,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      Yared del Toro Hernandez
                    </td>
                  </tr>
                  <tr style={{ borderBottom: "solid 0.05rem #bbb" }}>
                    <th scope="row" style={{ fontWeight: 600 }}>
                      Cotización Technology
                    </th>
                    <td style={{ fontWeight: 400 }}>XLSX</td>
                    <td style={{ fontWeight: 400 }}>12/05/21</td>
                    <td style={{ fontWeight: 400 }}>32 KB</td>
                    <td
                      style={{
                        fontWeight: 400,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      Juan Guillermo Uribe Parra
                    </td>
                  </tr>
                  <tr style={{ borderBottom: "solid 0.05rem #bbb" }}>
                    <th scope="row" style={{ fontWeight: 600 }}>
                      Video Introducción
                    </th>
                    <td style={{ fontWeight: 400 }}>MP4</td>
                    <td style={{ fontWeight: 400 }}>21/09/21</td>
                    <td style={{ fontWeight: 400 }}>83 MB</td>
                    <td
                      style={{
                        fontWeight: 400,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      Juan Guillermo Uribe Parra
                    </td>
                  </tr>
                  <tr style={{ borderBottom: "solid 0.05rem #bbb" }}>
                    <th scope="row" style={{ fontWeight: 600 }}>
                      Reporte Javier Enero
                    </th>
                    <td style={{ fontWeight: 400 }}>PDF</td>
                    <td style={{ fontWeight: 400 }}>15/08/21</td>
                    <td style={{ fontWeight: 400 }}>168 KB</td>
                    <td
                      style={{
                        fontWeight: 400,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      Javier Hernandez Palma
                    </td>
                  </tr>
                  <tr style={{ borderBottom: "solid 0.05rem #bbb" }}>
                    <th scope="row" style={{ fontWeight: 600 }}>
                      Plan de Rodaje Comercial
                    </th>
                    <td style={{ fontWeight: 400 }}>DOCX</td>
                    <td style={{ fontWeight: 400 }}>04/10/21</td>
                    <td style={{ fontWeight: 400 }}>2.4 MB</td>
                    <td
                      style={{
                        fontWeight: 400,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      Ernesto Arenas Cano
                    </td>
                  </tr>
                  <tr style={{ borderBottom: "solid 0.05rem #bbb" }}>
                    <th scope="row" style={{ fontWeight: 600 }}>
                      Estrategia Presupuesto 3er Cuarto
                    </th>
                    <td style={{ fontWeight: 400 }}>PPTX</td>
                    <td style={{ fontWeight: 400 }}>28/09/21</td>
                    <td style={{ fontWeight: 400 }}>6.3 MB</td>
                    <td
                      style={{
                        fontWeight: 400,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      Carlos Alberto Conchas Montañés
                    </td>
                  </tr>
                  <tr style={{ borderBottom: "solid 0.05rem #bbb" }}>
                    <th scope="row" style={{ fontWeight: 600 }}>
                      Proyecto Cervantes
                    </th>
                    <td style={{ fontWeight: 400 }}>PDF</td>
                    <td style={{ fontWeight: 400 }}>04/10/21</td>
                    <td style={{ fontWeight: 400 }}>821 KB</td>
                    <td
                      style={{
                        fontWeight: 400,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      Alejando Vazquez Lara
                    </td>
                  </tr>
                  <tr style={{ borderBottom: "solid 0.05rem #bbb" }}>
                    <th scope="row" style={{ fontWeight: 600 }}>
                      Entrevista José Porfirio
                    </th>
                    <td style={{ fontWeight: 400 }}>MP3</td>
                    <td style={{ fontWeight: 400 }}>28/10/21</td>
                    <td style={{ fontWeight: 400 }}>7.1 MB</td>
                    <td
                      style={{
                        fontWeight: 400,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      Sergio Antonio Uribe Parra
                    </td>
                  </tr>
                  <tr style={{ borderBottom: "solid 0.05rem #bbb" }}>
                    <th scope="row" style={{ fontWeight: 600 }}>
                      Resumen Ventas Agosto
                    </th>
                    <td style={{ fontWeight: 400 }}>PDF</td>
                    <td style={{ fontWeight: 400 }}>28/09/21</td>
                    <td style={{ fontWeight: 400 }}>230 KB</td>
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
                  <tr style={{ borderBottom: "solid 0.05rem #bbb" }}>
                    <th scope="row" style={{ fontWeight: 600 }}>
                      Proyecto Desarollo
                    </th>
                    <td style={{ fontWeight: 400 }}>Carpeta</td>
                    <td style={{ fontWeight: 400 }}>02/10/21</td>
                    <td style={{ fontWeight: 400 }}>-</td>
                    <td
                      style={{
                        fontWeight: 400,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      Yared del Toro Hernandez
                    </td>
                  </tr>
                  <tr style={{ borderBottom: "solid 0.05rem #bbb" }}>
                    <th scope="row" style={{ fontWeight: 600 }}>
                      Cotización Technology
                    </th>
                    <td style={{ fontWeight: 400 }}>XLSX</td>
                    <td style={{ fontWeight: 400 }}>12/05/21</td>
                    <td style={{ fontWeight: 400 }}>32 KB</td>
                    <td
                      style={{
                        fontWeight: 400,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      Juan Guillermo Uribe Parra
                    </td>
                  </tr>
                </tbody>
              </table>
              <div style={{  display:"flex", justifyContent:"flex-end", }}>
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
      ) : (
        //------------------- VISTA CUENTAS ADMIN --------------------
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
                  border: solid white 2px;\
                }\
                button.ordenar:hover{\
                  background: white;\
                  color: #666;\
                  border: solid #444 2px;\
                }\
                button.ordenar:enabled{\
                  border: solid #444 2px;\
                }\
                \
                "
              }
            </style>
            <div className="container-fluid" style={{  display:"flex", justifyContent:"flex-end" }}>
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
                  class="bi bi-filter"
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
                    Nivel
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
                <tr style={{ borderBottom: "solid 0.05rem #bbb" }}>
                  <th scope="row" style={{ fontWeight: 600, whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis", }}>
                    Carlos Alberto Conchas Montañez
                  </th>
                  <td style={{ fontWeight: 400 }}>
                     1 - Adminisitrador
                    </td>
                  <td
                    style={{
                      fontWeight: 400,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    carlos_al@gmail.com
                  </td>
                  <td style={{ display:"flex", fontWeight: 400, justifyContent:"center", borderBottom:"none"}}>
                    <button type="button" class="btn btn-warning btn-sm" style={{textTransform:"capitalize"}}>Editar</button>
                    <button type="button" class="btn btn-danger btn-sm" style={{textTransform:"capitalize", marginLeft:"0.5rem"}}>Eliminar</button>
                  </td>
                </tr>
                <tr style={{ borderBottom: "solid 0.05rem #bbb" }}>
                  <th scope="row" style={{ fontWeight: 600, whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis", }}>
                    José Daniel Vazquez Franco
                  </th>
                  <td style={{ fontWeight: 400 }}>
                    2 - Desarrollo
                    </td>
                  <td
                    style={{
                      fontWeight: 400,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    daniel_vazquez@yahoo.com
                  </td>
                  <td style={{ display:"flex", fontWeight: 400, justifyContent:"center", borderBottom:"none"}}>
                    <button type="button" class="btn btn-warning btn-sm" style={{textTransform:"capitalize"}}>Editar</button>
                    <button type="button" class="btn btn-danger btn-sm" style={{textTransform:"capitalize", marginLeft:"0.5rem"}}>Eliminar</button>
                  </td>
                </tr>
                <tr style={{ borderBottom: "solid 0.05rem #bbb" }}>
                  <th scope="row" style={{ fontWeight: 600, whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis", }}>
                    Juan Guillermo Uribe Parra
                  </th>
                  <td style={{ fontWeight: 400 }}>
                    2 - Desarrollo
                    </td>
                  <td
                    style={{
                      fontWeight: 400,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    juang_uribe@hotmail.com.mx
                  </td>
                  <td style={{ display:"flex", fontWeight: 400, justifyContent:"center", borderBottom:"none"}}>
                    <button type="button" class="btn btn-warning btn-sm" style={{textTransform:"capitalize"}}>Editar</button>
                    <button type="button" class="btn btn-danger btn-sm" style={{textTransform:"capitalize", marginLeft:"0.5rem"}}>Eliminar</button>
                  </td>
                </tr>
                <tr style={{ borderBottom: "solid 0.05rem #bbb" }}>
                  <th scope="row" style={{ fontWeight: 600, whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis", }}>
                    Ernesto Arenas Cano
                  </th>
                  <td style={{ fontWeight: 400 }}>
                    2 - Desarrollo
                    </td>
                  <td
                    style={{
                      fontWeight: 400,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    arenas_ernesto@outlool.com
                  </td>
                  <td style={{ display:"flex", fontWeight: 400, justifyContent:"center", borderBottom:"none"}}>
                    <button type="button" class="btn btn-warning btn-sm" style={{textTransform:"capitalize"}}>Editar</button>
                    <button type="button" class="btn btn-danger btn-sm" style={{textTransform:"capitalize", marginLeft:"0.5rem"}}>Eliminar</button>
                  </td>
                </tr>
                <tr style={{ borderBottom: "solid 0.05rem #bbb" }}>
                  <th scope="row" style={{ fontWeight: 600, whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis", }}>
                    Yared del Toro Hernandez
                  </th>
                  <td style={{ fontWeight: 400 }}>
                    3 - Diseño
                    </td>
                  <td
                    style={{
                      fontWeight: 400,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    yareddeltoro@mailchimp.com
                  </td>
                  <td style={{ display:"flex", fontWeight: 400, justifyContent:"center", borderBottom:"none"}}>
                    <button type="button" class="btn btn-warning btn-sm" style={{textTransform:"capitalize"}}>Editar</button>
                    <button type="button" class="btn btn-danger btn-sm" style={{textTransform:"capitalize", marginLeft:"0.5rem"}}>Eliminar</button>
                  </td>
                </tr>
                <tr style={{ borderBottom: "solid 0.05rem #bbb" }}>
                  <th scope="row" style={{ fontWeight: 600, whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis", }}>
                    Priscila Muñoz Lopez
                  </th>
                  <td style={{ fontWeight: 400 }}>
                    3 - Diseño
                    </td>
                  <td
                    style={{
                      fontWeight: 400,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    pris_muñoz@yahoo.com
                  </td>
                  <td style={{ display:"flex", fontWeight: 400, justifyContent:"center", borderBottom:"none"}}>
                    <button type="button" class="btn btn-warning btn-sm" style={{textTransform:"capitalize"}}>Editar</button>
                    <button type="button" class="btn btn-danger btn-sm" style={{textTransform:"capitalize", marginLeft:"0.5rem"}}>Eliminar</button>
                  </td>
                </tr>
                <tr style={{ borderBottom: "solid 0.05rem #bbb" }}>
                  <th scope="row" style={{ fontWeight: 600, whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis", }}>
                    Adrian Cano Jimenez
                  </th>
                  <td style={{ fontWeight: 400 }}>
                    3 - Diseño
                    </td>
                  <td
                    style={{
                      fontWeight: 400,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    cano.adrian@gmail.com
                  </td>
                  <td style={{ display:"flex", fontWeight: 400, justifyContent:"center", borderBottom:"none"}}>
                    <button type="button" class="btn btn-warning btn-sm" style={{textTransform:"capitalize"}}>Editar</button>
                    <button type="button" class="btn btn-danger btn-sm" style={{textTransform:"capitalize", marginLeft:"0.5rem"}}>Eliminar</button>
                  </td>
                </tr>
                <tr style={{ borderBottom: "solid 0.05rem #bbb" }}>
                  <th scope="row" style={{ fontWeight: 600, whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis", }}>
                    Alfredo Rosales Gomez
                  </th>
                  <td style={{ fontWeight: 400 }}>
                    3 - Diseño
                    </td>
                  <td
                    style={{
                      fontWeight: 400,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    fredo_rosales@hotmail.com
                  </td>
                  <td style={{ display:"flex", fontWeight: 400, justifyContent:"center", borderBottom:"none"}}>
                    <button type="button" class="btn btn-warning btn-sm" style={{textTransform:"capitalize"}}>Editar</button>
                    <button type="button" class="btn btn-danger btn-sm" style={{textTransform:"capitalize", marginLeft:"0.5rem"}}>Eliminar</button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div style={{  display:"flex", justifyContent:"flex-end", }}>
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
      )}

      <button onClick={toggleBiblio}>Cambiar Vista</button>
    </div>
  );
}

export default BibliotecaUsuario;
