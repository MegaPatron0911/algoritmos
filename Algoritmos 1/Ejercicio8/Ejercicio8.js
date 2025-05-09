function Invertircapital(){
    const Inversion = parseFloat(document.getElementById(Inversion).value);
    const Razon= parseFloat(document.getElementById(Razon).value)/100;
   

    const  Montofinal = (Inversion * Razon);
    const ganacia= Montofinal - Inversion;

    document.getElementById('resultado').innerHTML =
    `Después de 1 mes, tendrás $${monto.toFixed(2)};
     Monto final:  $${Montofinal.toFixed(2)}`;
    
}