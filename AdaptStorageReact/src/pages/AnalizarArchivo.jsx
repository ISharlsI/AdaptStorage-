import React, { useEffect, useState } from 'react'
import { useLocation, useHistory } from "react-router-dom";
import logo from "../img/Logo_AdaptStorage_Blanco.png";
import axios from "axios";


function AnalizarArchivo() {
    let history = useHistory();
    let location = useLocation();
    const [Archivo, setArchivo] = useState(location.state ? (location.state.archivo) : '');
    const [Contenido, setContenido] = useState('AQUÍ VA EL CONTENIDO MAMAWEBO');
    const [extra, setExtra] = useState([]);
    if (Archivo === '') {
        history.push("/");
    }
    //mostrar contenido
    useEffect(() => {
      obtenerArchivos3();
    }, []);
    
  async function obtenerArchivos3() {
    const res = await axios.get(
      process.env.REACT_APP_SERVER_URL + "mostrarDatos3.php?id=" + Archivo.id + ""
    );
    console.log("mostrarDatos3.php?id=" + Archivo.id + "");
    console.log(res.data);
    setExtra(res.data);
  }

    return (
        <div>
        <nav
        className="navbar navbar-expand-lg navbar-dark bg-primary"
        style={{ display: "flex", boxShadow:'0px 1px 4px #999' }}
      >
        <div
          className="container-fluid"
          style={{ justifyContent: "center" }}
          onClick={() => {
            history.push("/biblioteca");
          }}
        >
          <img src={logo} alt="" style={{ height: "4rem" }} />
        </div>
      </nav>

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
                "
            }
          </style>

      <button
        onClick={() => {
          history.push("/biblioteca");
        }}
        className="btn btn-primary subir"
        style={{
          marginTop: "1rem",
          marginLeft: "10%",
          marginRight: "0.5rem",
          textTransform: "capitalize",
          fontWeight: "300",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1.2rem"
          fill-rull="currentColor"
          className="bi bi-arrow-left"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
          />
        </svg>
        {" Regresar"}
      </button>
            <h6>{Archivo.titulo}</h6>
            <h6>{Archivo.tipo}</h6>
            <h6>{Archivo.tamanio}</h6>
            <h6>{Archivo.name}</h6>
            <h6>{Archivo.id}</h6>
            <h6>{Contenido}</h6>
           
            
        </div>
    )
}

export default  AnalizarArchivo;
