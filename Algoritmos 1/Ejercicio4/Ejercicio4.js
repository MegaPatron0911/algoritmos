function Definitiva () {
  const nota1= parseFloat (document.getElementById ( "nota1").value);
  const nota2 = parseFloat (document.getElementById ("nota2").value);
  const nota3 = parseFloat (document.getElementById ("nota3").value);
  const porcentaje1= parseFloat(document.getElementById("porcentaje1").value)
  let definitiva = (nota1*0.2)+(nota2*0.3)+(nota3*0.5);


  
  const resultado= document.getElementById("resultado");
  resultado.innerHTML= "Mostrar resultado: "+definitiva;

  }
  