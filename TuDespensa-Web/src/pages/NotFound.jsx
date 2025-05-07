import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className="h-screen content-center justify-items-center grid items-start-">
      <img
        className="w-full md:w-1/3"
        src="../../public/images/404.svg"
        alt=""
      />
      <h1 className="font-bold text-2xl">Pagina no encontrada </h1>
      <Link className="bg-paleta3 rounded-md px-4 py-2 m-3" to="/">
        Inicio
      </Link>
    </div>
  );
}

export default NotFound;
