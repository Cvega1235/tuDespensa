import { useForm } from "react-hook-form";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export const Registrar = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { signup, errors: signupErrors, isAuthenticated, user } = useAuth();
  const [captchaValue, setCaptchaValue] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) navigate("/administracion");
  }, [isAuthenticated, navigate]);
  const onSubmit = handleSubmit(async (data) => {
    if (!captchaValue) {
      alert("Porfavor completa el reCAPTCHA");
      return;
    }
    await signup({ ...data, captcha: captchaValue });
    reset();
    setCaptchaValue(null);
  });
  return (
    <>
      <Header />
      <article className="bg-paleta2 flex flex-col min-h-screen pt-21">
        <section className="flex md:h-130 justify-evenly flex-grow pb-8">
          <img
            className="rounded-4xl object-cover hidden md:flex md:w-1/2"
            src="/images/imageRegistrar.svg"
            alt=""
          />
          <div className="flex flex-col w-xl px-8 gap-4 justify-center ">
            <div className="flex flex-col items-center">
              <img src="/images/IconoDespensa.svg" className="w-16" alt="" />
              <h1 className="text-3xl text-center">Registrate en TuDespensa</h1>
            </div>
            <form className="flex flex-col" onSubmit={onSubmit}>
              <p>Nombre de Usuario</p>
              <input
                className="bg-white border rounded-[3px]"
                type="text"
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
              <div>
                <ReCAPTCHA
                  sitekey="6LcSyQQrAAAAAI6JS2BKgcLE-6T5jNBvITLLNidK"
                  onChange={setCaptchaValue}
                />
              </div>
              <button
                type="submit"
                className="bg-paleta4 text-white p-2 rounded-2xl"
              >
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
    </>
  );
};
