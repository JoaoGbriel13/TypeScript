"use strict";
const pessoa = {
    nome: "João",
    idade: 22,
    profissão: "desenvolvedor"
};
pessoa.idade = 29;
const pedro = {
    nome: "Pedro",
    idade: 25,
    profissao: "Tecnico"
};
const paulo = {
    nome: "Paulo",
    idade: 35,
    profissao: "Desenvolvedor"
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professor"] = 0] = "Professor";
    Profissao[Profissao["Ator"] = 1] = "Ator";
    Profissao[Profissao["Jogador"] = 2] = "Jogador";
    Profissao[Profissao["Desenvolvedor"] = 3] = "Desenvolvedor";
})(Profissao || (Profissao = {}));
const carlos = {
    nome: "Carlos",
    idade: 23,
    profissao: Profissao.Ator
};
const alberto = {
    nome: 'Alberto',
    idade: 23,
    profissao: Profissao.Professor,
    materias: ["Matematica", "Logica", 'Programaçao']
};
const kobe = {
    nome: 'Kobe',
    idade: 27,
    materias: ["Portugues", "Fisica", "Quimica"]
};
function listar(lista) {
    for (const item of lista) {
        console.log('-', item);
    }
}
listar(alberto.materias);
