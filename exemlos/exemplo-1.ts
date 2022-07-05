let input1 = document.getElementById('input1') as HTMLInputElement
let input2 = document.getElementById('input2') as HTMLInputElement
let botao = document.getElementById('botao')

function soma(n1 : number, n2 : number, devePrintar:boolean, frase: string) {
  let resultado = n1 + n2
  if(devePrintar){
    console.log(frase + resultado)
  }
  return n1 + n2;
}

let devePrintar = true;
let frase = "O valor é: "

if(botao){
  botao.addEventListener("click", () =>{
    if(input1 && input2){
      console.log(soma(Number(input1.value), Number(input2.value), devePrintar, frase))

    }
  })

}