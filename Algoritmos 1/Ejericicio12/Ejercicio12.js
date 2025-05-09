function Porcentaje(){
 let Hombres=Number(document.getElementById("Hombres").value);
 let Mujeres= Number(document.getElementById("Mujeres").value);
 let total= Mujeres + Hombres;


 if(total>0){

    let porcentajeHombres =  (Hombres / total) * 100;
    let porcentajeMujeres =  (Mujeres / total)* 100;

    document.getElementById('resultado').innerHTML=
    "Hombres:"+ porcentajeHombres.toFixed(2)+"%" + 
    "Mujeres:"+ porcentajeMujeres.toFixed(2)+"%";

 }else{
    document.getElementById("resultado").innerHTML = "Debes ingresar al menos una persona.";
 }

}