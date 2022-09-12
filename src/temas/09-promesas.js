//PROMESAS
// const promesa = new Promise() //llamada por default
import { getHeroById } from './08-imp-exp'


const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    const getHeroe = getHeroById(2)
    resolve(getHeroe)
    reject('No hay heroe')
  }, 2000);
});

promesa.then((hero) => {
  console.log(hero)
})
  .catch(error => console.warn(error))


const getHeroByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroAsync = getHeroById(id)
      if (heroAsync) {
        resolve(heroAsync)
      } else {
        reject('No se encontro heroe')
      }
    }, 4000);
  });
}

getHeroByIdAsync(4)
  .then(console.log) //el parametro heroasync para por default
  .catch(console.warn) //el parametro 'no se encontro heroe pasa por default