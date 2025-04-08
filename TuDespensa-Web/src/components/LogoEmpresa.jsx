import React from "react";

export const LogoEmpresa = () => {
  return (
    <section className="flex flex-col px-8">
      <div className="flex">
        <img src="/images/losKollingas.svg" alt="" />
        <h1 className="text-2xl font-bold text-white">Los Kollingas</h1>
      </div>
      <div className="flex gap-2">
        {/* <button>
          <img src="/images/logoX.svg" alt="" />
        </button>
        <button>
          <img src="/images/logoInstagram.svg" alt="" />
        </button>
        <button>
          <img src="/images/logoYoutube.svg" alt="" />
        </button>
        <button>
          <img src="/images/logoLinkedin.svg" alt="" />
        </button> */}
      </div>
    </section>
  );
};
