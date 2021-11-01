import logo from "./img/Logo_AdaptStorage_Negro.png";
import "./App.css";
import React, { useState } from "react";
import Login from "./components/Login";
import Registro from "./components/Registro";
import BibliotecaUsuario from "./pages/BibliotecaUsuario";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { sesion_usuario } from "./helper/context";

function App() {
  const [visible, setVisible] = useState(true);
  const [SesionUsuario, setSesionUsuario] = useState({
    conectado: false,
  });

  function toggleLogin() {
    setVisible((prevVisible) => !prevVisible);
  }

  function fetchUsuario(refJson) {
    setSesionUsuario((SesionUsuario) => refJson);
    //console.log(SesionUsuario);
  }

  return (
    <sesion_usuario.Provider value={{ SesionUsuario, setSesionUsuario }}>
      <Router>
        <Switch>
          <Route exact path="/">
            {/* -----------------------LOGIN/REGISTRO--------------------- */}

            <nav
              className="navbar navbar-expand-lg navbar-dark bg-primary"
              style={{ display: "flex" }}
            >
              <div
                className="container-fluid"
                style={{ justifyContent: "center" }}
              >
                <img src={logo} alt="" style={{ height: "100px" }} />
              </div>
            </nav>

            {visible ? (
              <Login
                mostrarRegistro={toggleLogin}
                logearUsuario={fetchUsuario}
              />
            ) : (
              <Registro mostrarLogin={toggleLogin} />
            )}
          </Route>

          <Route exact path="/biblioteca">
            {/* -----------------------BIBLIOTECA USUARIO--------------------- */}
            <BibliotecaUsuario />
          </Route>

          <Route exact path="/bibliotecaAdmin">
            {/* -----------------------BIBLIOTECA ADMON--------------------- */}
          </Route>
        </Switch>
      </Router>
    </sesion_usuario.Provider>
  );
}

export default App;
