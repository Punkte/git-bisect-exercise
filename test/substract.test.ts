import {describe, expect, it} from 'vitest'
import {substract} from '../src/calculator/substract'

type TestCase = {numbers: [number, number], expected: number};
describe('substractions', () => {
  it
    .each<TestCase>([
      {numbers: [1,1], expected: 0},
      {numbers: [1,2], expected: -1},
      {numbers: [1,3], expected: -2},
      {numbers: [1,4], expected: -3},
      {numbers: [1,5], expected: -4},
    ])
    ('should substract numbers', ({numbers, expected}) => {
      expect(substract(...numbers)).toEqual(expected)
    })
})