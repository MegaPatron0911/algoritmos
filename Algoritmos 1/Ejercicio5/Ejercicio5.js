
function calcularVelocidad() {
    const distancia = parseFloat(document.getElementById('distancia').value);
    const tiempo = parseFloat(document.getElementById('tiempo').value);
    const resultadoElemento = document.getElementById('resultado');

    if (isNaN(distancia) || isNaN(tiempo) || distancia <= 0 || tiempo <= 0) {
        resultadoElemento.textContent = "Por favor, ingresa valores válidos y positivos para distancia y tiempo.";
        return;
    }

    const velocidad = distancia / tiempo;
    resultadoElemento.textContent = `La velocidad del auto es ${velocidad.toFixed(2)} km/h.`;
}