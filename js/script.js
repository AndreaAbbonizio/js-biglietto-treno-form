// Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere
// - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.


/*
-memorizzare valore input km da percorrere ed età del passegero
-calcolare e memorizzare il prezzo base (kmPercorsi * 0.21)
? SE l'età è minore di 18 anni
    °applicare sconto del 20%
:? ALTRIMENTI SE l'età è maggiore di 65 anni
    °applicare sconto deel 40%


*/

//variabili km utente
let userKmInputEl = document.getElementById("userKm");
let buttonUserKmEl= document.getElementById("buttonUserKm");
let userKmEl;

//variabili età utente
let userAgeInputEl = document.getElementById("userAge")
let buttonUserAgeEl= document.getElementById("buttonUserAge");
let userAgeEl;

//variabili prezzi biglietti
let basePrice;
const priceKmTicket = 0.21;
let price20;
let price40 ;

//valore input km
buttonUserKmEl.addEventListener("click" , function(){
   userKmEl = userKmInputEl.value;
   console.log("vuoi percorrere: " + userKmEl + "km");
   basePrice = userKmEl * priceKmTicket;
})

//valore input età
buttonUserAgeEl.addEventListener("click", function() {
    userAgeEl = userAgeInputEl.value;
    console.log("La tue età è: " + userAgeEl + " anni");

    //calcolo prezzo finale in base all'età
    if (userAgeEl < 18){
        //calcolo sconto 20%
        price20= basePrice / 100 * 20;
        console.log(`Il prezzo scontato del biglietto è : ${price20.toFixed(2)} €`);
        //stringa da mostrare in pagina
        document.getElementById("priceFinal").innerHTML="prezzo scontato = " + price20.toFixed(2) + "€";
    } else if (userAgeEl >= 65) {
        //calcolo sconto 40%
        price40= basePrice / 100 * 40 ;
        console.log(`Il prezzo scontato del biglietto è : ${price40.toFixed(2)} €`); 
        document.getElementById("priceFinal").innerHTML="prezzo scontato = " + price40.toFixed(2) + "€";

    }else{
        //prezzo base 
        console.log(`Il prezzo base del tuo biglietto è ${basePrice.toFixed(2)} € `);
        document.getElementById("priceFinal").innerHTML="prezzo base = " + basePrice.toFixed(2) + "€";

    }

})













