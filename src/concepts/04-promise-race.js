/**
 *
 * @param {HTMLDivElement} element
 */

export const promiseRaceComponent = (element) => {
  // console.log('promiseRaceComponent')

  element.innerHTML = 'Loading...'

  const renderValue = (value) => {
    element.innerHTML = value
  }
  // renderValue('Ricardo')
  Promise.race([slowPromise(), mediumPromise(), fastPromise()]).then(
    renderValue
  )
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
    }, 3000)
  })
