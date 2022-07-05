export{}
enum Profissao {
  Atriz,
  Padeiro,
  Executivo,
  Ator
}

interface Pessoa {
  nome: string
  idade : number
  profissao : Profissao
}

const pessoa1: Pessoa = {
  nome : "Joao",
  idade : 22,
  profissao: Profissao.Ator
}

const pessoa2 : Pessoa = {
  nome : "Carla",
  idade : 28,
  profissao : Profissao.Atriz
}

const pessoa3 : Pessoa = {
  nome : "Alberto",
  idade : 38,
  profissao : Profissao.Padeiro
}

const pessoa4 : Pessoa = {
  nome : "Livia",
  idade : 48, 
  profissao : Profissao.Atriz
}