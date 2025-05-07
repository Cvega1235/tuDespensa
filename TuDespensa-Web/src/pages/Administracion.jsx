import React from "react";
import { Aside } from "../components/Aside";
import { HeaderProfile } from "../components/HeaderProfile";
import { useState } from "react";
import { InicioAdministrador } from "../components/InicioAdministrador";
import { Outlet } from "react-router-dom";
export const Administracion = () => {
  const [isAsideVisible, setIsAsideVisible] = useState(true);
  const interruptorAside = () => {
    setIsAsideVisible(!isAsideVisible);
  };
  return (
    <div className="flex h-screen overflow-hidden">
      {isAsideVisible && <Aside />}
      <div className="bg-paleta2 flex-1 flex flex-col">
        <HeaderProfile interruptorAside={interruptorAside} />
        <div className="flex-1 overflow-y-auto">
          {/* <InicioAdministrador /> */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};
