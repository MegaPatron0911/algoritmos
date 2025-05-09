function calcularSegundos(){
    let horas = parseInt(document.getElementById("horas").value) || 0;
    let minutos = parseInt(document.getElementById("minutos").value) || 0;
    let segundos = parseInt(document.getElementById("segundos").value) || 0;

    
    let totalSegundos = (horas * 3600) + (minutos * 60) + segundos;

    
    document.getElementById("resultado").textContent =
      `El tiempo total equivale a ${totalSegundos} segundos.`;

}