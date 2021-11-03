import "../App.css";
import logo from "../img/Logo_AdaptStorage_Negro.png";
import React, {Component} from "react";
import axios from 'axios';


class SubirArchivo extends Component{


  UPLOAD_ENDPOINT = 'http://localhost/AdaptStorage/subirArchivo.php';

  constructor(props) {
      super(props);
      this.state ={
        file:null
      }
      this.onSubmit = this.onSubmit.bind(this)
      this.onChange = this.onChange.bind(this)
      this.uploadFile = this.uploadFile.bind(this)
  }


  async onSubmit(e){
      e.preventDefault() 
      let res = await this.uploadFile(this.state.file);
      console.log(res.data);
  }

  onChange(e) {
      this.setState({file:e.target.files[0]})
  }

  async uploadFile(file){
      const formData = new FormData();
      formData.append('documento',file)
      return  await axios.post(this.UPLOAD_ENDPOINT, formData,{
          headers: {
              'content-type': 'multipart/form-data'
          }
      });
  }


render(){

    return(
<div>
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

        <form onSubmit={ this.onSubmit } className="form-inline">
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
                      onChange={ this.onChange }
                      type="file"
                      id="archivo"      
                    />
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

    ); 
                  }

}

export default SubirArchivo;