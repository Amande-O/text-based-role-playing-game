import * as App from '../app.js'

export class Monster {
    constructor(name, health, resistance, attack) {
        this.name = name,
        this.health = health,
        this.resistance = resistance,
        this.attack = attack
    }

    set setAttack(nb){
        this.attack = nb;
    }

    set setHealth(nb){
        this.health = nb;
    }

    set setResistance(nb){
        this.resistance = nb;
    }

    getMonster(){
        App.nameMonster.textContent = this.name;
        App.healthMonster.textContent = this.health;
        App.resistanceMonster.textContent = this.resistance;
        App.attackMonster.textContent = this.attack;
    }

    setMonster($name, $health, $resistance, $attack){
        this.name = $name;
        this.health = $health;
        this.resistance = $resistance;
        this.attack= $attack;
    }
}