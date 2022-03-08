import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const LayoutR = () => {
  return (
    <main>
      <nav>
        <Link to="/">Inicio</Link> | {" "}
        <Link to="/filmAndTelevision">Cine y Televisión</Link> | {" "}
        <Link to="/generalCulture">Cultura General</Link> | {" "}
        <Link to="/science">Ciencia</Link> | {" "}
      </nav>
      <section>
        <Outlet/>
      </section>
    </main>
  )
}

export default LayoutR