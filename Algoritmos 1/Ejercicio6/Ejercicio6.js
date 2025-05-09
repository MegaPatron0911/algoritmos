function calcularFactura() {
    const montoInicial = 15000;
    const descuento = montoInicial * 0.10;
    const montoConDescuento = montoInicial - descuento;
    const iva = montoConDescuento * 0.19;
    const total = montoConDescuento + iva;

    document.getElementById("resultado").innerHTML = `
      Con el descuento del (10%)": $${descuento.toFixed(2)},
      Monto con descuento:$${montoConDescuento.toFixed(2)},
      Con el IVA del (19%): $${iva.toFixed(2)},
      Total a pagar: $${total.toFixed(2)}
    `;
    }
    