import { expect, test } from './node_modules/vitest'
import { sayHello } from './hello.js'

test('Cas de démarrage #1 - Dire bonjour avec un prénom', () => {
  expect(sayHello("Laïla")).toBe("Bonjour, Laïla !")
})

test('Cas de démarrage #2 - Dire bonjour avec un prénom', () => {
  expect(sayHello(42)).toBe("Ce n'est pas un prénom.")
})

test('Cas de démarrage #3 - Dire bonjour avec un prénom', () => {
  expect(sayHello("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat voluptas quos animi! Reprehenderit odio ut beatae aperiam id. Vitae velit labore reiciendis praesentium fugit ratione aperiam sequi ullam libero in!")).toBe("C'est trop long pour être un prénom !?")
})

test('Cas de démarrage #4 - Dire bonjour avec un prénom', () => {
  expect(sayHello()).toBe("Je n'ai personne à qui dire bonjour.")
})