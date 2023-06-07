
var estadoChecklists = {
  checklist1: {
    seleccionado: false,
    porcentaje: 10,
  },
  checklist2: {
    seleccionado: false,
    porcentaje: 10,
  },
  checklist3: {
    seleccionado: false,
    porcentaje: 10,
  },
  checklist4: {
    seleccionado: false,
    porcentaje: 10,
  },
  checklist5: {
    seleccionado: false,
    porcentaje: 10,
  },
  total: 0,
  activado: true,
};

function actualizarBateria() {
  var nivel = document.getElementById("nivel");
  var porcentajeTotal = 0;
  for (var checklist in estadoChecklists) {
    if (
      checklist !== "total" &&
      checklist !== "activado" &&
      estadoChecklists[checklist].seleccionado
    ) {
      porcentajeTotal += estadoChecklists[checklist].porcentaje;
    }
  }
  nivel.style.width = porcentajeTotal + "%";
  estadoChecklists.total = porcentajeTotal;
}

function actualizarEstadoChecklist(checklist, porcentaje) {
  if (estadoChecklists.activado) {
    estadoChecklists[checklist].seleccionado =
      !estadoChecklists[checklist].seleccionado;
    if (estadoChecklists[checklist].seleccionado) {
      estadoChecklists[checklist].porcentaje = porcentaje;
    } else {
      estadoChecklists[checklist].porcentaje = 0;
    }
    actualizarBateria();
  }
}

function cambiarEstadoCheckboxes() {
  var botonesChecklists = document.querySelectorAll("input[type='checkbox']");
  if (estadoChecklists.activado) {
    for (var i = 0; i < botonesChecklists.length; i++) {
      botonesChecklists[i].disabled = true;
    }
    estadoChecklists.activado = false;
    document.getElementById("boton-activar").innerHTML = "Desactivar";
  } else {
    for (var i = 0; i < botonesChecklists.length; i++) {
      botonesChecklists[i].disabled = false;
    }
    estadoChecklists.activado = true;
    actualizarBateria();
    document.getElementById("boton-activar").innerHTML = "Activar";
  }
}
