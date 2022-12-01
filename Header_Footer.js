function showBar() {
    elem = document.getElementById("texto_busqueda");
    buscar = document.getElementById("barra_busqueda");
    boton_salir = document.getElementById("boton_salida");
    boton_buscar = document.getElementById("boton_busqueda");

    if (elem.className=="activo") {
        elem.className = "desactivado";
        buscar.className = "busqueda";
        boton_salir.className = "boton_salida--desactivado";
        boton_buscar.className = "boton_busqueda--active";
    }
    else {
        elem.className = "activo";
        buscar.className = "busqueda--active";
        boton_salir.className = "boton_salida--active";
        boton_buscar.className = "boton_busqueda--desactivado";
    }

}

function showBurger() {
    elem1 = document.getElementById("elementos_links");
    if (elem1.className=="menu_cerrado") {
        elem1.className = "menu_abierto";
    }
    else {
        elem1.className = "menu_cerrado";
    }
}

function loaded() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const busqueda = urlParams.get('busqueda')

    document.getElementById("busqueda_texto_item").innerHTML = busqueda
};

