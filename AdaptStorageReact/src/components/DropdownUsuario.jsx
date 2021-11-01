import React from "react";

export default function DropdownUsuario({toggleBiblio}) {
  return (
    <div
      className="container-fluid"
      style={{
        position: "absolute",
        right:"0px",
        zIndex: 1,
        width: "auto",
        maxWidth: "16rem",
        float: "right",
      }}
    >
      <div
        style={{
          background: "#2196f3",
          display: "grid",
          borderRadius: "5px",
          float: "right",
          width:"10rem",
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
        <button
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
