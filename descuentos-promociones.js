function precioFinal(precio, porcentajeDescuento){
    const preciofinal = (precio * (100 - porcentajeDescuento))/100;
    return preciofinal;
}

function precioResultante() {
    const labelprecio = document.getElementById("Precio");
    const labeldescuento = document.getElementById("Descuento");

    const precio = Number(labelprecio.value);
    const descuento = Number(labeldescuento.value);
    const textoRespuesta = document.getElementById("respuesta");
    textoRespuesta.textContent = "El precio final a pagar es de " + precioFinal(precio, descuento) + " Euros";
}