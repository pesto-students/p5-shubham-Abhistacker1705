
const calcOps = require('./Calculator')
//add test cases
test('Properly adds two numbers',() =>{
    expect(calcOps.sum(1,2)).toBe(3);
})

test('Properly adds two float numbers',() =>{
    expect(calcOps.sum(1.3,2.2)).toBeCloseTo(3.5);
})

//subtract test cases
test('Properly subtracts two numbers',() =>{
    expect(calcOps.diff(1,2)).toBe(-1);
})

test('Properly subtracts two float numbers',() =>{
    expect(calcOps.diff(1.3,2.2)).toBeCloseTo(-0.9);
})

//Multiply test cases
test('Multiply two numbers properly',() =>{
    expect(calcOps.product(2,3)).toBe(6);
})