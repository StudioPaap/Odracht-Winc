
//Hamburger menu gegevens
let hamburger = document.getElementById("btn-toggle-nav")
console.log(hamburger);

let menu = document.getElementById("nav-sidebar");
console.log(menu.classList);


// De knoppen die ik gebruik en de kleur die ze al hebben
const defaultKnop = document.getElementById("Knopje");

const redKnop = document.getElementById("red-Knop");

const blueKnop = document.getElementById("blue-Knop");

const greenKnop = document.getElementById("green-Knop");

const oranjeKnop = document.getElementById("orange-Knop")



//Hamburger knop in actie, menu wordt zichtbaar
hamburger.addEventListener("mouseover", function (){
    menu.classList.remove("hidden");
})

//Functie menu verdwijnt

 const sluitenMenu = function (){
    menu.classList.add("hidden");
 };




//Er wordt op de verschillende knoppen gedrukt + functie sluiten

//default-knop

defaultKnop.addEventListener('click', function (){
        document.body.style.backgroundColor = "#f2f2f2";
    sluitenMenu();
    });

 //Rode-knop
redKnop.addEventListener("click",function(){
    document.body.style.backgroundColor = "red";

sluitenMenu();
});




//Oranje-knop

oranjeKnop.addEventListener("click",function(){
    document.body.style.backgroundColor = "orange";

    sluitenMenu();
});




// Blauwe-knop

blueKnop.addEventListener("click",function(){
    document.body.style.backgroundColor = "aqua";

    sluitenMenu();
});


//Groene-knop

greenKnop.addEventListener("click",function(){
    document.body.style.backgroundColor = "chartreuse";

    sluitenMenu();
});
