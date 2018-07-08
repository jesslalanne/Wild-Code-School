class Monster {
    constructor(obj) {
        this.name = obj.options;
        this.health = 100;
    }

    heal () {
        this.health += 10;
        console.log(`Oh oh, ${this.name} utilise un pouvoir de guérison !`)
    }

    getName () {
        console.log(`Salut, je suis ${this.name}, the big monster`);
    }

    getHealth () {
        console.log(`Hey, ${this.name} possède maintenant ${this.health} points de vie`);
    }
}


class MonsterMini extends Monster {
    constructor(name) {
        super(name);
        this.health= 50;
    }

    heal () {
        this.health += 5;
        console.log(`Salut les Wilders, ${this.name} utilise un pouvoir de guérison !`)
    }

	getHealth () {
        super.getHealth ();
    }
    
	getName () {
        console.log(`Coucou, je suis ${this.name}, the mini monster`);
    }
}

module.exports = {Monster, MonsterMini};