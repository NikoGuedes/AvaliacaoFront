// pegar o botao
const botaoexercicio = document.getElementById ("exercicio")

// criar a funçao 
botaoexercicio.addEventListener ("click", () => {
    const num1 = Number(document.getAnimations.getElementById("num1"))
    const num2 = Number(document.getAnimations.getElementById("num2"))

const soma = num1 + num2
const substracao = num1 - num2
const multiplicacao = num1 * num2
const divisao = num1 / num2

alert(
    "soma: " + soma +
    "multiplicação: " + multiplicacao +
    "substração: " + substracao +
    "divisão: " + divisao
)
})