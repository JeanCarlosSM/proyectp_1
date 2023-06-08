let grafica = null;

document.addEventListener("DOMContentLoaded", function() {
  const frecuenciaSelect = document.getElementById("frecuencia");
  const generarBtn = document.getElementById("generar-btn");
  const graficaElement = document.getElementById("grafica");

  generarBtn.addEventListener("click", function() {
    const frecuenciaSeleccionada = frecuenciaSelect.value;
    generarGrafica(frecuenciaSeleccionada, graficaElement);
  });
});

function generarGrafica(frecuencia, graficaElement) {
  let datos;
  let etiquetas;

  if (frecuencia === "diaria") {
    datos = [10, 15, 8, 12, 6, 9, 11];
    etiquetas = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
  } else if (frecuencia === "semanal") {
    datos = [45, 60, 55, 50, 65, 70, 55];
    etiquetas = ["Semana 1", "Semana 2", "Semana 3", "Semana 4", "Semana 5", "Semana 6", "Semana 7"];
  } else if (frecuencia === "mensual") {
    datos = [200, 180, 210, 190, 220, 240, 230];
    etiquetas = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];
  }

  if (grafica) {
    grafica.destroy();
  }

  grafica = new Chart(graficaElement, {
    type: "bar",
    data: {
      labels: etiquetas,
      datasets: [{
        label: "Número de Visitantes",
        data: datos,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}