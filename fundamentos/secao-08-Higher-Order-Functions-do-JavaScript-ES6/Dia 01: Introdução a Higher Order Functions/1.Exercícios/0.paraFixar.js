//Use o método forEach para exibir a lista de emails com a seguinte frase: O email ${email} está cadastrado em nosso banco de dados!.

const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

// Adicione seu código aqui

const enviarEmail = (email) =>{
	console.log (`O email ${email} está cadastrado em nosso banco de dados!.`)
}

emailListInData.forEach(enviarEmail);
// estudo do projeto zoo functions
// Path: fundamentos/secao-08-Higher-Order-Functions-do-JavaScript-ES6/Dia 01: Introdução a Higher Order Functions/1.Exercícios/1.zoo.js
//1 - Crie uma função que retorne a string 'Acordando!!' ;