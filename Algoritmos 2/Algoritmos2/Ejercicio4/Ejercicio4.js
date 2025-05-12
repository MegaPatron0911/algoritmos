function Suma(){
   const numero1= parseFloat(document.getElementById("numero1").value);
   const numero2 = parseFloat(document.getElementById("numero2").value)
   const suma = numero1+numero2;
   const resultado= document.getElementById("resultado");
  
   if (numero1 > numero2){
    console.log("la suma("+suma+") es mayor que"+ numero2);
    resultado.innerHTML=suma;
   }else{
    resultado.innerHTML="";
   }
  
   
}