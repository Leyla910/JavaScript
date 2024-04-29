//1.
let userInformation = {
    name: 'Jim',
    age: 77,
    city: 'London',
    id: 3
};


//2.
let keyUserInformation = Object.keys(userInformation);
console.log(keyUserInformation);


//3.
userInformation['language'] = 'english';


//4.
let valuesUserInformation = Object.values(userInformation);
console.log(valuesUserInformation);


//5.
let lengthUserInformation = Object.keys(userInformation).length;
if (lengthUserInformation >=5) {
    console.log("Более или равно 5");
};


//6.
let entriesUserInformation = Object.entries(userInformation);
console.log(entriesUserInformation);
entriesUserInformation.forEach(function(item) {
    let key = item[0];
    let value = item[1];
    console.log("key - " + key + "," + "value - " + value);
});


//7.
let copiedUserInformation = Object.assign({}, userInformation);
console.log("copiedUserInformation - ", copiedUserInformation);


//8.
copiedUserInformation.showMessage = function() {
    console.log("Это просто функция");
};


//9.
copiedUserInformationmation = Object.freeze(copiedUserInformation);
console.log(Object.isFrozen(copiedUserInformation));