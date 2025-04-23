function buscarPareja() {
    const input = document.getElementById("inputInvitados").value;
    const resultadoDiv = document.getElementById("resultado");
  
    if (!input.trim()) {
      resultadoDiv.textContent = "Por favor, ingresa al menos un nombre.";
      return;
    }
  
    const invitados = input
      .split(",")
      .map(nombre => nombre.trim())
      .filter(nombre => nombre.length > 0)
      .sort();
  
    for (let i = 0; i < invitados.length - 1; i++) {
      if (
        invitados[i][0].toLowerCase() === invitados[i + 1][0].toLowerCase()
      ) {
        resultadoDiv.textContent = `✅ ${invitados[i]} y ${invitados[i + 1]} pueden sentarse juntos.`;
        return;
      }
    }
  
    resultadoDiv.textContent = "❌ No hay parejas con la misma inicial.";
  }  