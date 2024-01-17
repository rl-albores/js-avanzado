/**
 *
 * @param {HTMLDivElement} element
 */

export const asyncAwait2Component = async (element) => {
  // console.log('asyncAwait2Component')
  console.time('Start')
  // const value1 = await slowPromise()
  // const value2 = await mediumPromise()
  // const value3 = await fastPromise()

  // cuando no dependen una de otra, utilizamos Promise

  const [value1, value2, value3] = await Promise.all([
    slowPromise(),
    mediumPromise(),
    fastPromise(),
  ])

  element.innerHTML = `value1: ${value1}<br/>value2:${value2}<br/>value3:${value3}<br/>`

  console.timeEnd('Start')
}

const slowPromise = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve('Slow Promise')
    }, 2000)
  })

const mediumPromise = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve('Medium Promise')
    }, 1500)
  })

const fastPromise = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve('FastPromise')
    }, 1000)
  })
