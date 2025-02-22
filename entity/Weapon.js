export class Weapon {
    constructor(name, attack) {
        this.name = name,
        this.attack = attack
    }

    set setAttack(nb){
        this.attack = nb;
    }

    set setName(name){
        this.name = name;
    }
}
