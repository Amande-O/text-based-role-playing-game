import { resetGame } from './app.js'
import * as Items from './items.js'

/**
 * scénario : contient les chemins et évènements
 */
export const scenario = [
    {
        id: 0,
        name: "beginning",
        text: "Vous entrez dans le donjon afin d'aller combattre le dragon qui terrorise votre ville. Deux couloirs s'offre à vous, un à gauche et un à droite. Choississez votre chemin.",
        choice : ["Aller à gauche", "Aller à droite"],
        nextStage: [1, 5]
    },
    {
        id: 1,
        name: "goToLeft",
        text: "Vous avancez dans le couloir de gauche. Sur votre chemin, vous croisez une porte. Souhaitez-vous l'ouvrir ?",
        choice : ["Ouvrir la porte", "Ne pas ouvrir"],
        nextStage: [2, 3]
    },
    {
        id: 2,
        name: "openDoorLeft",
        text: "Vous ouvrez la porte et découvrez un coffre. Dans ce coffre se trouve une épée. Vous abandonnez donc votre dague pour prendre cette nouvelle arme. Vous gagnez 15 points d'attaque.",
        choice: ["Ressortir et continuer"],
        nextStage: [3],
        weapon: Items.sword
    },
    {
        id: 3,
        name: "continueLeft",
        text: "Vous continuez d'avancer. Soudain, un objet au sol attire votre attention. Un casque ! Vous le prenez et le mettez sur votre tête. Vous gagnez 20 points de résistance ! Vous faites quelques pas de plus et arrivez devant la porte de la salle où se trouve le dragon.",
        choice: ["Y entrer"],
        nextStage: [4],
        resistance: 20
    },
    {
        id: 4,
        name: "monster",
        text: `Vous entrez dans la salle. Le dragon se dresse devant vous. Le combat commence !`,
        choice : ["Attaquer"],
        nextStage: [11],
        monster: {
            name: "Dragon", 
            health: 40,
            resistance: 25,
            attack: 18
        }
    },
    {
        id: 5,
        name: "goToRight",
        text: "Vous avancez dans le couloir de droite. Sur votre chemin, vous croisez une porte. Souhaitez-vous l'ouvrir ?",
        choice : ["Ouvrir la porte", "Ne pas ouvrir"],
        nextStage: [6, 7]
    },
    {
        id: 6,
        name: "openDoorRight",
        text: "Vous ouvrez la porte. Il fait très sombre à l'intérieur de la pièce. Vous trébuchez et votre dague tombe dans un trou ! Vous perdez 15 points d'attaque !",
        choice : ["Ressortir et continuer"],
        nextStage: [7],
        weapon: Items.fists
    },
    {
        id: 7,
        name: "continueRight",
        text:"Vous avancez et observez une pierre qui dépasse légèrement du mur. Souhaitez-vous la retirer ?",
        choice: ["continuer votre chemin", "retirer la brique"],
        nextStage: [9, 8]
    },
    {
        id: 8,
        name: "brick",
        text: "Vous retirer la brique et trouvez une potion. Vous la buvez et gagnez 10 points de vie !",
        choice : ["Continuer votre chemin"],
        nextStage: [9],
        health: 10
    },
    {
        id: 9,
        name: "continuePath",
        text: "Vous continuez d'avancer. Soudain, un rat vous mort à la cheville ! Vous perdez 5 points de résistance et 5 point de vie ! Vous faites quelques pas de plus et arrivez devant la porte de la salle où se trouve le dragon.",
        choice : ["Y entrer"],
        nextStage: [4],
        resistance: -5,
        health: -5
    },
    {
        id: 10,
        name: "reset",
        choice : ["Recommancer"],
        nextStage: [],
        action: [resetGame]
    },
    {
        id: 11,
        name: "fightWinsDragon",
        choice : ["Ressortir"],
        nextStage: [12]
    },
    {
        id: 12,
        name: "monster",
        text: `Vous tombez nez à nez avec un Serpent ! Défendez-vous !`,
        choice : ["Attaquer"],
        nextStage: [13],
        monster:  {
            name: "Serpent" ,
            health: 15,
            resistance: 10,
            attack: 25
        }
    },
    {
        id: 13,
        name: "fightWinsSerpent",
        choice : ["Sortir du donjon"],
        nextStage: [14]
    },
    {
        id: 14,
        name: "end",
        text: `Vous ressortez du donjon en vainqueur. Les villageois sont maintenant en sécurité ! Bravo !`,
        choice : ["Recommencer"],
        nextStage: [],
        action: [resetGame]
    }
]
