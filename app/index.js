/**
 * VARIABLES
 */
var name = 'John Snow';
let a = 'hello';
console.log('Before block: '+a+' '+name); //show hello

{
    console.log(a) //a variable doen't exist in this scope (undefined)
    var name = 'Ned Stark';
    let a = 'bye';
    console.log('Inside block: '+a+' '+name); //show bye
    let b = 1000
}

console.log('After block:'+a+' '+name); //show hello
try {
    console.log(b); //show a ERROR because the variable let exist only in the block (undefined)
} catch (e) {
    console.log("ERROR: "+e);
}

/**
 * CONSTANTS
 */
const DATA = 2;
console.log('This is a constant: '+DATA)
//DATA = 3*4; //show a ERROR no catcheable, DATA is read-only
const ARRAY = [1,2,3]
console.log(ARRAY);
ARRAY.push(4);
console.log(ARRAY); //the array can be modified but ARRAY constant doesn't have another value (can't be reassigned)
//ARRAY = [1]; //show a ERROR no catcheable, ARRAY is read-only

/**
 * LITERAL/STRINGS
 */
var greeting = 'hello';
var name = 'world';
var message_01 = greeting+' '+name;
console.log(message_01);

let message_02 = `${greeting} ${name}`; //ES6 template for literals/strings
console.log(message_02);

/**
 * OPERATING AND DESTRUCTURING
 */
console.log('OPERATING AND DESTRUCTURING')
let first_array = [7,8,9];
let second_array = [6, ...first_array,10];
console.log(second_array);

console.log('print function...')
function print(a,b,c) {
    console.log(a,b,c);
}
let z = [1,2,3];
let y = [9,8];
let w = [4,5,6,7];
print(z); //show [1,2,3]
print(...z); //show 1 2 3
print(...y); //show 9 8 undefined
print(...w); //show 4 5 6

console.log('print2 function...')
function print2(...z){
    console.log(z);
}
print2(z); //show [Array(3)]
print2(...z); //show [1,2,3]
print2(1,2,3,4,5,6,7,8); //show [1,2,3,4,5,6,7,8]
print2(1,'hello',true,2); //show [1,"hello",true,2]

let array_a = [100,200];
let array_b = array_a[0];
let array_c = array_a[1];
console.log(array_b,array_c);

let [array_x, array_y] = array_a; //array_x will be the first element and array_y the second, of array_a
console.log(array_x,array_y);

//Desctructuring operator
let heroes = ['Ryu Hayabusa', 'WonderWoman', 'Thor'];
let [ninja, fighter, throw_thunder] = heroes; //3 variables
console.log(ninja, fighter, throw_thunder);
let [human,...goods] = heroes; //1 variable (position 0), 1 array (positions 1 and 2)
console.log(human, goods);

//Destructuring objects
let wizard = {
    magical: true,
    power: 10
}
//let magical = wizard.magical;
//let power = wizard.power;
let {magical, power} = wizard;
console.log('Wizard', magical,power);

let ranger = {
    magical2: false,
    power2: 9
}
let {magical2, power2} = ranger;
console.log('Ranger',magical2,power2);

let warrior = {
    magical: false,
    power: 12
}
let {magical_01, power_01} = warrior;
console.log('Warrior',magical_01,power_01); // show undefined undefined, the variables and object properties has diferrent names

({magical,power} = warrior); //Use () to create new block and can assig the variables
console.log('Warrior',magical,power);

/**
 * Functions and Methods
 */ 
// Using function keyword
function boom(){
    console.log('boom()  3...2...1...BOOM!');
}
boom();
const otherBoom = () => {
    console.log('boom()  3...2...1...Other BOOM!');
}
otherBoom();
// Using function anonyomus
setTimeout(function(){
    console.log('setTimeout  3...2...1...BOOM!');
}, 1000);
setTimeout(() => {
    console.log('setTimeout  3...2...1...BOOM!');
}, 1000);
//
let i = 3;
let myCount = setInterval(function(){
    if (i > 0) {
        console.log(`${i--} ...`);    
    } else {
        console.log('BOOM!');
        clearInterval(myCount);
    } 
}, 1000);
// Using aero/arrow funcion
let j = 3;
let myOtherCount = setInterval(() => {
    if (j > 0) {
        console.log(`${j--} ...`);    
    } else {
        console.log('Ohter BOOM!');
        clearInterval(myOtherCount);
    } 
}, 1000);

/**
 * Ignoring this
 */
/* show error in Chrome "this is undefined"
this.a = 10;
const newprint = function() {
    console.log('this.a',this.a);
}
newprint();

const newarrowPrint = () => {
    console.log('this.a in arrowPrint',this.a);
}
newarrowPrint();
*/





















