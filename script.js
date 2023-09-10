let celInput = document.querySelector('#celcius > input');
let fahInput = document.querySelector('#Fahrenheit > input');
let kelInput = document.querySelector('#Kelvin > input');


let btn = document.querySelector('.button button');

function roundNumber(number){
    return Math.round(number*100)/100
}

celInput.addEventListener('input', function(){
    let cTemp = parseFloat(celInput.value);
    let fTemp = (cTemp*(9/5)) * 32;
    let kTemp = cTemp + 273.15;

    fahInput.value = roundNumber(fTemp);
    kelInput.value = roundNumber(kTemp);
})

fahInput.addEventListener('input', function(){
    let fTemp = parseFloat(fahInput.value);
    let cTemp = (fTemp - 32) * (5/9);
    let kTemp = (fTemp - 32) * (5/9) + 273.15;

    celInput.value = roundNumber(cTemp);
    kelInput.value = roundNumber(kTemp);
})

kelInput.addEventListener('input', function(){
    let kTemp = parseFloat(kelInput.value);
    let cTemp = kTemp - 273.15;
    let fTemp = (kTemp - 273.15) * (9/5) + 32;

    celInput.value = roundNumber(cTemp);
    fahInput.value = roundNumber(fTemp);
})

btn.addEventListener('click', ()=>{
    celInput.value = ""
    fahInput.value = ""
    kelInput.value = ""
})
