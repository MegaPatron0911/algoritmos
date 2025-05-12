function calcularPrecioFinal() {
  const precioInput = parseFloat(document.getElementById("precio").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(precioInput)) {
    resultado.textContent = "Por favor, ingrese un precio válido.";
    return;
  }

  let descuento = 0;
  if (precioInput >= 1000000) {
    descuento = precioInput * 0.10;
  }

  const precioConDescuento = precioInput - descuento;
  const iva = precioConDescuento * 0.19;
  const precioFinal = precioConDescuento + iva;


  const precioFinalFormateado = precioFinal.toLocaleString('es-CO');


  resultado.innerHTML = `
    <p>Precio original: ${precioInput}</p>
    <p>${descuento > 0 ? 'Descuento aplicado (10%): ' + descuento : 'No se aplica descuento.'}</p>
    <p>IVA (19%): ${iva}</p>
    <strong>Precio final: ${precioFinalFormateado}</strong></p>
  `;
}
