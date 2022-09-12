//Desestructuracion de objetos o asignacion desesctrurante

const persona = {
  nombre: 'Tony',
  edad: 34,
  clave: 'Iron man',
  rango: 'Soladado',
}


const { nombre, edad, clave } = persona

console.log(nombre)
console.log(edad)
console.log(clave)

//Desestructuracion por funcion
const retornaPersona = (usuario) => {
  const { nombre, edad, clave } = usuario;
  console.log(nombre)
  console.log(edad)
  console.log(clave)
}


//Desestructuracion por funcion dentro los parametros

const retornaPersonaParams = ({ nombre, edad, clave, rango = 'Capitan' }) => {
  console.log(nombre)
  console.log(edad)
  console.log(clave)
  console.log(rango)
}

retornaPersona(persona);
retornaPersonaParams(persona);


const retornaPersona2 = ({ nombre, edad, clave, rango }) => {
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 12.12312,
      lng: 123.12312,
    },
  }
}

const avenger = retornaPersona2(persona)

//Desestructurando

const { nombreClave, anios, latlng: { lat, lng } } = retornaPersona2(persona)
console.log(nombreClave, anios)
console.log(lat)
console.log(lng)


//Crear una desestructuracion de un objeto de varios niveles es con el nombre del nivel:{subniveles}