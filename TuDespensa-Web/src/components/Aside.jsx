import { FaUsers } from "react-icons/fa";
import { GrPlan } from "react-icons/gr";
import { TbReportAnalytics } from "react-icons/tb";
import { FaRobot } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { FaReceipt } from "react-icons/fa";
import { TbListNumbers } from "react-icons/tb";
import { BiLogOut } from "react-icons/bi";
import { BsFillBasketFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import React from "react";

export const Aside = () => {
  const { logout } = useAuth();
  return (
    <section className="bg-paleta4  w-1/5 flex flex-col p-4 gap-3 h-screen text-white">
      <div className="flex w-full justify-center">
        <img
          src="/images/IconoDespensa.svg"
          alt="logo Tu Despensa"
          className="w-12 h-12"
        />
        <span>
          <p className="text-[16px]">Tu</p>
          <p className="text-[16px]">Despensa</p>
        </span>
      </div>
      <ul className="flex flex-col gap-4">
        <li>
          <button className="flex gap-5 w-full px-2 items-center border rounded-2xl hover:bg-paleta5 hover:text-black">
            <FaUsers />
            <p>Lista de Usuarios</p>
          </button>
        </li>
        <li>
          <button className="flex gap-5 w-full px-2 items-center border rounded-2xl hover:bg-paleta5 hover:text-black">
            <TbListNumbers />
            <p>Lista de compras</p>
          </button>
        </li>
        <li>
          <button className="flex gap-5 w-full px-2 items-center border rounded-2xl hover:bg-paleta5 hover:text-black">
            <FaReceipt />
            <p>Recetas</p>
          </button>
        </li>
        <li>
          <button className="flex gap-5 w-full px-2 items-center border rounded-2xl hover:bg-paleta5 hover:text-black">
            <MdManageAccounts />
            <p>Perfil de usuario</p>
          </button>
        </li>
        <li>
          <button className="flex gap-5 w-full px-2 items-center border rounded-2xl hover:bg-paleta5 hover:text-black">
            <FaRobot />
            <p>Recetas con IA</p>
          </button>
        </li>
        <li>
          <button className="flex gap-5 w-full px-2 items-center border rounded-2xl hover:bg-paleta5 hover:text-black">
            <TbReportAnalytics />
            <p>Reportes</p>
          </button>
        </li>
        <li>
          <button className="flex gap-2 w-full px-2 items-center border rounded-2xl hover:bg-paleta5 hover:text-black">
            <GrPlan />
            <p>Planificador</p>
            <p>Nutricional</p>
          </button>
        </li>
      </ul>
      <button className="flex w-full mt-auto justify-center aling transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 ">
        <Link
          to="/"
          onClick={() => {
            logout();
          }}
          className="flex gap-2"
        >
          <BiLogOut className="size-6" />
          <p>Desconectarse</p>
        </Link>
      </button>
    </section>
  );
};
