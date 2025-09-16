class Hero{
    #health

    constructor(name,health,attack){
        this.name = name;
        this.#health = health;
        this.attack = attack;
    }

    getName(){
        return this.name;
    }

    getHealth(){
        return this.#health;
    }

    showStats(){
        console.log("Name: "+this.name);
        console.log("Name: "+this.health);
        console.log("Name: "+this.attack);
    }
}

const hero1 = new Hero("Thorin", 100,10);
const hero2 = new Hero("Gandalf", 100,8);

class Warrior extends Hero {
    useAbility(){
        console.log(`${this.name} user Power Strike`);
    }
}


Warrior.useAbility();