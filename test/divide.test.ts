import {describe, expect, it} from 'vitest'
import {divide} from '../src/calculator/divide'

type TestCase = {numbers: [number, number], expected: number};
describe('division', () => {
  it
    .each<TestCase>([
      {numbers: [1,1], expected: 1},
      {numbers: [1,2], expected: 0.5},
      {numbers: [1,4], expected: 0.25},
      {numbers: [1,5], expected: 0.2},
    ])
    ('should divide numbers', ({numbers, expected}) => {
      expect(divide(...numbers)).toEqual(expected)
    })
})