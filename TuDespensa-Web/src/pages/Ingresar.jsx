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
    <article>
      <Header />
      <section className="flex h-130 justify-evenly">
        <img className="rounded-2xl" src="/images/imageIngresar.svg" alt="" />
        <div className="flex flex-col w-xl px-8 gap-4 justify-center ">
          <h1 className="text-3xl text-center">Ingresar</h1>
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
            {errors.email && <p className="text-red-500">Email es requerido</p>}
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
  );
};
