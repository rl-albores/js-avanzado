/**
 *
 * @param {HTMLDivElement} element
 */

import { heroes } from '../data/heroes'

export const generatorsAsyncComponent = async (element) => {
  // console.log('generatorsAsyncComponent')
  const heroGenerator = getHeroGenerator()
  let isFinished = false

  do {
    // element.innerHTML = (await heroGenerator.next()).value
    const { value, done } = await heroGenerator.next()
    isFinished = done
    // console.log({ value, done }) adadfad
    if (isFinished) break
    element.innerHTML = value
    // } while (!(await heroGenerator.next()).done)
  } while (!isFinished)
}

async function* getHeroGenerator() {
  for (const hero of heroes) {
    await sleep()
    yield hero.name
  }
  return
}

const sleep = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 1000)
  })
}
