//Funciones

function saludar(nombre) {
  return `Hola, ${nombre}`
}

//Manera correcta de asignar funciones

const saludarMejor = function (nombre) {
  return `Hola, ${nombre}`
}

//FUNCIONES LAMBDA O FUNCIONES DE FLECHA

const saludarFlecha = (nombre) => {
  return `Hola ${nombre}`
}

const saludarSimplificado = (nombre) => `Hola ${nombre}`

console.log(saludar('Goku'))
console.log(saludarMejor('Keso'))
console.log(saludarFlecha('Keso de Flecha'))
console.log(saludarSimplificado('Simplificado'))


//IMPORTANTE EN REACT

const getUser = () => {
  return {
    uid: 'ABC',
    username: 'Eeewwweee',
  }
}

const getUserImplicito = () => ({
  uid: 'DEF',
  username: 'Easdasdeewwweee',
})

console.log(getUser())
console.log(getUserImplicito())

//TAREA

function getUsuarioActivo(nombre) {
  return {
    uid: 'ABCDE',
    username: nombre
  }
}


const usuarioActivo = getUsuarioActivo('Juan')
console.log(usuarioActivo);


//1. tranforma la funcion a funcion flecha
//2. Retorna objeto implicito
const getUsuarioActivoFlecha = (nombre) => ({
  uid: 'ENFLECHA',
  username: nombre,
})

const usuarioActivoFlecha = getUsuarioActivoFlecha('Juan flecha')
//3. Pruebas
console.log(usuarioActivoFlecha)

