
const {returnTwo, greeting, add, subtract, multiply, divide} = require('../function')

test('returnTwo', () => {
    expect(returnTwo()).toBe(2)
})

test('greeting', () => {
    expect(greeting('James')).toBe('Hello, James.')
})

test('greeting', () => {
    expect(greeting('Jill')).toBe('Hello, Jill.')
})

test('add', () => {
    expect(add(1,2)).toEqual(3)
})

test('add', () => {
    expect(add(5,9)).toEqual(14)
})

describe("Math Functions", () => {
    test('subtract', () => {
        expect(subtract(5,9)).toEqual(-4)
    })

    test('multiply', () => {
        expect(multiply(5,9)).toEqual(45)
    })

    test('divide', () => {
        expect(divide(4,2)).toEqual(2)
    })
})