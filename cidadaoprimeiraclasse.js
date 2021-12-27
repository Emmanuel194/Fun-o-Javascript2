// função em js é first-Class object (citizen)
//  Higher-order Function 'funçao de alta ordem

// criar de forma literal
function fun1() {} // PADRAO ACUSTUMADO.

// Armazenar funçao em variável
const fun2 = function () {}

// Armezenar funçao em um array
const array = [function (a, b) {return a + b}, fun1, fun2]
console.log(array[0](2, 3))

// Armazenar uma função em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa'}
console.log(obj.falar())

// Passar função como parametro
function run (fun){
  fun()
}

run(function () {console.log('executando..')})

// Uma função pode retornar/conter uma função
function soma(a, b) {
  return function(c) {
    console.log(a + b + c)
  }
}

soma(2, 3)(4)