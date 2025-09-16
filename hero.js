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



class Warrior extends Hero {
    useAbility(){
        console.log(`${this.name} user Power Strike`);
    }
}

class Mage extends Hero {
    constructor(name,health,attack,mana){
        super(name,health,attack);
        this.mana = mana;
    }

    useAbility(){
        console.log(`${this.name} cast Firebal`);
    }

    showStats(){
        super.showStats();
        console.log("Mana: " + this.mana);
    }
}

const Thorin = new Warrior("Thorin", 100,10);
const Gandalf = new Mage("Thorin", 100,10,50);

Thorin.showStats();
Thorin.useAbility();
Thorin.showStats();
Thorin.useAbility();
