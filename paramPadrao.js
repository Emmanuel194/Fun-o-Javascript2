// estrategia 1 para gerar valor padrão
function soma1(a, b, c) {
  a = a || 1
  b = b || 1
  c = c || 1
  return a + b + c
}
console.log(soma1())
console.log(soma1(2, 4, 5))

// parametros padrao ea2015, MAIS UTILIZADO NA ATUALIDADE

function soma2(a = 1, b = 2, c = 5) {
  return a + b + c
}
console.log(soma2(3, 5, 7))
