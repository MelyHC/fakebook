import React, { Fragment } from "react";
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';

const Login = () => {
  return (
    <Fragment>
      <header className="fakeback">
        <h1 className="fakefont mx-3 py-2 mb-0 text-white">fakebook</h1>
      </header>
      <div className="row m-0 px-3 align-items-center justify-content-center fakesize">
        <form className="card p-4 col-md-6 col-lg-4">
          <div className="form-group">
            <label for="email">Correo</label>
            <input type="email" className="form-control" id="email" placeholder="name@example.com" />
          </div>
          <div className="form-group">
            <label for="pass">Contraseña</label>
            <input type="password" className="form-control" id="pass" />
          </div>
          <button className="btn fakebtnlogin d-inline-block">Iniciar sesión</button>
        </form>
      </div>
    </Fragment>
  );
}

export default Login;