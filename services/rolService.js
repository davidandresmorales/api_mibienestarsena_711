const db = require("../models");
const { generarFechaSimulada } = require("../utils/fechaSimulada");

const getAllRols = async () => {
  return await db.Rol.findAll();
};

const getRol = async (id) => {
  return await db.Rol.findByPk(id);
};

const createRol = async (name) => {
  const fecha = generarFechaSimulada();
  return await db.Rol.create({ name, createdAt: fecha, updatedAt: fecha });
};

const updateRol = async (id, name) => {
  const fechaActualizacion = generarFechaSimulada();
  return await db.Rol.update(
    { name, updatedAt: fechaActualizacion },
    { where: { id } }
  );
};

const deleteRol = async (id) => {
  return await db.Rol.destroy({ where: { id } });
};

module.exports = { getAllRols, getRol, createRol, updateRol, deleteRol };
