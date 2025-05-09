function Totalnotas() {
   
    const n1 = parseFloat(document.getElementById("Calificacion1").value) || 0;
    const n2 = parseFloat(document.getElementById("Calificacion2").value) || 0;
    const n3 = parseFloat(document.getElementById("Calificacion3").value) || 0;
    const examen = parseFloat(document.getElementById("examen").value) || 0;
    const trabajo = parseFloat(document.getElementById("trabajo").value) || 0;
  
  
    const promedio = (n1 + n2 + n3) / 3;
    const nota55 = promedio * 0.55;
    const nota30 = examen * 0.30;
    const nota15 = trabajo * 0.15;
  
    
    const final = nota55 + nota30 + nota15;

  
   
    document.getElementById("resultado").textContent = final.toFixed(2);
    

}