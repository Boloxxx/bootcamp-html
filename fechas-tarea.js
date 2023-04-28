// fechas tarea

let fecha = new Date()

console.log(fecha)

let fechaNacimiento = new Date(1997, 11, 8)

console.log(fechaNacimiento)

if (fecha > fechaNacimiento) {
    console.log(fecha > fechaNacimiento)
}

let diaNacimiento = fechaNacimiento.getDate()
console.log(diaNacimiento)

let mesNacimiento = fechaNacimiento.getMonth()
console.log(mesNacimiento + 1)

let anioNacimiento = fechaNacimiento.getFullYear()
console.log(anioNacimiento)
