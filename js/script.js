// [X]Il programma dovrà chiedere all’utente 
// [X]il numero di chilometri che vuole percorrere 
// [X]l’età del passeggero.

// [X]calcolare il prezzo totale del viaggio, secondo queste regole:
// [X]il prezzo del biglietto è definito in base ai km (0.21 € al km)
// [X]va applicato uno sconto del 20% per i minorenni
// [X]va applicato uno sconto del 40% per gli over 65.

// [X]L’output del prezzo finale va messo fuori in forma umana 
// (con massimo due decimali, per indicare centesimi sul prezzo). 
// Questo richiederà un minimo di ricerca.
const outputHtml = document.getElementById('output');
const distance = document.getElementById('distance');
const age = document.getElementById('user_age');
const costXkm = 0.21;
let distanceTravel;
let userAge;
let discount;
let check;

function ticketPriceCalc(){
    distanceTravel= distance.value;
    userAge= age.value;
    console.log(distanceTravel);//DEBUG
    console.log(userAge);//DEBUG

    isANum(distanceTravel,distance);
    isANum(userAge,age);
    emptyValue(distanceTravel,distance);
    emptyValue(userAge,age);

    switch(true){
        case (userAge<18):
            discount=0.2;
            break;
        case (userAge>=65):
            discount=0.4;
            break;
        default:
            discount=0;
    }

    let ticketPrice= distanceTravel*costXkm;

    ticketPrice = round(ticketPrice-(ticketPrice*discount));
    if(check) {
        outputHtml.innerHTML = `Il biglietto per percorrere ${distanceTravel}Km, costerà ${ticketPrice} &euro;`
    }
}

function isANum(num, e){
    if (isNaN(num)){
        e.value="";
        e.placeholder = "Digita un numero senza usare caratteri"
        check=false;
    } else{
        check=true;
        //  console.log(`${num} is a num`)//DEBUG
     }
}

function emptyValue(aValue, e){
    if(aValue.length===0){
        e.value="";
        e.placeholder = "Digita un numero senza usare caratteri"
        check=false;
    }
    else{
        check=true;
    }
}

function round(num) {
    var m = Number((Math.abs(num) * 100).toPrecision(4));
    return Math.round(m) / 100 * Math.sign(num);
}