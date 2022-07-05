let input1 = document.getElementById('input1')
let input2 = document.getElementById('input2')
let botao = document.getElementById('botao')

function getSoma(n1, n2){
  if(typeof n1 === "number" && typeof n2 === "number") {
    return n1 + n2;
  }else{
    return Number(n1) + Number(n2)
  }

}

botao.addEventListener("click", () =>{
  console.log(getSoma(input1.value, input2.value))
})