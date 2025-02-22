import * as App from './app.js'
import { scenario } from './paths.js'

/**
 * lance les attaques
 * @param {Player} player l'instance du joueur
 * @param {Monster} monster l'instance du monstre
 * @param {number} scenarioWinner id du prochain scénario lorsque le joueur gagne le combat
 */
export function fight(player, monster, scenarioWinner){
    attackPlayer(player, monster);
    if (monster.health <= 0){
        player.getPlayer();
        monster.setHealth = 0;
        monster.getMonster();
        text.textContent = "Gagné !";
        App.createBtnOne(scenario[scenarioWinner]);
    } else {
       attackMonster(player, monster);
       if (player.health <= 0){
        player.setHealth = 0;
        player.getPlayer();
        monster.getMonster();
        text.textContent = "Perdu !";
        App.createBtnOne(scenario[10]);
        } else {
            text.textContent = "Attaquer à nouveau !";
            player.getPlayer();
            monster.getMonster();
        }
    }
}

/**
 * lance une attaque de la part du joueur
 * @param {Player} player l'instance du joueur
 * @param {Monster} monster l'instance du monstre
 */
function attackPlayer(player, monster){
    let nb = Math.trunc(Math.random()*41);
    let degat = nb + player.attack - monster.resistance;
    attack(degat, monster, true);
}

/**
 * lance une attaque de la part du monstre
 * @param {Player} player l'instance du joueur
 * @param {Monster} monster l'instance du monstre
 */
function attackMonster(player, monster){
    let nb2 = Math.trunc(Math.random()*46);
    let degatPlayer = nb2 + monster.attack - player.resistance;
    attack(degatPlayer, player, false);
}

/**
 * met à jour les points de vie et affiche les textes d'informations du combat en cours
 * @param { number } degat 
 * @param {object } victim
 * @param { boolean } attackerIsPlayer "true" si c'est une attaque du joueur ou "false" si c'est une attaque du monstre
 */
function attack(degat, victim, attackerIsPlayer) {
    if (degat > 0){
        victim.setHealth = victim.health - degat;
        if (!attackerIsPlayer) {
            App.textFightMonster.textContent = "Vous subissez " + degat + " de dégâts.";
        } else {
            App.textFightPlayer.textContent = "L'ennemi subit " + degat + " de dégâts.";
        }
    } else {
        if (!attackerIsPlayer) {
            App.textFightMonster.textContent = "Ouf ! l'ennemi ne vous a pas touché.";
        } else {
            App.textFightPlayer.textContent = "Raté ! l'ennemi n'a pas été touché.";
        }
    }
}