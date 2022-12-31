/* ================= Exercice 1 ================= */

const people = ["Greg", "Mary", "Devon", "James"];
people.shift();
console.log(people);

people[2] = "Jason";
console.log(people);

people.splice(4,1,"DION");
console.log(people);

console.log(people.indexOf("Mary"));

console.log(people.slice(1,3));

console.log(people.indexOf("Foo"));

let last;
peopleLength = people.length;
console.log(people.slice(3,peopleLength));

for (let i in people) {
    console.log(people[i]); 
 }

for (let i of people) {
    if(i=="Jason"){
        console.log(i);
        break;
    }
 }



/* ================= Exercice 2 ================= */

let colors = ["orange","noire","blanc","bleu","rouge"];
for (let i in colors) {
    i =parseInt(i);
    let j=i+1;
    console.log("Mon choix numero " +(j) + " est : " + colors[i] );
 }

 let suffixe = ["er","eme"]
 for (let i in colors) {
    i =parseInt(i);
    let j=i+1;
    if(colors[i]=="orange" ){
        console.log("Mon "+ (j+suffixe[0]) + " choix est : " + colors[i] );
    }else{
        console.log("Mon "+ (j+suffixe[1]) + " choix est : " + colors[i] );
    }
 }


 /* ================= Exercice 3 ================= */
let numero;
console.log(typeof(numero));

let incrementation = 0;
do {
    numero = prompt("Veuillez entrer un numero ");
    incrementation++;
  }
  while (numero < 10);


/* ================= Exercice 4 ================= */

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

numberOfFloors =4;
console.log(numberOfFloors);

firstFloor = 3;
thirdFloor = 9;
NbrAppart = firstFloor + thirdFloor;
console.log(NbrAppart);

let nameOfTenants = ["Sarah", "Dan", "David"];
console.log("le nom du deuxieme locataire est :" + nameOfTenants[1]);

loyer1 = 990 + 500;
loyer2 = 1000;

if(loyer1 > loyer2){
    loyer2 = loyer2+1200;
    console.log("le nouveau loyer de Dan est " + loyer2);
}


/* ================= Exercice 5 ================= */

let famille = {
    nom: "Dion",
    role: "Pere",
    age: 50,
    Ville: "Man"
  };

for(fam in famille){
    console.log(fam);
}
for(fam in famille){
    console.log(famille[fam]);
}

/* ================= Exercice 6 ================= */
const details = {
    my: "name",
    is: "Rudolf",
    the: "raindeer"
  }
  console.log("Mon " + details.my + " est " + details.is + " le " +details.the );

/* ================= Exercice 7 ================= */
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
Ordonner = names.sort();

let lettre1 = "";
for (let choix of Ordonner) {
    console.log(choix.charAt(0));
    lettre1 = lettre1 + choix.charAt(0);
 }
console.log(lettre1);
 
