//A função find é utilizada para achar o primeiro elemento que satisfaça a condição passada e retorne o primeiro valor do array que corresponda a essa condição. Caso ele não encontre, retorna undefined.

// Usando array.find para encontrar a primeira 
const idades = [18, 21, 42, 20, 19, 21, 30, 73, 82, 45, 48, 50];

idades.find((idade) => idade < 20); // 18

console.log(idades.find((idade) => idade < 30)); // 18

const ages = [18, 21, 42, 20, 19, 21, 30, 73, 82, 45, 48, 50];

ages.find((idade) => idade === 33); // undefined
console.log(ages.find((idade) => idade === 33)); // undefined


// ainda tenho que estudar isso, me da um tempinho q a campanha vai acabar e eu vou estudar isso