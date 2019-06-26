class Entity {
    constructor(name,height) {
        this.name = name;
        this.height = height;
    }

    greet() {
        console.log(`Hi! I'm ${this.name} from the Middle Earth`);
    }
}

let merry = new Entity('Merry',4.6);
merry.greet();