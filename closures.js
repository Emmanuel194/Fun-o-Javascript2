// conceito de closure = é o escopo criado quando uma função é declarada
// esse escopo permite a função acessar e manipular variáveis externas á função

const x = 'global'

function fora () {
  const x = 'local'
  function dentro () {
    return x
  }
  return dentro
} 
const minhafuncao = fora()
console.log(minhafuncao())