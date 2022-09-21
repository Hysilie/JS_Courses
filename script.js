/* EXERCICE 2 */

let random = Math.floor(Math.random() * 100) + 1;

function play() {
  do {
    playerName = prompt("Indiquez votre nom de joueur");

    do {
      whichNumber = parseInt(prompt("Quel est le nombre ?"));
      if (whichNumber < random) {
        console.log("It's more");
      } else if (whichNumber > random) {
        console.log("It's less");
      } else if (whichNumber == random) {
        console.log(`${playerName} win ! `);
      }
    } while (whichNumber !== random);

    random = Math.floor(Math.random() * 100) + 1;
  } while (again());
}

// Play Again add //
function again() {
  playAgain = prompt("Rejouer ?");
  if (playAgain.toLowerCase() == "oui") {
    random + Math.floor(Math.random() * 100) + 1;
    return true;
  } else {
    console.log("Bye !");
    return false;
  }
}

play();

/*
let random = Math.floor(Math.random() * 100) + 1;

function Start() {
  do {
    playerName = prompt("Indiquez votre nom de joueur");
    play();
    random = Math.floor(Math.random() * 100) + 1;
  } while (again());
}
 */
/////////////////////////////////////////////////////////
/*   EXERCICE 1 */

/* let firstValue = parseInt(prompt("Choisir la première valeur :"));
       let operator = prompt("Choisir un opérateur : ")
       let secondValue = parseInt(prompt("Choisir la seconde valeur :"));
       
       function calculate (){
    let firstValue = parseInt(prompt("Choisir la première valeur :"));
    let operator = prompt("Choisir un opérateur : ")
let secondValue = parseInt(prompt("Choisir la seconde valeur :"));
       
       
       switch (operator) {
            case '+' :
                console.log(firstValue + secondValue);
                 calculate ();
                 break;

            case '-' :
                 console.log(firstValue - secondValue);
                  calculate ();
                 break;

            case '/' :
                 console.log(firstValue / secondValue);
                  calculate ();
                break;

            case '%' :
                 console.log(firstValue % secondValue);
                  calculate ();
                 break;

            case '*' :
                 console.log(firstValue * secondValue);
                  calculate();
                 break;

            default: 
                 console.log("Invalid Operator");
                 calculate();
       } 
    }
    calculate();
 
 */
