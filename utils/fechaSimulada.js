// utils/fechaSimulada.js

function generarFechaSimulada() {
  const base = process.env.FAKE_DATE
    ? new Date(process.env.FAKE_DATE)
    : new Date('2025-08-27T14:00:00Z'); // Fecha base predeterminada

  const ahora = new Date();

  const fechaSimulada = new Date(
    base.getFullYear(),
    base.getMonth(),
    base.getDate(),
    ahora.getHours(),
    ahora.getMinutes(),
    ahora.getSeconds()
  );

  return fechaSimulada;
}

module.exports = { generarFechaSimulada };
