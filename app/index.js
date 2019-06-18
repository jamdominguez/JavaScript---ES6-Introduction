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
console.log(b); //show a ERROR because the variable let exist only in the block (undefined)