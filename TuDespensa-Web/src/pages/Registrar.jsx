import { useForm } from "react-hook-form";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
export const Registrar = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { signup, errors: signupErrors, isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) navigate("/inicio");
  }, [isAuthenticated, navigate]);
  const onSubmit = handleSubmit(async (data) => {
    await signup(data);
    reset();
  });
  return (
    <article className="bg-paleta2">
      <Header />
      <section className="flex h-130 justify-evenly">
        <img className="rounded-2xl" src="/images/imageRegistrar.svg" alt="" />
        <div className="flex flex-col w-xl px-8 gap-4 justify-center ">
          <h1 className="text-3xl text-center">Registrarse</h1>
          <form className="flex flex-col" onSubmit={onSubmit}>
            <p>Nombre de Usuario</p>
            <input
              className="bg-white border rounded-[3px]"
              type="text"
              name="nombreusuario"
              {...register("username", {
                required: true,
              })}
              placeholder="Nombre de Usuario"
            />
            {errors.username && (
              <p className="text-red-500 text-sm">
                Nombre de usuario es requerido
              </p>
            )}
            <p>Correo Electronico</p>
            <input
              className="bg-white border rounded-[3px]"
              type="email"
              {...register("email", {
                required: true,
              })}
              placeholder="Correo Electronico"
            />{" "}
            {errors.email && (
              <p className="text-red-500 text-sm">
                Correo electronico es requerido
              </p>
            )}
            <p>Contraseña</p>
            <input
              className="bg-white border rounded-[3px]"
              type="password"
              {...register("password", { required: true })}
            />{" "}
            {errors.password && (
              <p className="text-red-500 text-sm">Contraseña es requerido</p>
            )}
            <button type="submit" className="bg-paleta1 p-2 rounded-2xl">
              Registrarse
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
            <p>Tienes una cuenta</p>
            <Link to="/ingresar">Ingresar</Link>
          </span>
        </div>
      </section>
      <Footer />
    </article>
  );
};
