function Pessoa (nome) {
    this.nome = nome

  this.falar = function() {
    console.log(`meu nome é ${this.nome}`)
  }
}

const p3 = new Pessoa ('joao')
p3.falar()