class pessoa {
  constructor(nome) {
    this.nome = nome

  }
  falar() {
    console.log(`meu nome é ${this.nome}`)
  }
}

const p1 = new pessoa ('joao')
p1.falar()

const criarPessoa1 = nome => {
  return {
    falar: () => console.log(`meu nome é $(nome)`)
  }
}

const p2 = criarPessoa1('joao')
p2.falar()