/* Crie uma função para dar boas vindas */
// A estrutura da função
 function boasVindas (nome) {
	//o return da função
	return 'Boas Vindas, ' + nome;
 }
 console.log(boasVindas('Carol'));

 //Crie uma função para somar 2 números

 function sum(numero1, numero2){
	return numero1 + numero2;
	 }

	 console.log(sum(1,20));
	 console.log(sum(4,7));

// Crie uma função que calcule os números  de jogos de vôlei
// 2 pontos por vitórioa
// 1 ponto por empate

function calcularPontos(vitorias, empates){
	let resultado = 0;
	resultado = (vitorias * 2) + empates;
	return resultado
}

console.log(calcularPontos(2,3));
console.log(calcularPontos(10,12));

// Crie uma pessoa

let person = {
	firstName: 'Lukinha',
	lastName: 'Leal',
	favoriteMovie: ['Star Wars', 'Han Solo']
}
// nome do objeto, chave dele
//console.log(person);
// bracked notation []
console.log(person.favoriteMovie[0]);
// Criar uma nova chave
person.firstName = 'Thiago'
// outra forma de adicionar uma chave nova
person['Doces Favoritos'] = 'choocolate'

console.log(person.);
