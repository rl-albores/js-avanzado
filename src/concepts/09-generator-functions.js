/**
 *
 * @param {HTMLDivElement} element
 */

export const generatorFunctionsComponent = (element) => {
  // console.log('generatorFunctionsComponent')
<<<<<<< HEAD
=======
  // const myGenerator = myFirstGeneratorFunction()
  // console.log(myGenerator.next())
  // console.log(myGenerator.next())
  // console.log(myGenerator.next())
  // console.log(myGenerator.next())
  // console.log(myGenerator.next())
  // console.log(myGenerator.next())

  const genId = idGenerator()

  // console.log(genId.next())
  // console.log(genId.next())
  // console.log(genId.next())
  // console.log(genId.next())
  // console.log(genId.next())
  // console.log(genId.next())
  // console.log(genId.next())

  const button = document.createElement('button')
  button.innerText = 'Click me'
  element.append(button)

  const renderButton = () => {
    const { value } = genId.next()
    button.innerText = `Click ${value}`
  }
  button.addEventListener('click', renderButton)
}

function* idGenerator() {
  let currentId = 0
  while (true) {
    yield ++currentId
  }
>>>>>>> Update All
}

function* myFirstGeneratorFunction() {
  yield 'Primer valor'
<<<<<<< HEAD
  return 'Ya no hay valores'
=======
  yield 'Segundo valor'
  yield 'Tercer valor'
  return 'Ya no hay valores'
  yield 'Tercer valor'
>>>>>>> Update All
}
