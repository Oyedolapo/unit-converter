/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const meter = 3.281
const liter = 0.264
const kilogram = 2.204

const inputEl = document.getElementById("input-el")
const convertEl = document.getElementById("convert-btn")
const numEl = document.getElementById("num-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
const cardsEl = document.querySelector(".cards")
const toggleEl = document.querySelector(".toggler")


convertEl.addEventListener("click", function() {
    lengthConversion(inputEl.value, ["meters", "feet"])
    volumeConversion(inputEl.value, ["liters", "gallons"])
    massConversion(inputEl.value, ["kilos", "pounds"])

})

function lengthConversion(num, arr) {
    let lengthText = ""
    let meterConvert = num * meter
    let feetConvert = num / meter

    lengthText = `
        <p>
        ${num} ${arr[0]} = ${meterConvert.toFixed(3)} ${arr[1]} 
        || ${num} ${arr[1]} = ${feetConvert.toFixed(3)} ${arr[0]}
        </p>
    `
    lengthEl.innerHTML = lengthText
}

function volumeConversion(num, arr) {
    let volumeText = ""
    let literConvert = num * liter
    let gallonConvert = num / liter


    volumeText = `
      <p>
        ${num} ${arr[0]} = ${literConvert.toFixed(3)} ${arr[1]} 
        || ${num} ${arr[1]} = ${gallonConvert.toFixed(3)} ${arr[0]}
      </p>
    `
    volumeEl.innerHTML = volumeText
}

function massConversion(num, arr) {
    let massText = ""
    let kiloConvert = num * kilogram
    let poundConvert = num / kilogram


    massText = `
      <p>
        ${num} ${arr[0]} = ${kiloConvert.toFixed(3)} ${arr[1]} 
        || ${num} ${arr[1]} = ${poundConvert.toFixed(3)} ${arr[0]}
      </p>
    `
    massEl.innerHTML = massText
}


