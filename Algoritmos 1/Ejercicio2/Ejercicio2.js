function sumar () {
    let number1 = parseFloat(document.getElementById("number1").value);
    let number2 = parseFloat(document.getElementById("number2").value);
    

    resultado = number1+number2;
    document.getElementById("resultado").innerHTML = "El resultado es: "+resultado;

}

function restar (){
let number1 = parseFloat (document.getElementById ("number1").value);
let number2 = parseFloat (document.getElementById ("number2").value);

 resultado= number1- number2;
 document.getElementById ("resultado").innerHTML= "El resultado es: "+resultado;

}
function multiplicar (){
    let number1 = parseFloat (document.getElementById ( "number1").value);
    let number2 = parseFloat (document.getElementById ("number2").value);
    resultado= number1 * number2;
   document.getElementById ("resultado").innerHTML= "El resultado es: "+resultado;
}
function division (){
    let number1 = parseFloat (document.getElementById ( "number1").value);
    let number2 = parseFloat (document.getElementById ("number2").value);
    resultado= number1/ number2;
   document.getElementById ("resultado").innerHTML= "El resultado es: "+resultado;
}

document.getElementById("sumarBtn").onclick = function(){
    let operacion = document.getElementById("Miselect").value;
    if(operacion==="sumar"){
        sumar();
    }else if(operacion==="restar"){
        restar();
    }else if(operacion==="producto"){
        multiplicar();
    }else if (operacion==="división"){
        division ();
    }
}
