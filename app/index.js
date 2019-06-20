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