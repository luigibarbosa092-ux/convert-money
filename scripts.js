const button = document.querySelector(".convert-button") 
const curryselect = document.querySelector(".currency-select")

function convertvalues(){
        const inputCurrency = document.querySelector(".input-currency").value
const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
const currencyvalueConvertd = document.querySelector(".currency-value-to-convert")

    console.log(curryselect.value)

const dolartoday = 5.2
const eurotoday = 6.2

const convertedValue = inputCurrency / dolartoday


if(curryselect.value === "dolar"){
currencyvalueConvertd.innerHTML = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
}).format(inputCurrency / dolartoday)

    }
    if(curryselect.value === "euro"){

    }

    if(curryselect.value === "euro"){
        currencyvalueConvertd.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrency / eurotoday);
    }



 currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
}).format(inputCurrency);


function changeCurrency(){
    const currencyName = document.getElementById("currency-name")
}const currencyimg =document.querySelector(".currency-img")

    if(curryselect.value === "dolar"){
    currencyName.innerHTML = "Dólar americano"
    currencyimg.src = "img/estados-unidos (1) 1.png"
    }

     if(curryselect.value === "euro"){
    currencyName.innerHTML = "Euro"
    currencyimg.src = "img/euro.png"
     }
    
   convertvalues()
    
     

currencyselect.addEventListener("change", changeCurrency)
 button.addEventListener("click", convertvalues)

console.log(convertedValue)

}

