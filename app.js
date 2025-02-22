import { Player } from './entity/Player.js'
import { scenario } from './paths.js'
import { Monster } from './entity/Monster.js'
import { fight } from './fight.js'
import { dagger } from './items.js'

const btnReset = document.querySelector("#reset");
const text = document.querySelector("#text");

export const statsMonster = document.querySelector("#stats__monster");
export let textFightMonster = document.querySelector('#infoFightMonster');
export let textFightPlayer = document.querySelector('#infoFightPlayer');
export let healthText = document.querySelector("#health");
export let resistanceText = document.querySelector("#resistance");
export let attackText = document.querySelector("#attack");
export let weaponText = document.querySelector("#weapon");
export let nameMonster = document.querySelector("#nameMonster");
export let healthMonster = document.querySelector("#healthMonster");
export let resistanceMonster = document.querySelector("#resistanceMonster");
export let attackMonster = document.querySelector("#attackMonster");

// Mise en place du jeu
export let warrior = new Player(30, 15, dagger.attack, dagger.name);
statsMonster.classList.add('disabled');
warrior.getPlayer();
beginning();
btnReset.addEventListener('click', resetGame);

/**
 * permet de lancer le début du jeu
 */
function beginning(){
    move(scenario[0]);
}

/**
 * permet d'avancer dans l'histoire,
 * supprime le 2eme bouton lorsqu'il n'y a qu'une action et qu'il a été précédemment créé
 * @param {object} stage scénario en cours
 */
export function move(stage){
    resetMonster();
    updateStatsPlayer(stage);
    warrior.getPlayer();
    createBtnOne(stage);
    text.textContent = stage.text;
    if (stage.choice.length == 2 && document.querySelector('.btn2') !== null){
        removeBtnTwo();
        createBtnTwo(stage.choice[1], stage.nextStage[1])
    } else if (stage.choice.length == 2 ){
        createBtnTwo(stage.choice[1], stage.nextStage[1])
    } else if (stage.choice.length == 1 && document.querySelector('.btn2') !== null){
        removeBtnTwo();
    }
}

/**
 * permet de mettre à jour les armes, la santé et la résistance du joueur
 * @param {object} stage scénario en cours
 */
function updateStatsPlayer(stage) {
    if (stage.weapon != "" && stage.weapon != undefined) {
        warrior.setWeapon = stage.weapon.name;
        warrior.setAttack = stage.weapon.attack;
    }
    if (stage.resistance != "" && stage.resistance != undefined) {
        warrior.setResistance = warrior.resistance + stage.resistance;
    }
    if (stage.health != "" && stage.health != undefined) {
        warrior.setHealth = warrior.health + stage.health;
    }
}

/**
 * crée un premier bouton
 * @param {object} stage scénario en cours
 */
export function createBtnOne(stage){
    if (document.querySelector('.btn1') !== null) {
        let currentDiv = document.getElementById('sectionBtn');
        let btnOneRemove = document.querySelector('.btn1');
        currentDiv.removeChild(btnOneRemove);
    }
    let btnChoiceOne = newBtn('btn1', stage.choice[0]);
    if (stage.monster != "" && stage.monster != undefined) {
        let monster = new Monster(stage.monster.name, stage.monster.health, stage.monster.resistance, stage.monster.attack);
        monster.getMonster();
        statsMonster.classList.remove('disabled');
        btnChoiceOne.addEventListener('click', () => {
            fight(warrior, monster, stage.nextStage[0]);
        });
    } else if (stage.nextStage[0] === undefined && (stage.action != "" && stage.action != undefined)) {
        btnChoiceOne.addEventListener('click', stage.action[0]);
    } else {
        btnChoiceOne.addEventListener('click', () => { move(scenario[stage.nextStage[0]]) });
    }
}

/**
 * crée un deuxième bouton lorsqu'il y a 2 actions possibles dans le chemin choisi
 * @param {string} text le texte du chemin choisi
 * @param {number} nextStage chemin suivant
 */
export function createBtnTwo(text, nextStage){
    let btnChoiceTwo = newBtn('btn2', text);
    btnChoiceTwo.addEventListener('click', () => { move(scenario[nextStage]) });
}

/**
 * permet de créer un bouton, de lui ajouter une classe et du texte puis et de l'insérer l'élement parent
 * @param {string} classBtn 
 * @param {string} text
 * @return {HTMLButtonElement}
 */
function newBtn(classBtn, text) {
    let btn = document.createElement('button');
    let currentDiv = document.getElementById('sectionBtn');
    btn.classList.add(classBtn);
    btn.textContent = text;
    currentDiv.appendChild(btn);
    return btn;
}

/**
 * supprime le 2eme bouton 
 */
export function removeBtnTwo(){
    let currentDiv = document.getElementById('sectionBtn');
    let btnChoiceTwo = document.querySelector('.btn2');
    currentDiv.removeChild(btnChoiceTwo);
}

/**
 * permet de recommencer le jeu au début
 */
export function resetGame(){
    warrior.setPlayer(30, 15, dagger.attack, dagger.name);
    warrior.getPlayer();
    resetMonster();
    beginning();
}

/**
 * enlève les éléments liés aux combats (textes et statistiques du monstre)
 */
export function resetMonster() {
    textFightPlayer.textContent = "";
    textFightMonster.textContent = ""
    statsMonster.classList.add('disabled');
}