
let Cursos = document.getElementById('Carousel_Cursos') .querySelectorAll('.carousel .carousel-item')
console.log(Cursos);   
Cursos.forEach((el) => {
        const minPerSlide = 4
        let next = el.nextElementSibling
        for (var i=1; i<minPerSlide; i++) {
            if (!next) {
        // wrap carousel by using first child
        next = Cursos[0]
    }
    let cloneChild = next.cloneNode(true)
    el.appendChild(cloneChild.children[0])
    next = next.nextElementSibling
}
})

let Destacados = document.getElementById('Carousel_Destacados') .querySelectorAll('.carousel .carousel-item')
    console.log(Destacados);   
    Destacados.forEach((el) => {
            const minPerSlide = 4
			let next = el.nextElementSibling
			for (var i=1; i<minPerSlide; i++) {
				if (!next) {
            // wrap carousel by using first child
            next = Destacados[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

let Talleres = document.getElementById('Carousel_Talleres') .querySelectorAll('.carousel .carousel-item')
    console.log(Talleres);   
    Talleres.forEach((el) => {
            const minPerSlide = 4
			let next = el.nextElementSibling
			for (var i=1; i<minPerSlide; i++) {
				if (!next) {
            // wrap carousel by using first child
            next = Talleres[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})
