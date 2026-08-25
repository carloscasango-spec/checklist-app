function validarYExportar(radioGroups) {
  // 1. Limpiar resaltados previos
  const erroresPrevios = document.querySelectorAll('.error-row');
  erroresPrevios.forEach(function(el) {
    el.classList.remove('error-row');
  });

  // 2. Validar inputs requeridos de texto o fecha
  const inputsTexto = document.querySelectorAll('input[id^="req-"]');
  let faltanTextos = false;

  inputsTexto.forEach(function(input) {
    if (!input.value.trim()) {
      input.style.border = "1px solid red";
      faltanTextos = true;
    } else {
      input.style.border = "none";
    }
  });

  // 3. Validar radio buttons opcionales por grupo
  const sinResponder = [];

  if (Array.isArray(radioGroups)) {
    radioGroups.forEach(function(groupName) {
      const checked = document.querySelector('input[name="' + groupName + '"]:checked');
      if (!checked) {
        sinResponder.push(groupName);
        const fila = document.getElementById('row-' + groupName);
        if (fila) {
          fila.classList.add('error-row');
        }
      }
    });
  }

  // 4. Mostrar alerta si faltan campos
  if (faltanTextos || sinResponder.length > 0) {
    alert("⚠️ Hay campos o puntos obligatorios sin responder. Se han resaltado en la pantalla.");
    return;
  }

  // 5. Imprimir/Exportar si todo es correcto
  window.print();
}
