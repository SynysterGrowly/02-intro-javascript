import { getHeroesByOwner } from "./temas/08-imp-exp";

const getHeroesByOwnerAsync = (owner) => {
  return new Promise((resolve, reject) => {
    const heroOwner = getHeroesByOwner(owner);
    if (heroOwner) {
      resolve(heroOwner)
    } else {
      reject('No se encuentra marca del superheroe')
    }
  });
}


getHeroesByOwnerAsync('DCAA')
  .then(console.log)
  .catch(console.warn)