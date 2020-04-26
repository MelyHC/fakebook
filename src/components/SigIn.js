import React from 'react';

const SignIn = () => {
  return (
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
  )
}

export default SignIn;