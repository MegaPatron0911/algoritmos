function descuento(){
    const valor= parseFloat(document.getElementById("valor").value);
    const resultado= document.getElementById("resultado");
    
  

    if(valor > 100000){
        const descuento= valor * 0.20;
        const valorcondescuento=  valor- descuento;
        resultado.textContent = "El valor con descuento del 20% es:" + valorcondescuento. toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
    }else {

        resultado.textContent = "No se aplica descuento.";
        console.log("No se aplica descuento");

    } 
    
}