import { BsInstagram } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { RxTwitterLogo } from "react-icons/rx";
import { GrMapLocation } from "react-icons/gr";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import React from "react";
import { LogoEmpresa } from "./LogoEmpresa";
import { Link } from "react-router-dom";
import { FaAppStore, FaAppStoreIos, FaGooglePlay } from "react-icons/fa";
export const Footer = () => {
  return (
    <section className="bg-paleta1 grid grid-rows-4 md:grid-cols-3 md:grid-rows-1 justify-items-center pt-5 pb-5">
      <div className="flex flex-col justify-center">
        <div className="flex items-center justify-items-center py-3">
          <img className="md:w-14" src="/images/IconoDespensa.svg" alt="" />
          <h1 className="text-white font-bold text-3xl md:text-4xl">
            Tu Despensa
          </h1>
        </div>
        <a href="https://los-kollingas.netlify.app/" target="_blank">
          <LogoEmpresa />
        </a>
      </div>
      <div className="gap-2 flex flex-col">
        <h1 className="text-descripcion text-xl underline">Contactanos</h1>
        <a
          className="text-white hover:underline flex gap-1"
          href="mailto:cvegaa@est.emi.edu.bo? Subject=Hola%20quiero%20realizar%20una%20consulta"
          target="_blank"
        >
          <AiOutlineMail className="text-white size-6" />
          Email: contacto@loskollingas.com
        </a>

        <a
          className="text-white hover:underline flex gap-1"
          href="https://wa.me/59177572515"
          target="_blank"
        >
          <BsWhatsapp className="size-6" />
          Teléfono: +591 76543210
        </a>
        <a
          className="text-white hover:underline flex gap-1"
          href="https://maps.app.goo.gl/byWRxhUh4v2d7pmC7"
          target="_blank"
        >
          <GrMapLocation className="size-6" />
          Direccion: Irpavi, La paz, Bolivia
        </a>
      </div>
      <div className="text-white gap-2 flex flex-col">
        <h1 className="text-descripcion text-xl underline">Siguenos</h1>
        <a href="https://x.com/" className="flex gap-1" target="_blank">
          <RxTwitterLogo className="size-6" />
          Twitter
        </a>
        <a
          href="https://bo.linkedin.com/"
          className="flex gap-1"
          target="_blank"
        >
          <AiFillLinkedin className="size-6" />
          Linkedin
        </a>
        <a
          href="https://www.facebook.com/"
          className="flex gap-1"
          target="_blank"
        >
          <AiFillFacebook className="size-6" />
          Facebook
        </a>
        <a
          href="https://www.instagram.com/"
          className="flex gap-1"
          target="_blank"
        >
          <BsInstagram className="size-6" />
          Instagram
        </a>
      </div>
      {/* <div>
        <h1 className="text-descripcion text-xl underline">Redes Sociales</h1>
      </div> */}
    </section>
  );
};
