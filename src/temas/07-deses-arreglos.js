//Desestructuracion de arreglos
const personajes = ['goku', 'vegeta', 'trunks'];

const [, , p3] = personajes; //La coma ignora los espacios en el arreglo

console.log(p3)

const retornaArreglo = () => {
  return ['ABC', 123]
}

const [letras, numeros] = retornaArreglo();

console.log(letras, numeros)


const usaEstado = (valor) => {
  return [valor, () => (console.log('Hola mundo'))]

}

const [nombre, setNombre] = usaEstado('Goku');
console.log(nombre)
setNombre();

//TAREA
//El primer valor del arreglo se llamara nombre y setnombre
