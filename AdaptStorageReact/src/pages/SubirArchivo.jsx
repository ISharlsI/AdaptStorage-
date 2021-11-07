import React, { useState } from 'react'
import logo from "../img/Logo_AdaptStorage_Negro.png";
import axios from 'axios';
import { useHistory } from "react-router-dom";

const UPLOAD_ENDPOINT = 'http://localhost/AdaptStorage/subirArchivo.php';

function SubirArchivo() {
  let history = useHistory();

  //Se declara variable de sesión
  const [SesionUsuario, setSesionUsuario] = useState(
    JSON.parse(localStorage.getItem("sesion_usuario")) || ""
  );

  const [File, setFile] = useState(null);
  const [MensajeError, setMensajeError] = useState('');

   const onSubmit = async (e) => {
    e.preventDefault() 
    let res = await uploadFile(File);
    console.log(res.data);

    if (typeof(res.data.error) === 'undefined' || res.data.error === true) {
      setMensajeError(MensajeError => 'Hubo un error, por favor intentelo de nuevo.');
    }
    else{
      history.push("/biblioteca");
    }
    
  }

  const onChange = (e) => {
    setFile(File => e.target.files[0]);
}

const uploadFile = async (File) => {
    const formData = new FormData();
    formData.append('documento',File)
    return  await axios.post(UPLOAD_ENDPOINT, formData,{
        headers: {
          "Content-Type": "application/json"
        }
    });
}

  return (
    
<div>
            <nav
              className="navbar navbar-expand-lg navbar-dark bg-primary"
              style={{ display: "flex" }}
            >
              <div
                className="container-fluid"
                style={{ justifyContent: "center" }}
                onClick={() => {
                  history.push("/biblioteca");
                }}
              >
                <img src={logo} alt="" style={{ height: "100px" }} />
              </div>
            </nav>

        <form onSubmit={ onSubmit } className="form-inline">
            {/* Seleccionador de archivo*/}
            <div 
                 className="form-control"
                 style={{
                 display: "flex",
                 justifyContent: "center",
                 alignItems: "center",
                 marginTop: "100px",
            }} 
            >
            <input
                      onChange={ onChange }
                      type="file"
                      id="archivo"      
                    />
            </div>

            {/* Mensaje Error*/}
           <div>
            <h6
              style={{
                fontSize: 16,
                color: "#e51c23",
                textAlign: "center",
              }}
            >
              {MensajeError}
            </h6>
           </div>

            {/*Boton SUBIR*/}
            <div style={{ display: "flex", justifyContent: "center",   marginTop: "30px", }}>
                <button
                    type="submit"
                    className="btn"
                    style={{
                    background: "#0EC1FE",
                    color: "white",
                    fontWeight: 400,
                    }}
                  >
                    Subir
                </button>
            </div>
            </form>
    </div>

    
    
  )
}

export default SubirArchivo;
