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
const discountUnderAge=0.2;
const discountSenior=0.4;

let distanceTravel;
let userAge;
let discount;

function ticketPriceCalc(){
    distanceTravel= distance.value;
    userAge= age.value;
    outputHtml.style.display = "none";
    // console.log(distanceTravel);//DEBUG
    // console.log(userAge);//DEBUG

    if(checkAll()){
        if(userAge<18){
            discount=discountUnderAge;
        } else if (userAge>=65){
            discount=discountSenior
        } else discount=0;
    
        let ticketPrice= distanceTravel*costXkm;
        if (discount>0){
            let noDiscountedPrice = ticketPrice;
            ticketPrice = round(ticketPrice-(ticketPrice*discount));
            outputHtml.style.display = "block";
            outputHtml.innerHTML = `Il biglietto per percorrere ${distanceTravel}Km, costerà <span class="full_price">${noDiscountedPrice}</span> ${ticketPrice} &euro;`
        } else {
            ticketPrice = round(ticketPrice);
            outputHtml.style.display = "block";
            outputHtml.innerHTML = `Il biglietto per percorrere ${distanceTravel}Km, costerà ${ticketPrice} &euro;`
        }
    }
}

function isANum(num, e){
    if (isNaN(num)){
        e.value="";
        e.placeholder = "Digita un numero senza usare caratteri"
        return false
    }
    return true;
}

function emptyValue(aValue, e){
    if(aValue.length===0 || aValue<1){
        e.value="";
        e.placeholder = "Digita un numero senza usare caratteri"
        return false;
    }
    return true;
}

function checkAll(){
    if(isANum(distanceTravel,distance) && 
    isANum(userAge,age) && 
    emptyValue(distanceTravel,distance) &&
    emptyValue(userAge,age)
    ){return true;} 
    return false;
}

function round(num) {
    n = Math.round(num  * 100) / 100;
    return n;
}