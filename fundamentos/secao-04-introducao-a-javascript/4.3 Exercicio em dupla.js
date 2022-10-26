
 // 1 - Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
// A soma total de 1 a 50 é: X
 
let soma = 0;
for (let i = 1; i <= 50; i++) {
 soma += i;
}
console.log(soma);


// 2 - Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.


let quantNumeros = 0;


for (let i = 2; i <= 150; i++) 
if (i%3 === 0) {
  quantNumeros ++;
}

console.log(quantNumeros);
if (quantNumeros === 50) {
  console.log('mensagem secreta');
}

// 5 - Crie um algoritmo que recebe a idade de Carolzita, Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.

var pessoas = {
 Carolzita: 23,
 Baêta: 60,
 Murilo: 18,

}
let maisNovo = Infinity;

for (var i in pessoas) {
 if (pessoas[i] < maisNovo) {
   maisNovo = pessoas[i];
 }
}

console.log(i);