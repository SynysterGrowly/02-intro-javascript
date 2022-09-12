//Import

import { heroes, owners } from '../data/heroes';


///FIND
const getHeroById = (id) => {
  return heroes.find((heroe) => heroe.id === id)
}

// console.log(getHeroById(2))


//FILTER
const getHeroesByOwner = (owner) => {
  return heroes.filter((hero) => hero.owner === owner);
}

// console.log(getHeroesByOwner('DC'))

// console.log(owners)

export {
  getHeroById,
  getHeroesByOwner,
}