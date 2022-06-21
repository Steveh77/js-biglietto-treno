// chiedere all'utente numero km
// chiedere età passeggero
// prezzo del biglietto 0.21€ al km
// sconto 20% per minorenni e 40% over 65
// output prezzo finale


const kmPercorsi = prompt("quanti chilometri devi percorrere?", 20)
console.log(kmPercorsi)
const età = prompt("quanti anni hai?", 20)
console.log(età)

// km da percorrere * 0.21€ al kilometro

const prezzoPerChilometro = kmPercorsi * (0.21)
console.log(prezzoPerChilometro.toFixed(2) + "€")
document.getElementById("a").innerHTML= "Il prezzo in base ai km è: " + prezzoPerChilometro.toFixed(2) + "€"

// sconto in base all'età

let sconto ; 
let prezzoFinale ;

if (età < 18){
    sconto = prezzoPerChilometro * 20 / 100
    document.getElementById("b").innerHTML= "Lo sconto è: " + sconto.toFixed(2) + "€"
    console.log(sconto)
    prezzoFinale = prezzoPerChilometro - sconto;
    document.getElementById("c").innerHTML= "Il prezzo scontato è: " + prezzoFinale.toFixed(2) +"€"

} else if (età >= 65) {
    sconto = prezzoPerChilometro * 40 / 100
    document.getElementById("b").innerHTML= "Lo sconto è: " + sconto.toFixed(2) + "€"
    console.log(sconto)
    prezzoFinale = prezzoPerChilometro - sconto;
    document.getElementById("c").innerHTML= "Il prezzo scontato è: " + prezzoFinale.toFixed(2) +"€"
}else{
    sconto = 0
    document.getElementById("b").innerHTML= "Lo sconto è: " + sconto.toFixed(2) + "€"
    console.log(sconto)
    prezzoFinale = prezzoPerChilometro;
    document.getElementById("c").innerHTML= "Il prezzo è: " + prezzoPerChilometro.toFixed(2) +"€"
}

console.log(prezzoFinale.toFixed(2) + "€")
