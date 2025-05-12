function Mayor() {

    const numero= (document.getElementById("numero").value);
    const resultado= (document.getElementById("resultado"));
    
    

    
    if (numero >= 10) {
        let triple = numero * 3;
        resultado.textContent = `El número es mayor que 10. Su triple es: ${triple}`;
    } else {
        resultado.textContent = "El número no es mayor que 10.";
    }

    document.getElementById('resultado').innerHTML
}