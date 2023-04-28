// objetos tarea

let  datosPersonales = {
    Nombre: "Bryan",
    Apellido: "Rodriguez",
    Edad: 25,
    Altura: 5.7,
    eresDesarrollador: true

}

let Edad = 25

let datosfull = [datosPersonales,
    {Nombre: "Alex", Apellido: "Zapata", Edad: 30},
    {Nombre: "Angelo", Apellido: "Medina", Edad: 25}
]

console.log(datosfull)

datosfull.sort((a,b) => a.Edad - b.Edad)

console.log(datosfull)

