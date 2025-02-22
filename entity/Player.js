import * as App from '../app.js'

export class Player {
    constructor(health, resistance, attack, weapon) {
        this.health = health,
        this.resistance = resistance,
        this.attack = attack,
        this.weapon = weapon
    }

    set setAttack(nb){
        this.attack = nb;
    }

    set setHealth(nb){
        this.health = nb;
    }

    set setWeapon(weapon){
        this.weapon = weapon;
    }

    set setResistance(nb){
        this.resistance = nb;
    }

    getPlayer(){
        App.healthText.textContent = this.health;
        App.resistanceText.textContent = this.resistance;
        App.attackText.textContent = this.attack;
        App.weaponText.textContent = this.weapon;
    }

    setPlayer($health, $resistance, $attack, $weapon){
        this.health = $health;
        this.resistance = $resistance;
        this.attack= $attack;
        this.weapon = $weapon;
    }
}