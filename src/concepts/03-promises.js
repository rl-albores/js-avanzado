import { heroes } from '../data/heroes'
/**
 *
 * @param {HTMLDivElement} element
 */

export const promiseComponent = (element) => {
  // console.log('PromiseComponent')
  const renderHero = (hero) => {
    element.innerHTML = hero.name
  }

  const renderTwoHeroes = (hero1, hero2) => {
    element.innerHTML = `<h3>${hero1.name}</h3><h3>${hero2.name}</h3>`
  }

  const renderError = (error) => {
    element.innerHTML = `<h1>Error: </h1><h3>${error}</h3>`
  }
  // usar promesa

  const id1 = '5d86371f233c9f2425f16916'
  const id2 = '5d86371fd55e2e2a30fe1cc3'

  Promise.all([findHero(id1), findHero(id2)])
    .then(([hero1, hero2]) => renderTwoHeroes(hero1, hero2))
    .catch(renderError)

  // let hero1

  // findHero(id1).then((superoHero) => {
  //   renderHero(superoHero)
  // })
  // findHero(id1).then(renderHero).catch(renderError)

  // findHero(id1)
  //   .then((hero1) => {
  //      hero1 = hero
  //     findHero(id2)
  //       .then((hero2) => {
  //         renderTwoHeroes(hero1, hero2)
  //       })
  //       .catch(renderError)
  //   })
  //   .catch(renderError)

  // findHero(id1)
  //   .then((hero) => {
  //     hero1 = hero
  //     return findHero(id2)
  //   })
  //   .then((hero2) => {
  //     renderTwoHeroes(hero1, hero2)
  //   })
  //   .catch(renderError)
}

/**
 *
 * @param {String} id
 *
 * @returns {Promise}
 */
const findHero = (id) => {
  // const promise = new Promise((resolve, reject) => {
  return new Promise((resolve, reject) => {
    const hero = heroes.find((hero) => hero.id === id)

    if (hero) {
      resolve(hero)
      return
    }

    reject(`Hero with id ${id} not found.`)
  })
  // return promise
}
