// utils/fechaSimulada.js

/**
 * Genera una fecha simulada que se reinicia en cada inicio de Render.
 * - Fecha base: 26/08/2025
 * - Hora: hora actual del servidor
 */
function generarFechaSimulada() {
  const base = process.env.FAKE_DATE
    ? new Date(process.env.FAKE_DATE)
    : new Date('2025-08-26T00:00:00Z'); // Fecha base fija

  const ahora = new Date();

  // Combina la fecha base con la hora actual
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
