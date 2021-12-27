let dobro = function () {
  return 2 * a
}

dobro = (a) => {
  return 2 * a
}

dobro = a => 2 * a // return implícito // => isso é uma arrow fuction
console.log(dobro(Math.PI))

let ola = function() {
  return 'Olá'
}

ola = () => 'Olá' // forma padrão
ola = _ => 'Olá' // possui um param
console.log(ola())

