import { expect, test } from './node_modules/vitest'
import { fizzbuzz } from './fizzbuzz'

test('Cas de démarrage #1', () => {
  expect(fizzbuzz(1)).toBe(1)
})

test('Cas de démarrage #2', () => {
  expect(fizzbuzz(2)).toBe(2)
})

test('Cas de démarrage #3', () => {
  expect(fizzbuzz(3)).toBe("Fizz")
})

test('Cas de démarrage #4', () => {
  expect(fizzbuzz(4)).toBe(4)
})

test('Cas de démarrage #5', () => {
  expect(fizzbuzz(5)).toBe("Buzz")
})

test('Cas de démarrage #6', () => {
  expect(fizzbuzz(6)).toBe("Fizz")
})

test('Cas de démarrage #6', () => {
  expect(fizzbuzz(15)).toBe("FizzBuzz")
})