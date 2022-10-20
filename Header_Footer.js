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

window.addEventListener("load",function() {
    new Glider(this.document.querySelector(".carousel_lista"), {
        slidesToShow: 1.25,
        slidesToScroll: 1,
        draggable: true,
        dots: ".carousel_indicador",
        arrows: {
            prev: ".carrousel_anterior",
            next: ".carrousel_siguiente"
        },
        responsive: [
            {
              // screens greater than >= 775px
              breakpoint: 650,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 2,
                slidesToScroll: 1,
                itemWidth: 150,
                duration: 0.25
              }
            },{
              // screens greater than >= 1024px
              breakpoint: 1230,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                itemWidth: 150,
                duration: 0.25
              }
            }
        ]
    });

    new Glider(this.document.querySelector(".carousel_lista_2"), {
        slidesToShow: 1.25,
        slidesToScroll: 1,
        draggable: true,
        dots: ".carousel_indicador_2",
        arrows: {
            prev: ".carrousel_anterior_2",
            next: ".carrousel_siguiente_2"
        },
        responsive: [
            {
              // screens greater than >= 775px
              breakpoint: 650,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 2,
                slidesToScroll: 1,
                itemWidth: 150,
                duration: 0.25
              }
            },{
              // screens greater than >= 1024px
              breakpoint: 1230,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                itemWidth: 150,
                duration: 0.25
              }
            }
        ]
    });

    new Glider(this.document.querySelector(".carousel_lista_3"), {
        slidesToShow: 1.25,
        slidesToScroll: 1,
        draggable: true,
        dots: ".carousel_indicador_3",
        arrows: {
            prev: ".carrousel_anterior_3",
            next: ".carrousel_siguiente_3"
        },
        responsive: [
            {
              // screens greater than >= 775px
              breakpoint: 650,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 2,
                slidesToScroll: 1,
                itemWidth: 150,
                duration: 0.25
              }
            },{
              // screens greater than >= 1024px
              breakpoint: 1230,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                itemWidth: 150,
                duration: 0.25
              }
            }
        ]
    });

    new Glider(this.document.querySelector(".carousel_lista_4"), {
        slidesToShow: 1.25,
        slidesToScroll: 1,
        draggable: true,
        dots: ".carousel_indicador_4",
        arrows: {
            prev: ".carrousel_anterior_4",
            next: ".carrousel_siguiente_4"
        },
        responsive: [
            {
              // screens greater than >= 775px
              breakpoint: 650,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 2,
                slidesToScroll: 1,
                itemWidth: 150,
                duration: 0.25
              }
            },{
              // screens greater than >= 1024px
              breakpoint: 1230,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                itemWidth: 150,
                duration: 0.25
              }
            }
        ]
    });
});