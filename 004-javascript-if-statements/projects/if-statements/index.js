const prompt = require('prompt-sync')();

const age = prompt('What is your age? ');

const numberAge = parseInt(age);

console.log(`Your age is ${age}`);

if(numberAge >= 21) {
    console.log('You may enter the website!');
}

//console.log('age >= 21')
//console.log(age >= 21);

//console.log('age >100');
//console.log(age >100);


//console.log('numberAge >= 21');
//console.log(numberAge >= 21);

//console.log('numberAge >100');
// console.log(numberAge >100);