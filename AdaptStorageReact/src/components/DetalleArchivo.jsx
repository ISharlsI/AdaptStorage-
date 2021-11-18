import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { saveAs } from "file-saver";

const DetalleArchivo = ({ archivo, refreshTablas, resetDetalle }) => {
  let history = useHistory();
  const URL_DESCARGA = "http://localhost/AdaptStorage/uploads/";

  const [Titulo, setTitulo] = useState(archivo.titulo);
  const [Tipo, setTipoo] = useState(archivo.tipo);
  const [Tamanio, setTamanio] = useState(archivo.tamanio);
  const [Fecha, setFecha] = useState(archivo.fecha);
  const [Name, setName] = useState(archivo.name);
  const [Nivel, setNivel] = useState(archivo.nivel);
  const [Id, setId] = useState(archivo.id);

  function descargarArchivo() {
    saveAs(
      URL_DESCARGA + archivo.titulo,
      archivo.titulo + "." + archivo.tipo
    );
  }

  function modificarArchivo() {
    console.log('MODIFICAR ARCHIVO');
  }

  function inhabilitarArchivo() {
    console.log('INHABILITAR ARCHIVO');
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        left: 0,
        width: "100%",
        zIndex: 1,
        paddingTop: "1rem",
      }}
    >
      <div
        className="card mb-3"
        style={{ background: "#D0DFF2", width: "20rem" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          fill="currentColor"
          className="bi bi-file-earmark"
          viewBox="0 0 16 16"
          style={{ marginLeft: 15, marginTop: 15 }}
        >
          <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" />
        </svg>

        <button
          className="btn"
          onClick={resetDetalle}
          style={{
            position: "absolute",
            right: 0,
            marginRight: 15,
            marginTop: 15,
            padding: 10,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            fill="currentColor"
            className="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
            />
            <path
              fill-rule="evenodd"
              d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
            />
          </svg>
        </button>

        <h4 style={{ textAlign: "center", marginTop: "10px" }}>Archivo</h4>
        <div
          className="card-body"
          style={{
            marginLeft: "1.6rem",
            marginRight: "1.6rem",
          }}
        >
          <span style={{ fontWeight: 600 }}>Nombre:</span>
          <br />
          <span style={{ fontWeight: 400 }}>{Titulo}</span>
          <br />
          <br />

          <span style={{ fontWeight: 600 }}>Tipo de archivo:</span>
          <br />
          <span style={{ fontWeight: 400 }}>{Tipo}</span>
          <br />
          <br />

          <span style={{ fontWeight: 600 }}>Fecha de Carga:</span>
          <br />
          <span style={{ fontWeight: 400 }}>{Fecha}</span>
          <br />
          <br />

          <span style={{ fontWeight: 600 }}>Tamaño:</span>
          <br />
          <span style={{ fontWeight: 400 }}>{Tamanio}</span>
          <br />
          <br />

          <span style={{ fontWeight: 600 }}>Propietario:</span>
          <br />
          <span style={{ fontWeight: 400 }}>{Name}</span>
          <br />
          <br />

          <span style={{ fontWeight: 600 }}>Nivel de acceso:</span>
          <br />
          <span style={{ fontWeight: 400 }}>{Nivel}</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            marginBottom: "2rem",
          }}
        >
          {Tipo === "docx" || Tipo === "txt" || Tipo === "pdf" ? (
            <button
              onClick={() => {history.push("/analizar", {archivo: archivo});}}
              className="btn btn btn-light"
              style={{
                margin: "0.4rem",
                fontWeight: 400,
                padding: 6,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                fill="currentColor"
                class="bi bi-clipboard-data"
                viewBox="0 0 16 16"
              >
                <path d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0V9z" />
                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
              </svg>
            </button>
          ) : (
            ""
          )}
          <button
            onClick={descargarArchivo}
            className="btn btn btn-light"
            style={{
              margin: "0.4rem",
              fontWeight: 400,
              padding: 6,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              fill="currentColor"
              className="bi bi-download"
              viewBox="0 0 16 16"
            >
              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
              <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
            </svg>
          </button>
          <button
            onClick={modificarArchivo}
            className="btn btn btn-light"
            style={{
              margin: "0.4rem",
              fontWeight: 400,
              padding: 6,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              fill="currentColor"
              className="bi bi-pencil"
              viewBox="0 0 16 16"
            >
              <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
            </svg>
          </button>
          <button
            onClick={inhabilitarArchivo}
            className="btn btn btn-light"
            style={{
              margin: "0.4rem",
              fontWeight: 400,
              padding: 6,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              fill="currentColor"
              className="bi bi-trash"
              viewBox="0 0 16 16"
            >
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
              <path
                fill-rule="evenodd"
                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetalleArchivo;
