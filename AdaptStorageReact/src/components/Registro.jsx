import React, { Fragment, Component } from "react";

const URL_REGISTRO = "http://localhost/AdaptStorage/registrar.php";

//Función Mandar datos a PHP
const enviarData = async (url, data) => {
  const resp = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log(resp);
  const json = await resp.json();
  console.log(json);

  return json;
};

class Registro extends Component {
  state = {
    usuario: "",
    correo: "",
    clave: "",
    confClave: "",
    mensajeError: "",
    mensajeRegistro: "",
  };

  render() {
    const validar = () => {
      if (
        this.state.usuario === "" ||
        this.state.clave === "" ||
        this.state.correo === "" ||
        this.state.confClave === ""
      ) {
        this.setState({
          mensajeError: "Asegurese de llenar todos los campos.",
        });
        return false;
      } else if (this.state.clave !== this.state.confClave) {
        this.setState({
          mensajeError: "Asegurese de que las contraseñas coincidan.",
        });
        return false;
      }

      return true;
    };

    const handleRegistro = async () => {
      if (validar()) {
        const data = {
          usuario: this.state.usuario,
          correo: this.state.correo,
          password: this.state.clave,
        };

        console.log(data);
        const respuestaJson = await enviarData(URL_REGISTRO, data);
        console.log(respuestaJson);

        if (respuestaJson.conectado === true) {
          this.setState({ mensajeLogin: "Registro Exitoso (" + respuestaJson.nombre + ")"});
          this.setState({ mensajeError: "" });
        } else {
          this.setState({ mensajeError: "Al menos un dato es incorrecto" });
          this.setState({ mensajeLogin: "" });
        }
      } else {
        console.log("INTRODUZCA CORRECTAMENTE LOS DATOS");
      }
    };

    const handleChangeInput = (event) => {
      if (event.target.id === "usuario") {
        this.setState({ usuario: event.target.value });
      } else if (event.target.id === "correo") {
        this.setState({ correo: event.target.value });
      } else if (event.target.id === "password") {
        this.setState({ clave: event.target.value });
      } else if (event.target.id === "confirmar_password") {
        this.setState({ confClave: event.target.value });
      }

      if (event.target.value !== "") {
        event.target.className = "form-control";
      } else {
        event.target.className = "form-control is-invalid";
      }
    };

    return (
      <Fragment>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "50px",
            }}
          >
            <div className="card mb-3" style={{ background: "#D0DFF2" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                fill="currentColor"
                className="bi bi-pencil-square"
                viewBox="0 0 16 16"
                style={{ marginLeft: 15, marginTop: 15 }}
              >
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path
                  fill-rule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                />
              </svg>
              <h4 style={{ textAlign: "center", marginTop: "10px" }}>
                Registro
              </h4>
              <div className="card-body">
                {/*FORMULARIO DE REGISTRO DE USUARIO*/}

                <h6
                  style={{
                    color: "Green",
                    textAlign: "center",
                  }}
                >
                  {this.state.mensajeLogin}
                </h6>

                <h6
                  style={{
                    fontSize: 16,
                    color: "#e51c23",
                    textAlign: "center",
                  }}
                >
                  {this.state.mensajeError}
                </h6>

                <div className="form-group row">
                  <label for="email" className="col-sm-2 col-form-label">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      fill="currentColor"
                      className="bi bi-person"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                    </svg>
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      id="usuario"
                      className="form-control"
                      aria-describedby="emailHelp"
                      placeholder="Nombre"
                      value={this.state.usuario}
                      onChange={handleChangeInput}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label for="email" className="col-sm-2 col-form-label">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      fill="currentColor"
                      className="bi bi-envelope"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                    </svg>
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="email"
                      className="form-control"
                      id="correo"
                      aria-describedby="emailHelp"
                      placeholder="Correo"
                      value={this.state.correo}
                      onChange={handleChangeInput}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label for="email" className="col-sm-2 col-form-label">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      fill="currentColor"
                      className="bi bi-lock"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
                    </svg>
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Contraseña"
                      value={this.state.clave}
                      onChange={handleChangeInput}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label for="email" className="col-sm-2 col-form-label">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      fill="currentColor"
                      className="bi bi-lock-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                    </svg>
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="password"
                      className="form-control"
                      id="confirmar_password"
                      placeholder="Confirmar contraseña"
                      value={this.state.confClave}
                      onChange={handleChangeInput}
                    />
                  </div>
                </div>
                <br />
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <button
                    onClick={handleRegistro}
                    className="btn"
                    style={{
                      background: "#5FF27A",
                      color: "white",
                      fontWeight: 400,
                    }}
                  >
                    Registrar
                  </button>
                </div>

                <div style={{ marginTop: "20%" }}>
                  <style>
                    {
                      "\
                                h6:hover{\
                                text-decoration: solid underline 2px\
                                }\
                            "
                    }
                  </style>
                  <a
                    onClick={this.props.mostrarLogin}
                    style={{ textDecoration: "none", cursor: "pointer" }}
                  >
                    <h6
                      className="card-subtitle text-muted"
                      style={{
                        textAlign: "left",
                        fontWeight: 400,
                        fontSize: 14,
                      }}
                    >
                      ¿Ya tienes cuenta? <b>Inicia sesión.</b>
                    </h6>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Registro;
