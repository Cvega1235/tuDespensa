import { createContext, useContext, useEffect, useState } from "react";
import {
  loginRequest,
  verifyTokenRequest,
  registerRequest,
  registerAdminRequest,
} from "../api/auth";
import Cookies from "js-cookie";

export const AuthContext = createContext();
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);

  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      console.log(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      setErrors(error.response.data);
    }
  };
  const RegistrarUsuario = async (user) => {
    try {
      const res = await registerAdminRequest(user);
      console.log("Usuario creado por admin:", res.data);
      return res.data;
    } catch (error) {
      console.error("Error al registrar interesado:", error.response.data);
      throw error;
    }
  };

  // const signup = async (user) => {
  //   try {
  //     const res = await registerRequest(user);
  //     console.log(res.data);
  //     window.location.href = "/verify-email"; // Redirigir a la verificación
  //   } catch (error) {
  //     setErrors(error.response.data);
  //   }
  // };

  const signin = async (user) => {
    try {
      const res = await loginRequest(user);
      // console.log(res.data)
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response.data.message]);
    }
  };

  const logout = () => {
    Cookies.remove("token");
    setIsAuthenticated(false);
    setUser(null);
  };

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  useEffect(() => {
    async function checkLogin() {
      const cookies = Cookies.get();
      if (!cookies.token) {
        setIsAuthenticated(false);
        setLoading(false);
        return setUser(null);
      }
      try {
        const res = await verifyTokenRequest(cookies.token);
        if (!res.data) {
          setIsAuthenticated(false);
          setLoading(false);
          return;
        }
        setIsAuthenticated(true);
        setUser(res.data);
        setLoading(false);
      } catch (error) {
        setIsAuthenticated(false);
        setUser(null);
        setLoading(false);
      }
    }
    checkLogin();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        signup,
        signin,
        logout,
        loading,
        user,
        isAuthenticated,
        errors,
        RegistrarUsuario,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
