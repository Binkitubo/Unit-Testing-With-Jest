
const fromEuroToDollar = function (valueInEuro) {
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

const fromYenToPound = function (valueInYen) {
    // convertimos el valor a libras
    let valueInPound = valueInYen * 0.0061;
    // retornamos el valor
    return valueInPound;
}


const fromDollarToYen = function (valueInDollar) {
    // convertimos el valor a yens
    let valueInYen = valueInDollar * 138.53;
    // retornamos el valor
    return valueInYen;
}

module.exports = { fromEuroToDollar, fromYenToPound, fromDollarToYen }