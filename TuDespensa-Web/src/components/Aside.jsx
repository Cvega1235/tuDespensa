import { FaUsers } from "react-icons/fa";
import { GrPlan } from "react-icons/gr";
import { TbReportAnalytics } from "react-icons/tb";
import { FaRobot } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { FaReceipt } from "react-icons/fa";
import { TbListNumbers } from "react-icons/tb";
import { BiLogOut } from "react-icons/bi";
import { BsFillBasketFill } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import React from "react";

const navItems = [
  { icon: <FaUsers />, label: "Lista de Usuarios", to: "/usuarios" },
  { icon: <TbListNumbers />, label: "Lista de compras", to: "/compras" },
  { icon: <FaReceipt />, label: "Recetas", to: "/recetas" },
  { icon: <MdManageAccounts />, label: "Perfil de usuario", to: "/perfil" },
  { icon: <FaRobot />, label: "Recetas con IA", to: "/ia" },
  { icon: <TbReportAnalytics />, label: "Reportes", to: "/reportes" },
  {
    icon: <GrPlan />,
    label: "Planes Nutricionales",
    to: "/planes",
    border: "border-b",
  },
];

export const Aside = () => {
  const { logout } = useAuth();
  const location = useLocation();
  return (
    <section className="bg-paleta4 sticky top-0 group w-[64px] hover:w-1/5 transition-all duration-500 flex flex-col gap-3 h-screen text-white overflow-hidden">
      <div className="flex w-full justify-center mt-4 px-2 gap-2 items-center">
        <img
          src="/images/IconoDespensa.svg"
          alt="logo Tu Despensa"
          className="w-12 h-12"
        />
        <span className="hidden group-hover:flex flex-col text-[18px]">
          <p>Tu</p>
          <p>Despensa</p>
        </span>
      </div>

      <ul className="flex flex-col divide-y divide-white text-[18px] mt-2">
        {navItems.map(({ icon, label, to, border }, idx) => (
          <li key={idx} className={border || ""}>
            <Link
              to={to}
              className={`flex w-full h-12 px-2 items-center gap-2 transition-all group-hover:justify-start justify-center
                ${
                  location.pathname === to ||
                  (to === "/usuarios" &&
                    location.pathname === "/administracion")
                    ? "bg-paleta5 text-black"
                    : "hover:bg-paleta5 hover:text-black"
                }`}
            >
              <span className="text-2xl group-hover:text-base transition-all">
                {icon}
              </span>
              <p className="hidden group-hover:inline">{label}</p>
            </Link>
          </li>
        ))}
      </ul>

      <button className="flex w-full mt-auto mb-4 justify-center aling transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 ">
        <Link
          to="/"
          onClick={() => {
            logout();
          }}
          className="flex gap-2"
        >
          <BiLogOut className="size-8" />
          <p className="hidden group-hover:flex items-center">Desconectarse</p>
        </Link>
      </button>
    </section>
  );
};
