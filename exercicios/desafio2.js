"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Atriz"] = 0] = "Atriz";
    Profissao[Profissao["Padeiro"] = 1] = "Padeiro";
    Profissao[Profissao["Executivo"] = 2] = "Executivo";
    Profissao[Profissao["Ator"] = 3] = "Ator";
})(Profissao || (Profissao = {}));
const pessoa1 = {
    nome: "Joao",
    idade: 22,
    profissao: Profissao.Ator
};
const pessoa2 = {
    nome: "Carla",
    idade: 28,
    profissao: Profissao.Atriz
};
const pessoa3 = {
    nome: "Alberto",
    idade: 38,
    profissao: Profissao.Padeiro
};
const pessoa4 = {
    nome: "Livia",
    idade: 48,
    profissao: Profissao.Atriz
};
