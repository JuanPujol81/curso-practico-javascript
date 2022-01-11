const listaCupones = [
    {
        nombreCupon: "xxp34582",
        discount: 15
    },
    {
        nombreCupon: "kk285tre",
        discount: 20
    },
    {
        nombreCupon: "pre9852re",
        discount: 30
    },
    {
        nombreCupon: "vip589res",
        discount: 50
    }
];

function precioFinal(precio, porcentajeDescuento){
    const preciofinal = (precio * (100 - porcentajeDescuento))/100;
    return preciofinal;
}

function descuentoCupones(cuponDescuento) {
    if(!cuponDescuento)
        return 0;
    else{
        const result = listaCupones.find(function (item) {return item.nombreCupon == cuponDescuento});
        if(!result){
            alert("El cupon " + cuponDescuento + " no es valido");
            return 0;
        }
        else{
            return result.discount;
        }
    }
}

function precioResultante() {
    const labelprecio = document.getElementById("Precio");
    const labeldescuento = document.getElementById("Descuento");
    const labelcupon = document.getElementById("Cupon");

    const precio = Number(labelprecio.value);
    const cuponDescuento = labelcupon.value;
    const descuento = Number(labeldescuento.value);
    const descuentoCupon = Number(descuentoCupones(cuponDescuento));
    const descuentoFinal = descuento + descuentoCupon;
    const finalPrice = precioFinal(precio, descuentoFinal);

    const textoRespuesta = document.getElementById("respuesta");

    textoRespuesta.textContent = "El precio final a pagar es de " + finalPrice + " Euros";
}