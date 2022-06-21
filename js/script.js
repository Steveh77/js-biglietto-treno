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
console.log(prezzoPerChilometro)


// sconto in base all'età

let sconto ; 

if (età < 18){
    sconto = prezzoPerChilometro * 20 / 100

} else if (età >= 65) {
    sconto = prezzoPerChilometro * 40 / 100
}else{
    sconto = prezzoPerChilometro
}
console.log(sconto)

const prezzoFinale = prezzoPerChilometro - sconto;

console.log(prezzoFinale.toFixed(2) + "€")
