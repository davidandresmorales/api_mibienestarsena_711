const db = require('../models');
const { generarFechaSimulada } = require('../utils/fechaSimulada');

const getAllCategories = async () => {
  const categories = await db.Categorie.findAll();
  if (!categories || categories.length === 0)
    throw { status: 404, message: "No se encontraron categorías" };
  return categories;
};

const getCategorie = async (id) => {
  const categorie = await db.Categorie.findByPk(id);
  if (!categorie) throw { status: 404, message: "Categoría no encontrada" };
  return categorie;
};

const createCategorie = async (nombre, descripcion, imagen) => {
  if (!nombre) throw { status: 400, message: "El nombre es requerido" };
  const fecha = generarFechaSimulada();
  return await db.Categorie.create({ nombre, descripcion, imagen, createdAt: fecha, updatedAt: fecha });
};

const updateCategorie = async (id, nombre, descripcion, imagen) => {
  const fechaActualizacion = generarFechaSimulada();
  const [updatedRows] = await db.Categorie.update(
    { nombre, descripcion, imagen, updatedAt: fechaActualizacion },
    { where: { id } }
  );
  if (updatedRows === 0) throw { status: 404, message: "Categoría no encontrada" };
  return { id, nombre, descripcion, imagen };
};

const deleteCategorie = async (id) => {
  const deletedRows = await db.Categorie.destroy({ where: { id } });
  if (deletedRows === 0) throw { status: 404, message: "Categoría no encontrada" };
  return { message: "Categoría eliminada correctamente" };
};

module.exports = { getAllCategories, getCategorie, createCategorie, updateCategorie, deleteCategorie };
