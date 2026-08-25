function validarYExportar(radioGroups) {
  // Limpiar resaltados previos
  document.querySelectorAll('.error-row').forEach(el => el.classList.remove('error-row'));

  // 1. Validar inputs requeridos de texto/fecha
  const inputsTexto = document.querySelectorAll('input[id^="req-"]');
  let faltanTextos = false;

  inputsTexto.forEach(input => {
    if (!input.value.trim()) {
      input.style.border = "1px solid red";
      faltanTextos = true;
    } else {
      input.style.border = "none";
    }
  });

  // 2. Validar radios
  const sinResponder = [];

  radioGroups.forEach(groupName => {
    const checked = document.querySelector(`input[name="${groupName}"]:checked`);
    if (!checked) {
      sinResponder.push(groupName);
      const fila = document.getElementById(`row-${groupName}`);
      if (fila) fila.classList.add('error-row');
    }
  });

  if (faltanTextos || sinResponder.length > 0) {
    alert("⚠️ Hay campos o puntos obligatorios sin responder. Se han resaltado en la pantalla.");
    return;
  }

  // 3. Imprimir si pasa las validaciones
  window.print();
}
