import { GrStatusGoodSmall } from "react-icons/gr";
import React, { useState, useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import {
  updateUserRequest,
  deleteUserRequest,
  getUsersRequest,
} from "../api/users";
import { registerAdminRequest } from "../api/auth";
import { RegistrarUsuario } from "../pages/RegistrarUsuarios";

export const InicioAdministrador = () => {
  const [mostrarPopup, setMostrarPopup] = useState(false);
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [userToEdit, setUserToEdit] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("Todos");
  const [filterStatus, setFilterStatus] = useState("Todos");

  // Filtrar por texto y rol
  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesRole = filterRole === "Todos" || user.role === filterRole;

    const matchesStatus =
      filterStatus === "Todos" ||
      (filterStatus === "Activo" && user.status === true) ||
      (filterStatus === "Inactivo" && user.status === false);

    return matchesSearch && matchesRole && matchesStatus;
  });

  const usersPerPage = 10;
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await getUsersRequest();
      setUsers(res.data);
      console.log("Usuarios actualizados desde el backend", res.data);
    } catch (err) {
      console.error("Error al obtener usuarios:", err);
    }
  };

  const handleEdit = (user) => {
    setUserToEdit(user);
    setMostrarPopup(true);
  };

  const handleDelete = async (userId) => {
    if (!userId) {
      console.error("ID de usuario no válido:", userId);
      return;
    }

    try {
      await deleteUserRequest(userId);
      console.log("Usuario eliminado");
      await fetchUsers();
    } catch (err) {
      console.error("Error al eliminar el usuario", err);
    }
  };

  const handleSave = (userData) => {
    if (userToEdit && userToEdit._id) {
      updateUserRequest(userToEdit._id, userData)
        .then((res) => {
          setUsers(
            users.map((user) =>
              user._id === userToEdit._id ? { ...user, ...userData } : user
            )
          );
          console.log("Usuario actualizado", res);
          setMostrarPopup(false);
          setUserToEdit(null);
        })
        .catch((err) => {
          console.error("Error al actualizar el usuario", err);
        });
    } else {
      registerAdminRequest(userData)
        .then(async (res) => {
          console.log("Usuario registrado", res.data);
          await fetchUsers();
          setMostrarPopup(false);
        })
        .catch((err) => {
          console.error("Error al registrar el usuario", err);
        });
    }
  };

  return (
    <article className="flex p-2 flex-col h-full ">
      <div>
        <div className="overflow-y-auto min-h-[470px]">
          <div className="flex flex-col md:flex-row justify-between mb-4 gap-4">
            {/* Buscador por nombre o correo */}
            <input
              type="text"
              placeholder="Buscar por nombre o correo"
              className="border border-gray-300 rounded p-2 w-full md:w-1/2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            {/* Filtro por rol */}
            <select
              className="border border-gray-300 rounded p-2 w-full md:w-1/4"
              value={filterRole}
              onChange={(e) => setFilterRole(e.target.value)}
            >
              <option value="Todos">Todos los roles</option>
              <option value="Usuario">Usuario</option>
              <option value="Administrador">Administrador</option>
              {/* Agregá más roles si tenés */}
            </select>
            <select
              className="border border-gray-300 rounded p-2 w-full md:w-1/4"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="Todos">Todos los estados</option>
              <option value="Activo">Activo</option>
              <option value="Inactivo">Inactivo</option>
            </select>
          </div>

          <table className="table-auto w-full border border-gray-300 p-4 ">
            <thead className="bg-gray-100">
              <tr>
                <th className="border  py-2">N°</th>
                <th className="border px-4 py-2">Nombre</th>
                <th className="border px-4 py-2">Gmail</th>
                <th className="border px-4 py-2">Rol</th>
                <th className="border px-4 py-2">Fecha de creación</th>
                <th className="border px-0 py-2">Edit/Elim</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((user, idx) => (
                <tr key={idx} className="even:bg-blue-50">
                  <td className="border  py-2 text-center">
                    {idx + 1 + (currentPage - 1) * usersPerPage}
                  </td>
                  <td className="border px-4 py-2">
                    <span className="flex items-center gap-2">
                      {user.status ? (
                        <GrStatusGoodSmall className="text-green-600" />
                      ) : (
                        <GrStatusGoodSmall className="text-red-600" />
                      )}
                      {user.username}
                    </span>
                  </td>
                  <td className="border border-black px-4 py-2 text-blue-600 hover:underline">
                    <a href={`mailto:${user.username}`} target="_blank">
                      {user.email}
                    </a>
                  </td>
                  <td className="border px-4 py-2">{user.role}</td>
                  <td className="border px-4 py-2">
                    {user.createdAt
                      ? new Date(user.createdAt).toLocaleDateString()
                      : "No disponible"}
                  </td>
                  <td className="border px-4 py-2 text-center">
                    <button
                      className="text-blue-500 hover:scale-150 mr-2"
                      onClick={() => handleEdit(user)}
                    >
                      <BiEditAlt />
                    </button>
                    <button
                      className="text-red-500 hover:scale-150"
                      onClick={() => handleDelete(user._id)}
                    >
                      <AiFillDelete />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center items-center space-x-2 mt-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-2 py-1 rounded ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <div className="flex justify-end align-bottom">
          <button
            className="bg-paleta4 text-white w-20 p-2 rounded-2xl"
            onClick={() => setMostrarPopup(true)}
          >
            Añadir
          </button>
          {mostrarPopup && (
            <RegistrarUsuario
              user={userToEdit}
              onClose={() => {
                setMostrarPopup(false);
                setUserToEdit(null);
              }}
              onSave={handleSave}
            />
          )}
        </div>
      </div>
    </article>
  );
};
