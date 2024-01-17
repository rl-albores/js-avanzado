import { heroes } from '../data/heroes'

/**
 *
 * @param {HTMLDivElement} element
 */
export const callbacksComponent = (element) => {
  // console.log('callbacksComponent')
  const id = '5d86371f1efebc31def272e2'
  const id2 = '5d86371f9f80b591f499df32'

  findHero(id, (error, hero) => {
    // ? es como una condición si existe, si no marcado undefined
    // element.innerHTML = hero?.name || 'No existe el heroe'

    if (error) {
      element.innerHTML = error
      return
    }
    // callback hell
    findHero(id2, (error, hero2) => {
      if (error) {
        element.innerHTML = error
        return
      }
      element.innerHTML = `${hero.name} / ${hero2.name}`
    })

    // element.innerHTML = hero.name
  })
}

// @param {(hero:Object)=>void} callback
// @param {(error?: String, hero:Object)=>void} callback
/**
 *
 * @param {String} id
 * @param {(error: String|null, hero:Object)=>void} callback
 */
const findHero = (id, callback) => {
  const hero = heroes.find((hero) => hero.id === id)
  if (!hero) {
    callback(`Hero with id ${id} not found`)
    return
  }
  callback(null, hero)
}
