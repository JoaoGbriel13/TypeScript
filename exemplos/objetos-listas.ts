const pessoa = {
  nome : "João",
  idade : 22,
  profissão : "desenvolvedor"
}

pessoa.idade = 29

const pedro : {nome: string, idade : number, profissao : string} = {
  nome : "Pedro",
  idade : 25, 
  profissao : "Tecnico"

}

const paulo : {nome: string, idade : number, profissao : string} = {
  nome : "Paulo",
  idade : 35, 
  profissao : "Desenvolvedor"

}

enum Profissao {
  Professor,
  Ator,
  Jogador,
  Desenvolvedor
}

interface Pessoa {
  nome: string,
  idade : number,
  profissao: Profissao
}

const carlos : Pessoa = {
  nome : "Carlos",
  idade : 23,
  profissao: Profissao.Ator
}

interface Estudante extends Pessoa  {
  materias : string[]
}

const alberto : Estudante = {
  nome: 'Alberto',
  idade : 23,
  profissao : Profissao.Professor,
  materias :  ["Matematica", "Logica" , 'Programaçao']
}

const kobe : Estudante = {
  nome : 'Kobe',
  idade : 27,
  materias : ["Portugues" , "Fisica", "Quimica"]
}

function listar(lista: string[]) {
  for (const item of lista) {
    console.log('-', item) 
  }
}

listar(alberto.materias);