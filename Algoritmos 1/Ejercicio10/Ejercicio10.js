function Totalpagar(){
 let Totalcompra= parseFloat(document.getElementById("Totalcompra").value);

 if (isNaN(Totalcompra)) {
    alert("Por favor ingresa un número válido.");
    return;
 }


 let descuento= Totalcompra * 0.15;
 let precioFinal = Totalcompra - descuento;

 document.getElementById("resultado");
resultado.innerHTML= "Total a pagar: "+precioFinal;

}