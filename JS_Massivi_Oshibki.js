let num = [1, 2, 3];
let letter = ['a', 'b', 'c'];
console.log('Элемент массива num с нулевым индексом имеет тип данных - ' + typeof num[0]);
console.log('Элемент массива letter с нулевым индексом имеет тип данных - ' + typeof letter[0]);


let newMassiv = [1, 2, 4, 8, 16, 32, 64, 128];
newMassiv.splice(3, 3); //удаляет 3 элемента с конца, начиная с 3ей позиции
console.log(newMassiv);


// newMassiv.sort((a, b) => a - b);
// console.log(newMassiv);