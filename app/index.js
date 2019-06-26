import Entity from "./entity"

class Hobbit extends Entity {
    // Not is necessary if the implementation is equal to the parent
    constructor(name, height) {
        super(name, height)        
    }

    //@Override
    greet() {
        console.log(`Hello! I'm ${this.name} from the Shire`)
    }
}

let frodo = new Hobbit('Frodo Baggins',4.7)
console.log(frodo)
frodo.greet()


