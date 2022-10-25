// Simulação de um sistema de login feito em javascript

let userName = 'Tamara Simões';
let userPassword = 1234;
let acess;

// |Validar se o usuário e senha passados são válidos

if (userName === 'Tamara Simões' && userPassword === 1234){
  acess = true; 
  console.log('Acesso permitido')
}
else {
  console.log('Acesso negado');
}

console.log(acess);


// Caso acesso permitido, crie um recurso q leia  a quantidades de pães disponiveis e adicioneos em uma sacola. Faça com que o recurso mostre quantos pães foram adicionados 1 por 1
// se não permitido o acesso mostre uma msg de erro

let paes = 10;
let sacola = 0;

if (acess === true) {
  for (let i = 1; i <= paes; i++) {
    sacola ++ ;
    console.log('Item Adicionado: ', sacola);
  }
}
else {
  console.log('você não pode comprar mais pães');
}