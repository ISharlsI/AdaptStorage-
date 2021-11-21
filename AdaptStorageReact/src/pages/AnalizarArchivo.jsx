import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import logo from "../img/Logo_AdaptStorage_Blanco.png";
import axios from "axios";

function AnalizarArchivo() {
  let history = useHistory();
  let location = useLocation();
  const [Archivo, setArchivo] = useState(
    location.state ? location.state.archivo : ""
  );
  const [Contenido, setContenido] = useState("");

  /*
  Análisis del archivo
    - Cantidad de Palabras
    - Cantidad de párrafos
    - Cantidad de lineas
    - Cantidad de palabras que empiezan con letra mayuscula
    - Palabras que se repiten
  */

  //Variables de Análisis
  const [CantPalabras, setCantPalabras] = useState(0);
  const [CantParrafos, setCantParrafos] = useState(0);
  const [CantLineas, setCantLineas] = useState(0);
  const [CantPalabrasMayus, setCantPalabrasMayus] = useState(0);
  const [PalabrasRepetidas, setPalabrasRepetidas] = useState([{palabra:'ejemplo', cant:1},{palabra:'ejemplo2', cant:2}]);

  if (Archivo === "") {
    history.push("/");
  }

  //mostrar contenido
  useEffect(() => {
    obtenerArchivos3();
    analizarContenido();
  }, []);

  async function obtenerArchivos3() {
    const res = await axios.get(
      process.env.REACT_APP_SERVER_URL +
        "mostrarDatos3.php?id=" +
        Archivo.id +
        ""
    );

    setContenido(res.data[0].contenido);
  }

  function analizarContenido() {
    //Cantidad de Palabras
    let cont = Contenido;
    cont = cont.replace(/(^\s*)|(\s*$)/gi,"");
    cont = cont.replace(/\s\s+/g, ' ');
    setCantPalabras(cont.split(' ').filter(String).length);

    //Cantidad de Párrafos
    cont = Contenido;
    cont = cont.replace(/(\r\n|\r|\n){3,}/g, '$1\n');
    setCantParrafos(cont.split("\n\n").length);

    //Cantidad de Lineas
    cont = Contenido;
    setCantLineas(cont.split("\n").length);

    //Cantidad de Palabras que comienzan con Mayuscula
    cont = Contenido;
    cont = cont.replace(/(^\s*)|(\s*$)/gi,"");
    cont = cont.replace(/\s\s+/g, ' ');
    setCantPalabrasMayus(cont.split(' ').filter(String).length);
    console.log(cont);
  }

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-primary"
        style={{ display: "flex", boxShadow: "0px 1px 4px #999" }}
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
      <div className="container-fluid">
        <div
          className="card mb-3"
          style={{
            marginTop: "1rem",
            background: "#D0DFF2",
            display: "grid",
            gridTemplateColumns: "2",
            gridTemplateRows: "3",
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
                h6.detalle{\
                  font-weight: 400;\
                  font-size: 0.8rem;\
                  color: #444;\
                }\
                "
            }
          </style>
          <div
            style={{
              gridColumn: "1/3",
              gridRow: "1",
              border:'solid 2px red'
            }}
          >
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
                fill="currentColor"
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
          </div>
          <div
            style={{
              gridColumn: "1/2",
              gridRow: "2",
              border:'solid 2px red',
            }}
          >
            <h6 style={{textAlign:'center'}}>Contenido</h6>
            <span
            style={{
              whiteSpace: "pre-line",
              fontSize: "0.8rem",
            }}
            >
              {Contenido}
            </span>
          </div>
          <div
            style={{
              gridColumn: "2/2",
              gridRow: "2",
              border:'solid 2px red'
            }}
          >
            <h6 style={{textAlign:'center'}}>Análisis</h6>

            <h6 className="detalle">Cant. de Palabras</h6>
            <p>{CantPalabras}</p>

            <h6 className="detalle">Cant. de Párrafos</h6>
            <p>{CantParrafos}</p>

            <h6 className="detalle">Cant. de Lineas</h6>
            <p>{CantLineas}</p>

            <h6 className="detalle">Palabras que comienzan con letra mayuscula</h6>
            <p>{CantPalabrasMayus}</p>

            <h6 className="detalle">Palabras que se repiten</h6>
            {PalabrasRepetidas.map((e) => (
            <p>{e.cant + ' - ' + e.palabra}</p>
            ))}
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnalizarArchivo;
