import React from 'react';

const SignUp = ({ register, validate }) => {

  return (
    <div className="row m-0 px-3 align-items-center justify-content-center fakesize">
      <form className="card p-4 col-md-6 col-lg-4" onSubmit={(e) => { register(e); validate(e); }} >
        <div className="form-group">
          <label htmlFor="name">Nombre completo</label>
          <input type="text" className="form-control" id="name" placeholder="Juan Perez" />
          <span>{}</span>
        </div>
        <div className="form-group">
          <label htmlFor="user-name">Nombre de usuario</label>
          <input type="text" className="form-control" id="user-name" placeholder="JuanPz" />
          <span>{}</span>
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo</label>
          <input type="email" className="form-control" id="email" placeholder="name@example.com" />
          <span>{}</span>
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input type="password" className="form-control" id="password" />
          <span>{}</span>
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirmar contraseña</label>
          <input type="password" className="form-control" id="confirm-password" />
          <span>{}</span>
        </div>
        <button className="btn fakebtnlogin d-inline-block">Registrarse</button>
      </form>
    </div>
  )
}

export default SignUp;