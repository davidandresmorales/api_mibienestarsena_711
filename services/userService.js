const db = require("../models");
const { generarFechaSimulada } = require("../utils/fechaSimulada");

const getAllUsers = async () => {
  return await db.User.findAll({
    include: { model: db.Rol, required: false, as: "rol", attributes: ["id", "name"] }
  });
};

const getUser = async (id) => {
  return await db.User.findByPk(id, {
    include: { model: db.Rol, required: false, as: "rol", attributes: ["id", "name"] }
  });
};

const createUser = async (userData) => {
  const fecha = generarFechaSimulada();
  return await db.User.create({ ...userData, createdAt: fecha, updatedAt: fecha });
};

const updateUser = async (id, userData) => {
  const fechaActualizacion = generarFechaSimulada();
  const updatedUser = await db.User.update(
    { ...userData, updatedAt: fechaActualizacion },
    { where: { id } }
  );
  return updatedUser;
};

const deleteUser = async (id) => {
  return await db.User.destroy({ where: { id } });
};

module.exports = { getAllUsers, getUser, createUser, updateUser, deleteUser };
