// # Exercício 2

// Crie um programa que peça um input de número para o usuário. 
// Com este número, o código deve imprimir a **tabuada** do número, de 1 a 10.


const numTab = Number(prompt(`Insira um número e receba a tabuada dele`))
for (i=0; i<=10; i++){
    console.log(`O número inserido foi ${numTab} e sua tabuada é: ${numTab} vezes ${i} =`,numTab*i)
}