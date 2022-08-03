const prompt = require('prompt-sync')();

const name = prompt('What is your name? ');

// const drink = prompt()

console.log(`What's up ${name}! You and the homies are prepping for the ultimate SUMMER TURN UP! However, in order for this to be successful, we need to delegate responsibilities. Your response to the following questions will determine your role. Here we go!`);

const age = prompt('How old are you? ');
const numberAge = parseInt(age);

if(numberAge <= 17) {
    console.log('Nahhhh, you not coming. You not even legal. Here, I left 10 bucks on the table. Get a pizza or something');
}
else if(numberAge <=20) {
    console.log(`Okay, you can come, but you're in charge of all food and drinks for the ride. And because you're the youngest, please know that you're automatically sitting in the middle.`);
}
else if( numberAge <=25) {
    console.log(`Perfect! You're ${numberAge} so you're legal. That means youre in charge of the alcohol. Everyone will contribute 50 bucks so make sure we're set for the weekend!`);
    const drink = prompt(`Since you're at the liquor store, you have to decide for the group. Which drink will you choose, Whiskey, Tequila, or Vodka? `);
    if(drink === 'Vodka') {
        console.log(`Oops, too bad! You're no longer welcomed...don't nobody drink that shit!!`);
   }
}

    
    // console.log(`But what liquor are you getting, though? Your three options are Tequila, Whiskey, or Vodka.`);
// if(numberAge <= 1 && numberAge <=28) {
    // console.log('Nahhhh, you not coming. You not even legal. Here, I left 10 bucks on the table. Get a pizza or something');
// }
// else if(numberAge)
// if(numberAge >= 25) {
    // console.log(`Perfect! We were looking for somebody to rent the whip. And at ${numberAge} years old, you'd be perfect! Thanks for volunteering!`);
// }

// if(numberAge )