import React from "react";
import { useHistory } from "react-router-dom";

function DropdownUsuario({toggleBiblio}) {
  let history = useHistory();

  const cerrarSesion = () => {
    localStorage.clear();
    history.push("/");
  }

  return (
    <div
      className="fixed"
      style={{
        position: "absolute",
        right:"0px",
        zIndex: 1,
        width: "auto",
        maxWidth: "12rem",
        float: "right",
        background:"pink"
      }}
    >
      <div
        style={{
          background: "#2196f3",
          display: "grid",
          borderRadius: "5px",
          float: "right",
          width:"12rem",
          height:"14rem",
          boxShadow: "2px 2px 4px #666",
          justifyContent: "center",
        }}
      >
        <style>
          {
            "\
                button.drop{\
                  border-radius: 5px;\
                  background: white;\
                  box-shadow: none;\
                  color: #2196f3;\
                  border: solid #2196f3 2px;\
                  transition: 0.3s;\
                }\
                button.drop:hover{\
                  background: #2196f3;\
                  color: white;\
                  border: solid white 2px;\
                }\
                \
                "
          }
        </style>
        <button onClick={cerrarSesion}
          className="btn btn-secondary drop"
          style={{
            textTransform: "capitalize",
            fontWeight: "400",
            width:"8rem",
            marginTop: "6.5rem",
            marginBottom:"0.5rem",
            paddingTop:"0.6rem",
            paddingBottom:"0.6rem",
            fontSize:"0.8rem"
          }}
        >
          {" Cerrar Sesión"}
        </button>
        <button
          className="btn btn-secondary drop"
          onClick={toggleBiblio}
          style={{
            textTransform: "capitalize",
            fontWeight: "400",
            width:"8rem",
            marginBottom:"0.5rem",
            paddingTop:"0.6rem",
            paddingBottom:"0.6rem",
            fontSize:"0.8rem"
          }}
        >
          {"Cuentas de Usuario"}
        </button>
      </div>
    </div>
  );
}

export default DropdownUsuario;
