let comparacomThais = function (param) {
  console.log(thais === param)
}

comparacomThais(global)

const obj = {}
comparacomThais = comparacomThais.bind(obj)
comparacomThais(global)
comparacomThais(obj)

let comparacomThis = param => console.log(this === param)
comparacomThaisarrow(global)
comparacomThaisarrow(module.exports)


comparacomThisarrow = comparacomThisarrow.bind(obj)
comparacomThisarrow(obj)