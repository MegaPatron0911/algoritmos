let salarioTotal=0;

function Sueldofinal() {
    //let sueldo=parseInt(document.getElementById("sueldo").value);
    let sueldo=1300000;
    let venta1=parseInt(document.getElementById("venta1").value);
    let venta2 = parseInt(document.getElementById("venta2").value);
    let venta3 = parseInt(document.getElementById("venta3").value);

    
    
    let ventas= (venta1+venta2+venta3);
    let comision = (ventas*0.10);
    totalSueldo = sueldo+comision

    
    document.getElementById('resultado').innerHTML
    resultado.innerHTML="Total a pagar:"+totalSueldo;

    alert("Comisión total: $" + comisionTotal.toFixed(2));
    alert("Salario total del mes: $" + salarioTotal.toFixed(2));
    
}