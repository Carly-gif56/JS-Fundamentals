const args = process.argv.slice(2); 
const firstArg = args[0];

const number = parseInt(firstArg, 10);
const isNumber = !isNaN(number);

if (isNumber) {
    console.log('My number: ' + number);
} else {

    console.log('Not a number');
}