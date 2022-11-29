//addEventListerner recebe a função registerUser como parâmetro, deixando o código mais organizado.
const button = document.querySelector('#signup-button');

const registerUser = () => {
  console.log('Registrado com sucesso!');
};

button.addEventListener('click', registerUser);

/* forEach: executa uma ação determinada por você para cada item do array e não possui retorno;
find: encontra o primeiro elemento que satisfaça alguma condição;
some: retorna true se algum elemento satisfaz alguma condição, caso contrário retorna false;
every: retorna true se todos os elementos corresponderem a uma condição, caso contrário retorna false. */

//Anota aí 📝: uma função callback é uma função passada por parâmetro ou executada dentro de outra função. Ela é executada após o término de uma ação assíncrona, como uma requisição a uma API.

// estrutura de uma HOF
array.hofASerExecutada((elementoAtual, index, arrayOriginal) => {});

// Exemplo 1: forEach - executa uma ação para cada elemento do array  e não possui retorno
array.forEach((element, index) => {
  // código a ser executado
});
// Exemplo
const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];

arrayOfValues.forEach((element, index) => {
  console.log(`O elemento atual é: ${element} e possui o index: ${index}`);
});

/* O código acima está organizado da seguinte maneira:

arrayOfValues: nome do array que será percorrido;
.forEach: a HOF usada. Poderia ser outra HOF, como .find, .some, .every, entre outras, que a estrutura seria a mesma;
element: valor do elemento do array;
(element, index) => {  *código * }: função a ser executada. */


// Colocar todos os nomes em letras maiúsculas usando o metodo for

const pessoasAprovadas = ['Ana Beatriz', 'Caio Nunes', 'Afonso Ribeiro', 'Leonardo Lins']; // lista de nomes

for(let index = 0; index < pessoasAprovadas.length; index += 1) {
  pessoasAprovadas[index] = pessoasAprovadas[index].toUpperCase(); // acessa cada nome e transforma em maiúsculo
}

console.log(pessoasAprovadas); // ['ANA BEATRIZ', 'CAIO NUNES', 'AFONSO RIBEIRO', 'LEONARDO LINS']

// Colocar todos os nomes em letras maiúsculas usando o metodo map

const approvedPeople= ['Ana Beatriz', 'Caio Nunes', 'Afonso Ribeiro', 'Leonardo Lins']; // lista de nomes

approvedPeople.forEach((name, i) => {
  approvedPeople[i] = approvedPeople[i].toUpperCase(); // acessa cada elemento do array e atualiza para letra maiúscula
});

console.log(approvedPeople); // ['ANA BEATRIZ', 'CAIO NUNES', 'AFONSO RIBEIRO', 'LEONARDO LINS']

// Função tabuada de 2 utilizando o metodo forEach
const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

numeros.forEach((element) => {
  console.log(element * 2); // [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]
});

// Você também pode separar a callback do forEach em uma outra função. Veja o exemplo abaixo:

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const multiply = (element) => {
  console.log(element * 2);
}

numbers.forEach(multiply);


// Ultimo Exemplo utilisando TUDO do for foreach
const listaDePessoasAprovadas = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const enviarEmail = (email) => {
  console.log(`O email ${email} foi enviado com sucesso`);
}

listaDePessoasAprovadas.forEach((item, posicao, array) =>{
  enviarEmail(item);
  console.log(`Sua posição é a de: ${posicao}`);
  console.log(`A quantidade de pessoas no processo seletivo é de ${array.length}`)
});
