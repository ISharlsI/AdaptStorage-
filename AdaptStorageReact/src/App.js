import logo from "./img/Logo_AdaptStorage.jpg";
import "./App.css";
import React, { Fragment, Component } from "react";
import Login from "./components/Login";
import Registro from "./components/Registro";

class App extends Component {
  state = {
    visible: true
  }

  render() {

    const toggleLogin = () => {
      this.setState({visible: !this.state.visible});
    }

    return (
      <Fragment>
        {/* #-------------------------- NAVBAR ------------------------- */}

        <nav
          className="navbar navbar-expand-lg navbar-dark bg-primary"
          style={{ display: "flex" }}
        >
          <div className="container-fluid" style={{ justifyContent: "center" }}>
            <img src={logo} alt="" style={{ height: "100px" }} />
          </div>
        </nav>
        
        {this.state.visible ? <Login mostrarRegistro = {toggleLogin}/> : <Registro mostrarLogin = {toggleLogin} />}

      </Fragment>
    );
  }
}

export default App;
