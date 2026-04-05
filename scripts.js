const button = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");
const inputCurrency = document.querySelector(".input-currency");
const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
const currencyValueConverted = document.querySelector(".currency-value");
const currencyName = document.getElementById("currency-name");
const currencyImg = document.getElementById("currency-img");

const dolarToday = 5.2;
const euroToday = 6.2;

function convertValues() {
    const value = Number(inputCurrency.value);
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(value);

    if (currencySelect.value === "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(value / dolarToday);
        currencyName.innerHTML = "USD Dólar";
        currencyImg.src = "img/estados-unidos (1) 1.png";
        currencyImg.alt = "Bandeira dos Estados Unidos";
    }
    if (currencySelect.value === "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(value / euroToday);
        currencyName.innerHTML = "EUR Euro";
        currencyImg.src = "img/euro.png";
        currencyImg.alt = "Bandeira da União Europeia";
    }
}

function changeCurrency() {
    convertValues();
}

button.addEventListener("click", convertValues);
currencySelect.addEventListener("change", changeCurrency);

