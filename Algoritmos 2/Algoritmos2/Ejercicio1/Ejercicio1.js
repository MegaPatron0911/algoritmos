function numeropar(){
  const numero = document.getElementById("numero").value;
  const resultado = document.getElementById("resultado");

  if (numero === "") {
      resultado.textContent = "Por favor, ingresa un número.";
      return;
  }

  const numeroConvertido = parseInt(numero, 10);

  if (isNaN(numeroConvertido)) {
      resultado.textContent = "El valor ingresado no es un número válido.";
      return;
  }

  if (numeroConvertido % 2 === 0) {
      resultado.textContent = "El número que introdujiste es " + numeroConvertido + " y es par.";
  } else {
      resultado.textContent = "";
  }

  document.getElementById('resultado').innerHTML
}



