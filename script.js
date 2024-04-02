// function mostrarHoraSeleccionada(enlace) {
//     const horaSeleccionada = enlace.getAttribute("data-hora");
//     const texto = `Has seleccionado la hora: ${horaSeleccionada}`;
//     document.getElementById("horaSeleccionadaTexto").textContent = texto;
//   }
  
function mostrarHoraSeleccionada(enlace) {
  const horaSeleccionada = enlace.getAttribute("data-hora");
  localStorage.setItem("horaSeleccionada", horaSeleccionada);
  window.location.href = "confirmas.html";
}

const horaSeleccionada = localStorage.getItem("horaSeleccionada");
if (horaSeleccionada) {
    document.getElementById("horaSeleccionadaTexto").textContent = `Dia y horario: ${horaSeleccionada}`;
} else {
    document.getElementById("horaSeleccionadaTexto").textContent = "No se ha seleccionado ninguna hora.";
}