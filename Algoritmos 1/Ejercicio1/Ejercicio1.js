function sumar () {
    let number1 = parseFloat(document.getElementById("numero1").value);
    let number2 = parseFloat(document.getElementById("numero2").value);
    let number3 = parseFloat(document.getElementById("numero3").value);

    resultado = number1+number2+number3;
    document.getElementById("resultado").innerHTML = "El resultado es: "+resultado;

}