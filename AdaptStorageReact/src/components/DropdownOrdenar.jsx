import React, { useState } from "react";

const DropdownOrdenar = ({setOrdenar, toggleDropdownOrdenar}) => {

  const handleClick = (event) => {
    setOrdenar(event.target.id);
    toggleDropdownOrdenar();
  };

  return (
    <div
      style={{
        position: "absolute",
        width: "8rem",
        right: "0",
        paddingTop: "2.8rem",
        marginRight: "3.5rem",
        background: "white",
        display: "grid",
        boxShadow: "1px 1px 4px #666",
        justifyContent: "center",
        border: "solid 3px #444",
        borderRadius: "5px",
        zIndex: 1,
      }}
    >
      <div
        style={{
          display: "grid",
          float: "right",
          justifyContent: "center",
        }}
      >
        <style>
          {
            "\
                button.drop{\
                    border-radius: 0px;\
                    background: white;\
                    box-shadow: none;\
                    color: #444;\
                    transition: 0.2s;\
                }\
                button.drop:hover{\
                    background: #444;\
                    color: white;\
                }\
                "
          }
        </style>
        <button
          onClick={handleClick}
          id="Nombre"
          className="btn btn-secondary drop"
          style={{
            textTransform: "capitalize",
            fontWeight: "400",
            fontSize: "0.8rem",
            width: "7.7rem",
          }}
        >
          {"Nombre"}
        </button>
        <button
          onClick={handleClick}
          id="Tipo"
          className="btn btn-secondary drop"
          style={{
            textTransform: "capitalize",
            fontWeight: "400",
            fontSize: "0.8rem",
            width: "7.7rem",
          }}
        >
          {"Tipo"}
        </button>
        <button
          onClick={handleClick}
          id="Seguridad"
          className="btn btn-secondary drop"
          style={{
            textTransform: "capitalize",
            fontWeight: "400",
            fontSize: "0.8rem",
            width: "7.7rem",
          }}
        >
          {"Seguridad"}
        </button>
        <button
          onClick={handleClick}
          id="Fecha"
          className="btn btn-secondary drop"
          style={{
            textTransform: "capitalize",
            fontWeight: "400",
            fontSize: "0.8rem",
            width: "7.7rem",
          }}
        >
          {"Fecha"}
        </button>
        <button
          onClick={handleClick}
          id="Tamaño"
          className="btn btn-secondary drop"
          style={{
            textTransform: "capitalize",
            fontWeight: "400",
            fontSize: "0.8rem",
            width: "7.7rem",
          }}
        >
          {"Tamaño"}
        </button>
        <button
          onClick={handleClick}
          id="Propietario"
          className="btn btn-secondary drop"
          style={{
            textTransform: "capitalize",
            fontWeight: "400",
            fontSize: "0.8rem",
            width: "7.7rem",
          }}
        >
          {"Propietario"}
        </button>
      </div>
    </div>
  );
};

export default DropdownOrdenar;
