console.log(soma(2, 5)) 

// function declaration - pode chamar antes da function
function soma (x, y) {
  return x + y
}
// fuction expression - só pode chamar após a function quando for function expression
const sub = function (x, y) {
  return x - y
}
console.log(sub(3, 5))

// name fuction expression
const mult = function mult (x, y) {
  return x * y
}
console.log(mult(3, 5))