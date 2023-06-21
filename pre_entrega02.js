
class Mate {
    constructor(id, tipo, precio) {
        this.id = id,
            this.tipo = tipo,
            this.precio = precio
    }

    mostrarInfoMate() {
        console.log(`Mate ${this.tipo}, tiene un precio de ${this.precio}`)
    }
}

const mate1 = new Mate(1, "Imperial", 2100)
const mate2 = new Mate(2, "Comet", 980)
const mate3 = new Mate(3, "Porongo", 980)
const mate4 = new Mate(4, "Cerámica", 980)


const matesPush = []
matesPush.push(mate1, mate2, mate3, mate4)


function agregarMate() {
    let tipoMate = prompt("Ingrese el tipo de mate")
    let precioMate = parseInt(prompt("Ingrese el precio del mate"))
    const mateNuevo = new Mate(matesPush.length + 1, tipoMate, precioMate)
    console.log(mateNuevo)
    matesPush.push(mateNuevo)
}

// function verCatalogo(array) {
//     // un ciclo que permita recorrer un array de objetos y acceder a propiedades:
//     console.log(`nuestro catalogo es:`)
//     // for off: sirve para recorrer un array por dentro
//     for (let mate of array) {
//         console.log(mate.id, mate.tipo, mate.precio)
//     }
// }

// similar a vercatalogo pero con foreach
function mostrarCatalogoForEach(array) {
    console.log(`Nuestros mates disponibles son:`)
    array.forEach(
        mate => mate.mostrarInfoMate()
    )
}

// mostrarCatalogoForEach(matesPush)

function buscarPorTipo(array) {
    let tipoBuscado = prompt("Ingrese el tipo de mate que desea buscar")
    let busquedaT = array.find(
        (mate) => mate.tipo.toUpperCase() === tipoBuscado.toUpperCase()
    )
    if (busquedaT == undefined) {
        console.log(`El mate ${tipoBuscado} no está en nuestro catálogo`)
    } else {
        console.log(busquedaT)
    }
}


function buscarPorPrecio(array) {
    let precioBuscado = prompt("Ingrese el precio máximo que desea abonar")
    let busqueda = array.filter(
        (mate) => mate.precio <= precioBuscado
    )
    if (busqueda.length == 0) {
        console.log(`No existen mates cuyo valor sea menor o igual a ${precioBuscado}`)
    } else {
        console.log(busqueda)
    }
}


function menu() {
    let salirMenu = false
    do {
        let opcionIngresada = parseInt(prompt(`Ingrese la opción deseada
        1 - Agregar Mate
        2 - Borrar Mate
        3 - Consultar catálogo
        4 - Buscar por tipo de Mate
        5 - Filtrar Mate por precio
        0 - Salir del menu`))
        switch (opcionIngresada) {
            case 1:
                agregarMate()
                break
            case 2:
                console.log("Borrar mate")
                break
            case 3:
                mostrarCatalogoForEach(matesPush)
                break
            case 4:
                buscarPorTipo(matesPush)
                break
            case 5:
                buscarPorPrecio(matesPush)
                break
            case 0:
                console.log(`Gracias por utilizar nuestra app. Saludos!`)
                salirMenu = true
                break
            default:
                console.log("Opcion invalida. Ingrese alguna presente en el menu")
                break
        }
    } while (!salirMenu)
}

menu()