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
  firstName: 'Luquinha',
  lastName: 'Leal',
  favoriteFilmes: ['Star wars', 'Odss']
}

// console.log(person);
//Duas formas de acessar as propriedades do objeto
//dot notation (ponto)
//nomeDoObjeto.chaveDele
// console.log(person.lastName);

//brackets notation (conchetes [])


//1️⃣ Adiciona uma chave nova
person.firstName = 'Patrick';
person.city = 'Abc Paulista';

//2️⃣ Outra forma de adicionar uma chave nova
person['DocesFavoritos'] = 'Chocolate'
//3️⃣ Adiciona um outro objeto dentro do mesmo

person.address = {
  rua: 'Rua 21 ddfdf',
  numero: 23,
  outrasCoisitas: 'aaaaaaa'
}
// console.log(person.firstName);

//4️⃣ Iterar sobre o objeto

let iterable = [10, 20, 30];
 
for (const iterator of person) {
  console.log(iterator);
}
// for(let index in person){
//   console.log(person[index]);
// }
