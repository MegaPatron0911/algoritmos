function Factura(){

    function calcularSubtotal(cantidad, precio) {
        return cantidad * precio;
    }
    
    function calcularIVA(subtotal) {
        return subtotal * 0.19;
    }

    const productos = [
        { cantidad: document.getElementById("cantidad1").value, precio: document.getElementById("precio1").value },
        { cantidad: document.getElementById("cantidad2").value, precio: document.getElementById("precio2").value },
        { cantidad: document.getElementById("cantidad3").value, precio: document.getElementById("precio3").value },
        { cantidad: document.getElementById("cantidad4").value, precio: document.getElementById("precio4").value }
    ];
    let subtotalTotal = 0;
    let ivaTotal = 0;

   
    productos.forEach(producto => {
        const subtotal = calcularSubtotal(producto.cantidad, producto.precio);
        const iva = calcularIVA(subtotal);
        subtotalTotal += subtotal;
        ivaTotal += iva;
    });

    const total = subtotalTotal + ivaTotal;


    let facturaHTML = "<h2>Factura</h2>";
    facturaHTML += "<p>Subtotal: " + subtotalTotal.toFixed(2) + "</p>";
    facturaHTML += "<p>IVA (19%): " + ivaTotal.toFixed(2) + "</p>";
    facturaHTML += "<p>Total: " + total.toFixed(2) + "</p>";

   
    document.getElementById("resultado").innerHTML = facturaHTML;
}
