function Nota_final() {

  const nota1 = parseFloat(document.getElementById('Nota1').value);
  const nota2 = parseFloat(document.getElementById('Nota2').value);
  const nota3 = parseFloat(document.getElementById('Nota3').value);
  const resultado = document.getElementById('resultado');

  if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
      resultado.textContent = "Por favor, ingrese las 3 notas válidas.";
      return;
  }

  const promedio = (nota1 + nota2 + nota3) / 3;

  resultado.textContent = `La nota final es: ${promedio}`;
}