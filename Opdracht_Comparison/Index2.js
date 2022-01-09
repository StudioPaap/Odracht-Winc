
const age = 12;
let isFemale = true;
let driverStatus = "designated";
let firstName = "Bram";
const totalAmount = 74;

//Check voor leeftijd
if (age >= 18) {
    console.log("Je bent ouder dan 18 jaar, je bent welkom");
}
else {
    console.log("Je bent te jong en niet welkom hier.");
}



//Check voor ladiesnight
if (isFemale) {
    console.log("Het is ladiesnight je bent welkom!")
}
else {
    console.log("Het is ladiesnight, je bent niet welkom")
}


//Check of iemand safe kan rijden
if (driverStatus = "designated") {
    console.log("Je mag rijden, het is veilig")
}
else {
    console.log("Zoek iemand die de bob wil zijn voor je of pak het ov")
}

//Check voor discount

if (age >= 18 && age <= 25){
    console.log("Je krijgt 50% korting op een drankje")
}
else {
    console.log("je krijgt geen korting")
}


//Check voor naam

if (firstName = "Bram" || firstName = "Sara"){
 console.log ("Je krijgt een gratis biertje!")
}
else{ ("Geen gratis bier voor jou")
}


//Check voor Rekening

if(totalAmount >= 25 && totalAmount<= 50){
    console.log("Je krijgt gratis ballen")
}
if(totalAmount >= 50 && totalAmount <= 75){
    console.log("Je krijgt gratis nachos")
}
if(totalAmount >= 75){
    console.log("Je krijgt gratis champagne")
}
else{
    console.log ("Geef meer geld uit en ontvang een leuk cadeautje")
}