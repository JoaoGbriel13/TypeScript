let anyEstadeVolta: any;
anyEstadeVolta = 3;
anyEstadeVolta = "teste";
anyEstadeVolta = 5;

let stringTeste : string = "verificar";
stringTeste = anyEstadeVolta

let unknownValor : unknown;
unknownValor = 3;
unknownValor = "opa";
unknownValor = false;
unknownValor = "vai sim";

let stringTeste2 : string = "agora vai!";

if(typeof unknownValor === "string") {
  stringTeste2 = unknownValor;
}