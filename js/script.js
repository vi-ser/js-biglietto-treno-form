/*
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero

Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

const inputUserElement = document.querySelector("#userName");
const outputUserElement = document.querySelector("#userOutput");

const buttonPrintElement = document.querySelector("#printTicket");


const pricePerKm = 0.21;
const inputKmElement = document.querySelector("#travelLenght");
const inputAgeElement = document.querySelector("#userAge");
const outputPriceElement = document.querySelector("#priceOutput");
const outputCoachElement = document.querySelector("#coach");
const outputRateElement = document.querySelector("#rate");
const outputCpCodeElement = document.querySelector("#cpCode");




buttonPrintElement.addEventListener("click",
    function () {
        const newName = inputUserElement.value;
        outputUserElement.textContent = newName;

        const kmValue = inputKmElement.value;
        const ageValue = inputAgeElement.value;

        //controllo che i valori inseriti siano corretti
        if (isNaN(kmValue) || kmValue < 1 || isNaN(ageValue) || ageValue < 0) {
            alert("Hai inserito un valore errato, ti preghiamo di ricaricare la pagina e inserire il valore indicato correttamente");
        }

        //calcolo il prezzo finale
        const basePrice = pricePerKm * kmValue;
        let finalPrice = basePrice;
        outputRateElement.textContent = "Standard";
        outputCpCodeElement.textContent = "9960";


        if (ageValue < 18) {
            finalPrice = basePrice - basePrice * 0.2;
            outputRateElement.textContent = "Under 18";

        }

        else if (ageValue >= 65) {
            finalPrice = basePrice - basePrice * 0.4;
            outputRateElement.textContent = "Over 65";
        }


        outputPriceElement.textContent = "€ " + finalPrice.toFixed(2);

        outputCoachElement.textContent = Math.floor(Math.random() * 5 + 1);

    }
)



