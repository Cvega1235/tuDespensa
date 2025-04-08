import React from "react";
import { Aside } from "../components/Aside";
import { HeaderProfile } from "../components/HeaderProfile";
import { useState } from "react";
import { InicioAdministrador } from "../components/InicioAdministrador";
export const Administracion = () => {
  const [isAsideVisible, setIsAsideVisible] = useState(true);
  const interruptorAside = () => {
    setIsAsideVisible(!isAsideVisible);
  };
  return (
    <div className="flex">
      {isAsideVisible && <Aside />}
      <div className="bg-paleta2 h-screen w-full">
        <HeaderProfile interruptorAside={interruptorAside} />
        <InicioAdministrador />
      </div>
    </div>
  );
};
