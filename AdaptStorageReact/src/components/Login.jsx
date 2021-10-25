import React from "react";

export function Login({mostrarRegistro}) {

  return (
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
          className="bi bi-key"
          viewBox="0 0 16 16"
          style={{ marginLeft: 15, marginTop: 7 }}
        >
          <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z" />
          <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
        </svg>
        <h4 style={{ textAlign: "center", marginTop: "10px" }}>Login</h4>
        <div className="card-body">
          {/*FORMULARIO DE REGISTRO DE USUARIO*/}

          <form>
            <fieldset>
              <div className="form-group row">
                <label for="email" className="col-sm-2 col-form-label">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    fill="currentColor"
                    class="bi bi-person"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                  </svg>
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="usuario"
                    aria-describedby="emailHelp"
                    placeholder="Usuario"
                    style={{
                      textDecorationColor: "white",
                      //padding: 0,
                    }}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label for="email" className="col-sm-2 col-form-label">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    fill="currentColor"
                    class="bi bi-lock"
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
                  />
                </div>
              </div>

              <br />
              <div>
                <style>
                  {
                    "\
                        h6:hover{\
                          text-decoration: solid underline 2px\
                        }\
                      "
                  }
                </style>
                <a href="" style={{ textDecoration: "none" }}>
                  <h6
                    className="card-subtitle text-muted"
                    style={{
                      textAlign: "center",
                      fontWeight: 400,
                      fontSize: 16,
                    }}
                  >
                    ¿Olvidaste tu constraseña?
                  </h6>
                </a>
              </div>
              <br />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button
                  type="submit"
                  className="btn"
                  style={{
                    background: "#5FF27A",
                    color: "white",
                    fontWeight: 400,
                  }}
                >
                  Ingresar
                </button>
              </div>
            </fieldset>
          </form>

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
            <a onClick={mostrarRegistro}  style={{ textDecoration: "none", cursor: "pointer" }}>
              <h6
                className="card-subtitle text-muted"
                style={{
                  textAlign: "left",
                  fontWeight: 400,
                  fontSize: 14,
                }}
              >
                ¿No tienes cuenta? <b>Registrate.</b>
              </h6>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
