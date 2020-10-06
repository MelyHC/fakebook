import React from 'react';
import { BrowserRouter as Route, Switch, useRouteMatch, Link } from "react-router-dom";

const Posts = ({ }) => {
  const { path, url } = useRouteMatch();
  console.log(path, url)
  return (
    <section className="d-block">
      <article>
        mensaje por poner
      </article>
      <div>
        <h2>Topics</h2>
        <ul>
          <li>
            <Link to={`${url}/rendering`}>Rendering with React</Link>
          </li>
          <li>
            <Link to={`${url}/components`}>Components</Link>
          </li>
          <li>
            <Link to={`${url}/props-v-state`}>Props v. State</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path={path}>
            <h3>Please select a topic.</h3>
          </Route>
          <Route path={`${path}/:topicId`}>
            <h1>Hola mundo</h1>
          </Route>
        </Switch>
      </div>
    </section>
  )
}

export default Posts;