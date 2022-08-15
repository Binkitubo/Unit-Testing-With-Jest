
test("One euro should be 1.206 dollars", function () {
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')

    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2);
})

test("One dollar should be 138,53 yens", function () {

    const { fromDollarToYen } = require('./app.js')

    expect(fromDollarToYen(10)).toBe(1385.3);
})

test("One yen should be 0.0061 pounds", function () {

    const { fromYenToPound } = require('./app.js')

    expect(fromYenToPound(2)).toBe(0.0122);
})
