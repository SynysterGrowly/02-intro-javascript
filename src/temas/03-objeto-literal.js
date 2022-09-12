//Objetos literales O DICCIONARIOS EN OTROS LENGUAJES DE PROGRAMACION

const persona = {
  nombre: "Tony",
  apellido: "Stark",
  edad: 53,
  direccion: {
    ciudad: "Nueva York",
    zip: 12345,
    lat: 12.123123,
    lng: 1233.123123,
  },
};


console.log({ persona }) //Cuando la variable tiene el mismo nombre que el objeto literal se pone solo el nombre
console.log({ superheroe: persona }) //Igual puedes cambiar el nombre de la variable asignandole ootro nombre


const persona2 = { ...persona }; //OPERADOR SPREAD
persona2.nombre = "Peter"


console.log(persona)
console.log(persona2)