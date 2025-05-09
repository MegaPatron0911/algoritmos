function calcularSalario() {
    const horas = parseFloat(document.getElementById("horas").value);
    const valorHora = parseFloat(document.getElementById("valorHora").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(horas) || isNaN(valorHora)) {
        resultado.textContent = "Por favor, ingrese valores válidos.";
        return;
    }

    let salario = horas * valorHora;

    
    if (horas > 40) {
        const horasExtras = horas - 40;
        salario += horasExtras * valorHora * 0.5;
    }

  
    resultado.textContent = `Salario total: $${salario.toLocaleString('es-CO')}`;
}