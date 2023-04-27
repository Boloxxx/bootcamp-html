const compra = ["sal", "salami", "platano", "arroz", "azucar"]

compra.push("Aceite girasol")

console.log(compra)

compra.pop()

console.log(compra)

//var peliculasFav = [ 
//    titulo: "Terminator", "Anaconda", "Superman",
//    director: "James cameron", "Luis llosa", "Bryan singer",
//    Fecha: "1984", "1997", "2006"

//]

const peliculasFav = [
    {
       Titulo: 'Terminator',
       Director: 'James cameron',
       Fecha: '1984'
    },
    {
       Titulo: 'Anaconda',
       Director: 'Luis llosa',
       Fecha: '1997'
    },
    {
       Titulo: 'Superman',
       Director: 'Bryan singer',
       Fecha: '2012'
    },
];

console.log(peliculasFav)

// escoge la pelicula posterior a 2010
const peliculasPost = peliculasFav.slice(2, 5)


console.log(peliculasPost)

// Escoge los nombres de los directores de todas las peliculas

let directores = peliculasFav.map(function(element){
    return `${element.Director}`;
})

console.log(directores);

// escoge los titulos de las peliculas 

let titulos = peliculasFav.map(function(element){
    return `${element.Titulo}`;
})

console.log(titulos);

console.log(directores.concat(titulos))

let directorTitulos = directores.concat(titulos)
console.log(...directorTitulos)
