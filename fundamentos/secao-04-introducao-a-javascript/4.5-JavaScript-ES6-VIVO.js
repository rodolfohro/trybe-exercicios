/* Arrow Functions */

// Criando função nomeada
function ourFunction() {
  // código aqui
}

// Chamando função nomeada
ourFunction();

console.log(ourFunction());

// -------------------------------------------------

// Criando arrow function nomeada

const nomeDaFuncao = () => {
  return 'Oi, Turma 28!';
}

// Chamando arrow function - nada muda

console.log(nomeDaFuncao());

// -------------------------------------------------

// Vantagens da arrow function
// // a. Menos caracteres de acordo com o número de parâmetros.

const zeroArgs = () => { 
  return 'Essa função não possui parâmetros';
};
console.log(zeroArgs());

const oneArg = arg1 => { 
  return 'Essa função possui apenas um parâmetro, que é ' + arg1 + ', portanto, dispensa os parênteses';
};
console.log(oneArg('Tamara'));


const oneArgWithParenthesis = (arg1) => { 
  return 'Essa função possui apenas um parâmetro, que é ' + arg1 + ', dentro de parênteses';
};
console.log(oneArgWithParenthesis('Luquinha'));


const manyArgs = (arg1, arg2) => { 
  return 'Essa função possui apenas um parâmetro, que são ' + arg1 + ' e ' + arg2 + ' e, portanto, precisam estar dentro de parênteses';
};
console.log(manyArgs('Ellen', 'Carolzita'));

// b. Sua arrow function tem apenas uma linha? Então, o return pode ser implícito.
// // b1. Com return explícito

const saudacao = () => {
  return 'Oi, Turma 28!';
}

console.log(saudacao());

// // b2. Com return implícito

const saudacao2 = () => 'Oi, Turma 28!';

console.log(saudacao2());

/*-------------------------------------------------------------------------------------------------------*/

/* Template Literals */

// Sem template literals
const message =
'Essa é minha \n' +
'\'primeira\' mensagem';

console.log(message);


// Com template literals
const message2 = `Essa é minha
'segunda' mensagem`;

console.log(message);

// Template literals e expressões

let soma = 10 + 20;
console.log('A soma entre os números é', soma);
console.log(`A soma entre os números é ${soma}`);


/*-------------------------------------------------------------------------------------------------------*/

/* Ternary Operator */

// Condicional com if/else

const firstNum = 1;
const secondNum = 2;
let message3;

if (firstNum < secondNum) {
  message = `Num1 é menor`
} 
else {
  message2 = `Num2 é menor`;
}

console.log(message2);

// Condicional com operador ternário
// condição ? valor se verdadeiro : valor se falso

firstNum < secondNum ? message = `1 é menor` : message = `2 é menor`;

console.log(message);


// Também é possível usar operador ternário como atribuição a variáveis/constantes.

const verificaNumeros = firstNum < secondNum ? `Num 1 é menor` : `Num 2 é menor`;

console.log(verificaNumeros);



/*-------------------------------------------------------------------------------------------------------*/

/* Diferença entre let e const */

// Com var
var x = Infinity; // global

function func(bool) { 
  if (bool) {
    x = 48; 
  }
  return x; 
}

console.log(func(true));
console.log(func(false)); 

// Com let
//let x = Infinity; // escopo global

function func(bool) {
  if (bool) {
    x = 48;
  }
  return x; 
}

console.log(func(true)); 
console.log(func(false));

