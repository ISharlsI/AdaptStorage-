import logo from "./img/Logo_AdaptStorage_Negro.png";
import "./App.css";
import React, { Fragment, Component } from "react";
import Login from "./components/Login";
import Registro from "./components/Registro";
import BibliotecaUsuario from "./pages/BibliotecaUsuario";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  state = {
    visible: true,
    /*
    usuario: {
      conectado: false,
      etiquetaTipoUsuario: "",
      id: 0,
      idTipoUsuario: 0,
      nombre: "",
      usuario: ""
    }
    */
  };

  render() {
    const toggleLogin = () => {
      this.setState({ visible: !this.state.visible });
    };

    const onChangeUsuario = ({refJson}) => {
      this.state.usuario.conectado = refJson.conectado;
      this.state.usuario.etiquetaTipoUsuario = refJson.etiquetaTipoUsuario;
      this.state.usuario.id = refJson.id;
      this.state.usuario.idTipoUsuario = refJson.idTipoUsuario;
      this.state.usuario.nombre = refJson.nombre;
      this.state.usuario.usuario = refJson.usuario;

      console.log(this.usuario);
    }

    return (
      <Router>
        <Fragment>
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

              {this.state.visible ? (
                <Login mostrarRegistro={toggleLogin} logearUsuario = {onChangeUsuario}/>
              ) : (
                <Registro mostrarLogin={toggleLogin} />
              )}
            </Route>

            <Route exact path="/biblioteca">
              {/* -----------------------BIBLIOTECA USUARIO--------------------- */}
                <BibliotecaUsuario/>
            </Route>

            <Route exact path="/bibliotecaAdmin">
              {/* -----------------------BIBLIOTECA ADMON--------------------- */}
            </Route>

          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
