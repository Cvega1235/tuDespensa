import React from "react";
import Sidebar from "../components/Sidebar";

function Informes_reportes() {
  return (
    <>
      <article className="flex">
        <Sidebar />
        <div>
          <h1>Informes y Reportes</h1>
          <p>
            En esta sección podrás visualizar los informes y reportes de tu
            despensa.
          </p>
        </div>
      </article>
    </>
  );
}

export default Informes_reportes;
