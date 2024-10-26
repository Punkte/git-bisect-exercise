import {describe, expect, it} from 'vitest'
import {add} from '../src/calculator/add'

type TestCase = {numbers: [number, number], expected: number};
describe('additions', () => {
  it
    .each<TestCase>([
      {numbers: [1,1], expected: 2},
      {numbers: [1,2], expected: 3},
      {numbers: [1,3], expected: 5},
      {numbers: [1,4], expected: 5},
      {numbers: [1,5], expected: 6},
    ])
    ('should add numbers', ({numbers, expected}) => {
      expect(add(...numbers)).toEqual(expected)
    })
})