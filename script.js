const buttonConvert = document.querySelector("button")
const selectCurrency = document.querySelector(".select-currency")
const selectChange = document.querySelector(".select-change-currency")

const convertValues = async () => {

    const inputValue = document.querySelector(".value").value
    const currencyValue = document.querySelector(".select-currency").value
    const changeValue = document.querySelector(".select-change-currency").value
    
    const finalResult = document.querySelector(".final-result")

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then( response => response.json())

    const dolarToday = data.USDBRL.high
    const euroToday = data.EURBRL.high                                                                          
    const bitcoinToday = data.BTCBRL.high
    const realToday = 1

    if (currencyValue === "real" & changeValue === "dolar") {

        finalResult.innerHTML = new Intl.NumberFormat("en-US",{
            style:"currency",
            currency:"USD"
            }).format(inputValue / dolarToday);

    } else if (currencyValue === "real" & changeValue === "euro") {

        finalResult.innerHTML = new Intl.NumberFormat("de-DE",{
            style:"currency",
            currency:"EUR"
            }).format(inputValue / euroToday);

    } else if (currencyValue === "real" & changeValue === "bitcoin") {

        finalResult.innerHTML = new Intl.NumberFormat("de-DE",{
            style:"currency",
            currency:"BTC"
            }).format(inputValue * realToday / bitcoinToday);

    } else if (currencyValue === "dolar" & changeValue === "real") {

        finalResult.innerHTML = new Intl.NumberFormat("pt-BR",{
            style:"currency",
            currency:"BRL"
            }).format(inputValue * dolarToday / realToday);

    } else if (currencyValue === "dolar" & changeValue === "euro") {

        finalResult.innerHTML = new Intl.NumberFormat("de-DE",{
            style:"currency",
            currency:"EUR"
            }).format(inputValue * dolarToday / euroToday);

    } else if (currencyValue === "dolar" & changeValue === "bitcoin") {

        finalResult.innerHTML = new Intl.NumberFormat("de-DE",{
            style:"currency",
            currency:"BTC"
            }).format(inputValue * dolarToday / bitcoinToday);

    } else if (currencyValue === "euro" & changeValue === "real") {

        finalResult.innerHTML = new Intl.NumberFormat("pt-BR",{
            style:"currency",
            currency:"BRL"
            }).format(inputValue * euroToday / realToday);

    } else if (currencyValue === "euro" & changeValue === "dolar") {

        finalResult.innerHTML = new Intl.NumberFormat("en-US",{
            style:"currency",
            currency:"USD"
            }).format(inputValue * euroToday / dolarToday);

    } else if (currencyValue === "euro" & changeValue === "bitcoin") {

        finalResult.innerHTML = new Intl.NumberFormat("de-DE",{
            style:"currency",
            currency:"BTC"
            }).format(inputValue * euroToday / bitcoinToday);

    } else if (currencyValue === "bitcoin" & changeValue === "real") {

        finalResult.innerHTML = new Intl.NumberFormat("pt-BR",{
            style:"currency",
            currency:"BRL"
            }).format(inputValue * bitcoinToday / realToday);

    } else if (currencyValue === "bitcoin" & changeValue === "euro") {

        finalResult.innerHTML = new Intl.NumberFormat("de-DE",{
            style:"currency",
            currency:"EUR"
            }).format(inputValue * bitcoinToday / euroToday);

    } else if (currencyValue === "bitcoin" & changeValue === "dolar") {

        finalResult.innerHTML = new Intl.NumberFormat("en-US",{
            style:"currency",
            currency:"USD"
            }).format(inputValue * bitcoinToday / dolarToday);

    } else {
        alert("Choose two different currencies!")
    }

    convertImg ()
}

const convertImg = () => {

    const currencyValue = document.querySelector(".select-currency").value
    const changeValue = document.querySelector(".select-change-currency").value
    const imgCurrency = document.querySelector(".img-currency")
    const imgChangeCurrency = document.querySelector(".img-change-currency")
    const imgChangedCurrency = document.querySelector(".img-changed-currency")

    if (currencyValue === "real") {
        imgCurrency.src = "./assets/Real.png"
       

    } else if (currencyValue === "euro") {
        imgCurrency.src = "./assets/Euro.png"
        

    } else if (currencyValue === "dolar") {
        imgCurrency.src = "./assets/Dólar.png"
        

    } else {
        imgCurrency.src = "./assets/Bitcoin.png"

    }

    if (changeValue === "real") {
        imgChangeCurrency.src = "./assets/Real.png"
        imgChangedCurrency.src = "./assets/Real.png"

    } else if (changeValue === "euro") {
        imgChangeCurrency.src = "./assets/Euro.png"
        imgChangedCurrency.src = "./assets/Euro.png"

    } else if (changeValue === "dolar") {
        imgChangeCurrency.src = "./assets/Dólar.png"
        imgChangedCurrency.src = "./assets/Dólar.png"

    } else {
        imgChangeCurrency.src = "./assets/Bitcoin.png"
        imgChangedCurrency.src = "./assets/Bitcoin.png"

    }
}

selectCurrency.addEventListener("change", convertValues)
selectChange.addEventListener("change", convertValues) 
buttonConvert.addEventListener("click", convertValues)

    