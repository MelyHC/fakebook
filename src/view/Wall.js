import React, { Fragment } from "react";

const Wall = ({ nameUser = "Mely" }) => {
  return (
    <Fragment>

      <div className="row m-0 p-0 justify-content-center">
        <form className="card col-md-6 col-lg-5 p-0">
          <p class="card-header p-2 fakeposthead">
            Crear Publicación
          </p>
          <div className="form-group my-2">
            <textarea className="form-control rounded-0" rows="3" id="post" placeholder={`¿Qué estás pensando, ${nameUser} ?`} />
          </div>
          <div className="form-group">
            <select className="form-control rounded-0">
              <option selected>Público</option>
              <option>Amigos</option>
              <option>Solo yo</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary mx-2 mb-2">Publicar</button>
        </form>
      </div>
    </Fragment>
  )
}

export default Wall;