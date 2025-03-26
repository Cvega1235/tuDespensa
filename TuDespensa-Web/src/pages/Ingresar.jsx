import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
export const Ingresar = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signin, errors: signinErrors, isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  const onSubmit = handleSubmit((data) => {
    signin(data);
  });
  useEffect(() => {
    if (isAuthenticated) navigate("/inicio");
  }, [isAuthenticated]);
  return (
    <>
      <Header />
      <article className="bg-paleta2 flex flex-col min-h-screen pt-21 ">
        <section className="flex md:h-130 justify-evenly flex-grow pb-8">
          <img
            className="object-cover rounded-4xl hidden md:flex md:w-1/2"
            src="/images/imageIngresar.svg"
            alt=""
          />
          <div className="flex flex-col w-xl px-8 gap-4 justify-center ">
            <div className="flex flex-col items-center">
              <img src="/images/IconoDespensa.svg" className="w-16" alt="" />
              <h1 className="text-3xl text-center">Bienvenido a TuDespensa</h1>
            </div>
            <form className="flex flex-col" onSubmit={onSubmit}>
              <p>Correo Electronico</p>
              <input
                className="bg-white border rounded-[3px]"
                type="email"
                name=""
                id="email"
                {...register("email", { required: true })}
                placeholder="example@gmail.com"
              />
              {errors.email && (
                <p className="text-red-500">Email es requerido</p>
              )}
              <p>Contraseña</p>
              <input
                className="bg-white border rounded-[3px]"
                type="password"
                name=""
                id="password"
                {...register("password", { required: true })}
                placeholder="password"
              />
              {errors.password && (
                <p className="text-red-500">Password es requerido</p>
              )}
              <button className="bg-paleta1 p-2 rounded-2xl" type="submit">
                Ingresar
              </button>
            </form>
            <p className="text-center">o continua con...</p>
            <div className="flex">
              <button>g</button>
              <button>f</button>
              <button>w</button>
              <button>i</button>
            </div>
            <span className="flex gap-5 justify-center">
              <p>¿No tienes Cuenta?</p>
              <Link to="/registrar">Registrarse</Link>
            </span>
          </div>
        </section>
        <Footer />
      </article>
    </>
  );
};
