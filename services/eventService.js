const db = require('../models');
const { generarFechaSimulada } = require('../utils/fechaSimulada');

const getAllEvents = async () => {
  return await db.Event.findAll({
    include: [
      { model: db.Categorie, as: 'category', attributes: ['id','nombre','descripcion'] },
      { model: db.User, as: 'user', attributes: ['id', 'username', 'email'] }
    ]
  });
};

const getEvent = async (id) => {
  return await db.Event.findByPk(id, {
    include: [
      { model: db.Categorie, as: 'category', attributes: ['id','nombre','descripcion'] },
      { model: db.User, as: 'user', attributes: ['id', 'username', 'email'] }
    ]
  });
};

const createEvent = async (payload) => {
  const { name, description, categoryId, state, maxCapacity, userId } = payload;

  const user = await db.User.findByPk(userId);
  if (!user) throw { status: 400, message: "El usuario especificado no existe" };

  const category = await db.Categorie.findByPk(categoryId);
  if (!category) throw { status: 400, message: "La categoría especificada no existe" };

  const fecha = generarFechaSimulada();

  return await db.Event.create({ 
    name, description, categoryId, state, maxCapacity, userId,
    startDate: fecha,
    endDate: fecha,
    createdAt: fecha,
    updatedAt: fecha
  });
};

const updateEvent = async (id, payload) => {
  const fechaActualizacion = generarFechaSimulada();
  const [updatedRows] = await db.Event.update(
    { ...payload, updatedAt: fechaActualizacion },
    { where: { id } }
  );
  return updatedRows;
};

const deleteEvent = async (id) => {
  return await db.Event.destroy({ where: { id } });
};

module.exports = { getAllEvents, getEvent, createEvent, updateEvent, deleteEvent };
