//Template literals

const nombre = "Juan"
const apellido = "Nahuat"

const nombreCompleto = `Hola mi nombre es ${nombre} y mi apellido es ${apellido}`

console.log(nombreCompleto)

function getSaludo(nombre) {
  return 'Hola ' + nombre
}

console.log(`${getSaludo(nombre)}`)