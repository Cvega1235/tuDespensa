import { BiLogOut } from "react-icons/bi";
import { AiFillSetting } from "react-icons/ai";
import { MdManageAccounts } from "react-icons/md";
import { useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { CgFormatJustify } from "react-icons/cg";
import React from "react";

export const HeaderProfile = ({ interruptorAside }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex h-16 w-full justify-between p-4 bg-white">
      <button
        className="flex justify-items-center items-center"
        onClick={interruptorAside}
      >
        <CgFormatJustify className="size-8" />
      </button>
      <div>
        <button onClick={() => setIsOpen(!isOpen)}>
          <span className="flex items-center gap-4 h-auto hover:bg-gray-200 px-4 rounded-2xl">
            <p className="text-2xl">Bienvenido</p>
            <BiUserCircle className="size-8" />
          </span>
        </button>
        {isOpen && (
          <div className="bg-white">
            <ul className="flex flex-col">
              <li className="flex items-center gap-2 hover:bg-gray-200 p-2">
                <MdManageAccounts />
                <p>Perfil</p>
              </li>
              <li className="flex items-center gap-2 hover:bg-gray-200 p-2">
                <AiFillSetting />
                <p>Configuracion</p>
              </li>
              <li className="flex items-center gap-2 hover:bg-gray-200 p-2">
                <BiLogOut />
                <p>Desconectarse</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
