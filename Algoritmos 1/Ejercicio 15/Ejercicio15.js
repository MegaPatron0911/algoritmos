function calcularSalario() {
    const horas = parseFloat(document.getElementById('horas').value);
    const valorHora = parseFloat(document.getElementById('valorHora').value);

    if (isNaN(horas) || horas < 0) {
        alert('Por favor, ingrese un número válido de horas trabajadas.');
        return;
    }

    if (isNaN(valorHora) || valorHora < 0) {
        alert('Por favor, ingrese un valor válido para el pago por hora.');
        return;
    }

    const salario = horas * valorHora;

    document.getElementById('resultado').textContent = `El salario total es: $${salario}`;
}